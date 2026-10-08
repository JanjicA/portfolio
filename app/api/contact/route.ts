import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value: unknown, max: number) {
  return String(value ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max)
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const name = clean(body?.name, 120)
  const email = clean(body?.email, 200)
  const message = String(body?.message ?? '').trim().slice(0, 5000)

  if (!name || !emailPattern.test(email) || message.length < 2) {
    return NextResponse.json({ error: 'Check the name, email, and message.' }, { status: 400 })
  }

  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASSWORD
  const to = process.env.CONTACT_TO
  const from = process.env.SMTP_FROM || user

  if (!host || !user || !pass || !from || !to) {
    return NextResponse.json({ error: 'Mail is not configured yet.' }, { status: 503 })
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })
  } catch (error) {
    console.error('Contact mail failed', error)
    return NextResponse.json({ error: 'Could not send the message. Email me directly instead.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
