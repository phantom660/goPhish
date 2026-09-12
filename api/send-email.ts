// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async function handler(req: any, res: any) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({
//       error: 'Method not allowed',
//     });
//   }

//   try {
//     const {
//       username,
//       password, 
//       timestamp,
//       event,
//       message
//     } = req.body;

//     const result = await resend.emails.send({
//       from: 'Website Form <onboarding@resend.dev>',
//       to: ['YOUR_EMAIL@gmail.com'],
//       subject: 'New form submission',
//       text: `
// New form submission

// Username: ${username ?? ''}
// Password: ${password ?? ''}
// Timestamp: ${timestamp}
// Event: ${event}

// Message:
// ${message ?? ''}
//       `,
//     });

//     if (result.error) {
//       console.error(result.error);

//       return res.status(500).json({
//         error: 'Failed to send email',
//       });
//     }

//     return res.status(200).json({
//       success: true,
//     });
//   } catch (error) {
//     console.error(error);

//     return res.status(500).json({
//       error: 'Failed to send email',
//     });
//   }
// }

import { Resend } from 'resend';

export default async function handler(req: any, res: any) {
  try {
    console.log('FUNCTION STARTED');

    if (req.method !== 'POST') {
      return res.status(405).json({
        error: 'Method not allowed',
      });
    }

    const apiKey = process.env.RESEND_API_KEY;

    console.log('API KEY EXISTS:', Boolean(apiKey));

    if (!apiKey) {
      return res.status(500).json({
        error: 'RESEND_API_KEY is missing',
      });
    }

    const resend = new Resend(apiKey);

    const { timestamp, event } = req.body ?? {};

    console.log('REQUEST BODY:', {
      timestamp,
      event,
    });

    const result = await resend.emails.send({
      from: 'Website Form <onboarding@resend.dev>',
      to: ['tbera7@gatech.edu'],
      subject: 'Website form submitted',
      text: `
Event: ${event}
Timestamp: ${timestamp}
      `,
    });

    console.log('RESEND RESULT:', result);

    if (result.error) {
      return res.status(500).json({
        error: result.error.message,
      });
    }

    return res.status(200).json({
      success: true,
      id: result.data?.id,
    });
  } catch (error: any) {
    console.error('FUNCTION CRASH:', error);

    return res.status(500).json({
      error: error?.message || 'Unknown server error',
    });
  }
}