// app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    // Validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    // Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // TODO: In production, send email via AWS SES
    // For now, log it (we'll add SES later)
    console.log('Contact form submission:', { name, email, service, message });

    // Send email using AWS SES (we'll set this up)
    // await sendEmailViaSES({ name, email, service, message });

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
