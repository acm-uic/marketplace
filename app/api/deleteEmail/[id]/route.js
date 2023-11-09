import { NextResponse } from "next/server";
import pb from '../../../Domain/pocketbase';

export async function DELETE(req, { params }) {
    try {
        const res = await pb.collection('purchase').delete(params.id);
        return NextResponse.json({ message: 'Delete success', status: 200 });
    } catch (e) {
        return NextResponse.error({ message: 'Error deleting resource', status: 500 });
    }
}
