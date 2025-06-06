import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = 'service_portfolio'; // You'll need to set this up
      const templateId = 'template_contact'; // You'll need to set this up
      const publicKey = 'YOUR_PUBLIC_KEY'; // You'll need to set this up

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'sankalp.ramesh23@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sankalp.ramesh23@gmail.com',
      href: 'mailto:sankalp.ramesh23@gmail.com',
    },
    {
      icon: Phone,
      title: 'Let\'s Connect',
      value: 'Available for opportunities',
      href: '#',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Open to Remote & Hybrid',
      href: '#',
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have an exciting project in mind? I'd love to hear about it! 
            Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center mb-6">
                <MessageCircle className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
              </div>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map(({ icon: Icon, title, value, href }) => (
                  <a
                    key={title}
                    href={href}
                    className="flex items-center space-x-4 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold">{title}</h4>
                      <p className="text-gray-600">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-gray-900 font-semibold mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="p-3 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 hover:border-blue-300 group"
                      aria-label={label}
                    >
                      <Icon className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Response Promise */}
              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-blue-700 font-medium text-sm">I'll get back to you within 24 hours!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-green-700 font-medium">Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <span className="text-red-700 font-medium">Failed to send message. Please try again or email me directly.</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Alternative Contact */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                Prefer to email directly? Reach me at{' '}
                <a href="mailto:sankalp.ramesh23@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium">
                  sankalp.ramesh23@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;