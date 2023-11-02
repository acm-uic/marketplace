import { NextResponse } from "next/server";
import pb from '../../Domain/pocketbase';

export async function POST(request) {
    const data = await request.json();
    const { id, code } = data;

    if (!id || !code) {
        return NextResponse.json('Missing Information', { status: 400 });
    }

    try {
        const purchase = await pb.collection('purchase').getOne(id);

        for (const product of purchase.products) {
            await pb.collection('products').update(product.id, { quantity: product.quantity - product.cartQuantity })
        }


        if (!purchase) {
            return NextResponse.json('Purchase not found', { status: 404 });
        }

        if (purchase.verificationCode === code) {
            await pb.collection('purchase').update(id, { confirmed: true, });
            return NextResponse.json('Purchase confirmed', { status: 200 });
        } else {
            return NextResponse.json('Invalid verification code', { status: 400 });
        }
    } catch (error) {
        console.error('Error while processing the request:', error);
        return NextResponse.json('Error processing the request', { status: 500 });
    }
}
