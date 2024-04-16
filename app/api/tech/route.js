import connectMongoDB from '@/libs/mongoDb';
import Tech from '@/models/tech';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { firstName, lastName, age, location, phone, email } =
    await request.json();
  console.log(firstName);
  await connectMongoDB();

  // Check if the user already exists
  const existingUser = await Tech.findOne({ firstName, lastName, phone });
  console.log(existingUser)
  if (existingUser) {
    return NextResponse.json({ message: 'User is already registered' }, { status: 201 });
  }

  // If the user does not exist, create a new record
  await Tech.create({ firstName, lastName, age, location, phone, email });
  return NextResponse.json({ message: 'Form Sent Successfully!' }, { status: 201 });
}
