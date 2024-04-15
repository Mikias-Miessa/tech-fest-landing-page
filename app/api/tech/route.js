import connectMongoDB from '@/libs/mongoDb';
import Tech from '@/models/tech';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { firstName, lastName, age, location, phone, email } = await request.json();
  console.log(firstName)
  await connectMongoDB();
  await Tech.create({ firstName, lastName, age, location, phone, email });
  return NextResponse.json({ message: 'Tech Form Created' }, { status: 201 });
}