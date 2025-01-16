import { NextRequest } from 'next/server';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  return Response.json({ ok: true, message: 'Hello, world!' });
}
