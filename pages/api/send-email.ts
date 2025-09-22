import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { firstName, lastName, email, interestedGame, notes } = req.body;

  // Валидация данных
  if (!firstName || !lastName || !email || !interestedGame) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Проверка email формата
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    // Проверяем наличие SMTP настроек
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.log('=== SMTP NOT CONFIGURED - USING DEMO MODE ===');
      console.log('Name:', firstName, lastName);
      console.log('Email:', email);
      console.log('Interested Game:', interestedGame);
      console.log('Notes:', notes || 'No notes provided');
      console.log('Date:', new Date().toLocaleString());
      console.log('==============================================');
      
      // Демо режим - просто логируем данные
      await new Promise(resolve => setTimeout(resolve, 1000));
      return res.status(200).json({ 
        message: 'Registration successful! (Demo mode - SMTP not configured)' 
      });
    }

    // Создаем transporter для отправки email
    const transporter = nodemailer.createTransporter({
      host: smtpHost,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Настройки email
    const mailOptions = {
      from: smtpUser,
      to: 'vs@pixward.com',
      subject: 'New Pre-registration - Pixward Games',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Pre-registration - Pixward Games
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Interested Game:</strong> ${interestedGame}</p>
            <p><strong>Registration Date:</strong> ${new Date().toLocaleString()}</p>
            ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ''}
          </div>
          
          <div style="background-color: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #1976d2;">
              <strong>Next Steps:</strong> Contact the user to provide more information about ${interestedGame} and the pre-registration process.
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #dee2e6; margin: 30px 0;">
          <p style="color: #6c757d; font-size: 12px; text-align: center;">
            This email was sent from the Pixward Games website contact form.
          </p>
        </div>
      `,
      text: `
        New Pre-registration - Pixward Games
        
        Contact Information:
        Name: ${firstName} ${lastName}
        Email: ${email}
        Interested Game: ${interestedGame}
        Registration Date: ${new Date().toLocaleString()}
        ${notes ? `Notes: ${notes}` : ''}
        
        Next Steps: Contact the user to provide more information about ${interestedGame} and the pre-registration process.
        
        ---
        This email was sent from the Pixward Games website contact form.
      `,
    };

    // Отправляем email
    await transporter.sendMail(mailOptions);

    console.log('=== EMAIL SENT SUCCESSFULLY ===');
    console.log('To: vs@pixward.com');
    console.log('From:', smtpUser);
    console.log('Subject: New Pre-registration - Pixward Games');
    console.log('Name:', firstName, lastName);
    console.log('Email:', email);
    console.log('Interested Game:', interestedGame);
    console.log('Notes:', notes || 'No notes provided');
    console.log('================================');

    res.status(200).json({ message: 'Registration successful! We will contact you soon.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Failed to send email. Please try again later or contact support.' 
    });
  }
}
