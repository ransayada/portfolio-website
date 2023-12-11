import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Ran <ran.fullstack@gmail.com>',
      to: ['ran.sayada@gmail.com'],
      subject: 'Hello world',
      react:'Hello world' ,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}