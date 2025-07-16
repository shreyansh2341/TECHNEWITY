import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData): Promise<boolean> {
  try {
    // For development, we'll simulate email sending
    // In production, you would configure this with your actual email credentials
    console.log('📧 Contact form submission received:');
    console.log(`Name: ${formData.name}`);
    console.log(`Email: ${formData.email}`);
    console.log(`Company: ${formData.company || 'Not provided'}`);
    console.log(`Service: ${formData.service || 'Not specified'}`);
    console.log(`Message: ${formData.message}`);
    console.log('---');
    
    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For now, we'll return true to simulate successful email sending
    // To enable actual email sending, uncomment the code below and configure with your credentials
    
    /*
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'contact@technewity.com',
        pass: process.env.EMAIL_APP_PASSWORD // Set this in your environment
      }
    });

    // Email content
    const emailContent = `
      New Contact Form Submission - TECHNEWITY LABS
      
      Name: ${formData.name}
      Email: ${formData.email}
      Company: ${formData.company || 'Not provided'}
      Service Interest: ${formData.service || 'Not specified'}
      
      Message:
      ${formData.message}
      
      Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `;

    const mailOptions = {
      from: `"TECHNEWITY LABS Contact Form" <contact@technewity.com>`,
      to: 'contact@technewity.com',
      subject: `New Contact Form Submission from ${formData.name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a; border-bottom: 2px solid #16a34a; padding-bottom: 10px;">
            New Contact Form Submission - TECHNEWITY LABS
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #333;">Contact Details:</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
            <p><strong>Service Interest:</strong> ${formData.service || 'Not specified'}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #16a34a; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${formData.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            <p>This email was sent from the TECHNEWITY LABS contact form.</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Contact form email sent successfully');
    */
    
    return true;
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return false;
  }
}