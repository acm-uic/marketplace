// api/emailSend.js
import { NextResponse } from "next/server";
import pb from '../../Domain/pocketbase';
import nodemailer from 'nodemailer';

function generateConfirmationCode() {
    const min = 0;
    const max = 999999;
    const randomCode = Math.floor(Math.random() * (max - min + 1)) + min;

    const codeString = randomCode.toString().padStart(6, '0');

    return codeString;
}

export async function POST(request) {
    const data = await request.json();
    const { email, name, cart, total } = data;

    if (email == '' || name == '' || cart.length === 0 || total === 0) {
        return NextResponse.json('Missing Information', { status: 400 });
    }

    const emailPattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    if (!emailPattern.test(email)) {
        return NextResponse.json('Invalid Email', { status: 400 });
    }

    let cartItemsHtml = '';
    for (const item of cart) {
        if (item.cartQuantity > item.quantity) {
            return NextResponse.json('Out of stock', { status: 500 });
        }
        cartItemsHtml += `<li>${item.cartQuantity}-${item.title}</li>`;
    }

    const code = generateConfirmationCode();

    const html = `
    <p>Hello ${name},</p>
    <p>Thank you for your purchase. To finalize your reservation, please confirm your email by entering the following <b>code: ${code}</b></p>
    <p>Once you have successfully submitted the code, your reservation will be confirmed. Afterward, kindly visit the ACM office to complete your payment and collect your reserved items.</p>
    <p>Total Price: ${total}. Below is a list of the items you have reserved:</p>
    <ul>
      ${cartItemsHtml}
    </ul>`;

    try {
        const date = new Date()
        date.setDate(date.getDate() + 14) 

        const purchase = await pb.collection('purchase').create({
            email: email,
            username: name,
            products: JSON.stringify(cart),
            total: total,
            confirmed: false,
            verificationCode: code,
            expirationDate: date
        });

        const purchaseId = purchase.id;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_Host,
            port: process.env.SMTP_Port,
            auth: {
                user: process.env.SMTP_User,
                pass: process.env.SMTP_Pass,
            }
        });

        try {
            const res = await transporter.sendMail({
                from: 'ACM@uic.edu',
                to: email,
                subject: 'Purchase Confirmation',
                html: html,
            });

            return NextResponse.json({ status: 200, purchaseId });
        } catch (error) {
            console.error('Error sending confirmation email:', error);
            return NextResponse.json('Error sending confirmation email', { status: 500 });
        }
    } catch (e) {
        console.log();
        return NextResponse.json('Error Creating the purchase', { status: 500 });
    }
}
