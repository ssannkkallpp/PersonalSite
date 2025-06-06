# Email Setup Instructions

To make the contact form actually send emails, you need to set up EmailJS:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your email account
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message: {{subject}}

**Body:**
```
Hi Sankalp,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key**

## 5. Update the Code
Replace these values in `src/components/Contact.tsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

## 6. Test the Form
1. Fill out the contact form on your website
2. Check your email inbox for the message
3. Verify the form shows success/error messages properly

## Alternative: Environment Variables
For better security, you can use environment variables:

1. Create a `.env` file in your project root:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update the code to use:
```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

## Features Included:
- ✅ Real email sending (not just mailto links)
- ✅ Loading states during submission
- ✅ Success/error message display
- ✅ Form validation
- ✅ Disabled form during submission
- ✅ Form reset after successful submission
- ✅ Fallback direct email link