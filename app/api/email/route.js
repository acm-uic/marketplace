import { NextResponse } from "next/server";
import pb from '../../Domain/pocketbase';
import nodemailer from 'nodemailer';

export async function POST(request) {
    const data = await request.json();
    const { email, name, cart } = data;

    if (email == '' || name == '' || !cart) {
        return NextResponse.json('Missing Information', { status: 400 });
    }

    const emailPattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    if (!emailPattern.test(email)) {
        return NextResponse.json('Invalid Email', { status: 400 });
    }

    let cartItemsHtml = '';
    for (const item of cart) {
        cartItemsHtml += `<p>${item.title}</p>`;
    }

    const html = `
        <p>Hello ${name},</p>
        <p>Thank you for reserving your purchase. To complete your transaction, simply visit the ACM office to make your payment and pick up your products.</p>
        <p>Here are the items you have reserved:</p>
        ${cartItemsHtml}
    `;

    const transporter = nodemailer.createTransport({
        host: 'smtp-relay.brevo.com',
        port: 587,
        auth: {
            user: 'andre.2004.rimes@gmail.com',
            pass: '',
        }
    });

    try {
        const res = await transporter.sendMail({
            from: 'teste@teste.com',
            to: email,
            subject: 'Purchase Confirmation',
            html: html,
        });

        return NextResponse.json('Confirmation email sent', res, { status: 200 });

    } catch (error) {
        console.error('Error sending confirmation email:', error);
        return NextResponse.json('Error sending confirmation email', { status: 500 });
    }
}
