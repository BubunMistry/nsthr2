'use client';

import { useState } from 'react';
import axios from 'axios';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, Phone, Building, User, MessageCircle, Send } from 'lucide-react';

interface ContactFormData {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  company: string;
  purpose: string;
  message: string;
}

const initialFormState: ContactFormData = {
  first_name: '',
  last_name: '',
  email: '',
  mobile: '',
  company: '',
  purpose: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post('http://localhost:9000/api/contact/submit', formData);
      toast.success('Message sent successfully!');
      setFormData(initialFormState);
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Message not sent!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputWrapperStyle = 'flex items-center gap-2 border border-gray-200 rounded-md px-2 sm:px-3 py-1.5 sm:py-2 shadow-sm focus-within:ring-2 focus-within:ring-[#29A0D8] bg-white dark:bg-gray-900 transition-all w-full hover:shadow-[0_0_8px_rgba(41,160,216,0.2)]';

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-10 bg-white dark:bg-gray-950 rounded-xl border border-blue-200 shadow-xl" style={{ boxShadow: '0 0 30px rgba(41, 160, 216, 0.2)' }}>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-6 sm:mb-8 uppercase tracking-wide">
        GET IN TOUCH WITH US
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={inputWrapperStyle}>
            <User className="text-[#29A0D8] w-4 h-4 sm:w-5 sm:h-5" />
            <Input
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              placeholder="First Name *"
              className="text-sm sm:text-base flex-1 border-0 outline-none focus-visible:ring-0 bg-transparent"
            />
          </div>
          <div className={inputWrapperStyle}>
            <User className="text-[#29A0D8] w-4 h-4 sm:w-5 sm:h-5" />
            <Input
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              placeholder="Last Name *"
              className="text-sm sm:text-base flex-1 border-0 outline-none focus-visible:ring-0 bg-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={inputWrapperStyle}>
            <Mail className="text-[#29A0D8] w-4 h-4 sm:w-5 sm:h-5" />
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email *"
              className="text-sm sm:text-base flex-1 border-0 outline-none focus-visible:ring-0 bg-transparent"
            />
          </div>
          <div className={inputWrapperStyle}>
            <Phone className="text-[#29A0D8] w-4 h-4 sm:w-5 sm:h-5" />
            <Input
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              placeholder="Mobile *"
              className="text-sm sm:text-base flex-1 border-0 outline-none focus-visible:ring-0 bg-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={inputWrapperStyle}>
            <Building className="text-[#29A0D8] w-4 h-4 sm:w-5 sm:h-5" />
            <Input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="text-sm sm:text-base flex-1 border-0 outline-none focus-visible:ring-0 bg-transparent"
            />
          </div>
          <div className={inputWrapperStyle}>
            <MessageCircle className="text-[#29A0D8] w-4 h-4 sm:w-5 sm:h-5" />
            <Input
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              placeholder="Purpose"
              className="text-sm sm:text-base flex-1 border-0 outline-none focus-visible:ring-0 bg-transparent"
            />
          </div>
        </div>

        <div className={`${inputWrapperStyle} items-start`}>
          <MessageCircle className="text-[#29A0D8] w-4 h-4 sm:w-5 sm:h-5 mt-2 sm:mt-3 self-start" />
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            placeholder="Your Message *"
            className="text-sm sm:text-base flex-1 border-0 outline-none focus-visible:ring-0 resize-none bg-transparent"
          />
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full md:w-auto bg-gradient-to-r from-[#29A0D8] to-[#1E7CAD] hover:from-[#1E7CAD] hover:to-[#29A0D8] transition-all shadow-lg hover:shadow-[0_0_15px_rgba(41,160,216,0.4)]"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </span>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
