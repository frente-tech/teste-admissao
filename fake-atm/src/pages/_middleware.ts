import { NextResponse } from 'next/server';

export default function middleware() {
  return NextResponse.rewrite('http://localhost:3000/sign-in');
}
