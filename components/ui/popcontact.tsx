'use client';

import { useState } from 'react';
import axios from 'axios';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import {
  Mail,
  Phone,
  Building,
  User,
  MessageCircle,
  X,
} from 'lucide-react';

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

export default function ContactForm({
  onSuccess,
  onClose,
}: {
  onSuccess?: () => void;
  onClose?: () => void;
}) {
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('http://localhost:9000/api/contact/submit', formData);
      toast.success('Message sent successfully!');
      setFormData(initialFormState);
      onSuccess?.();
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Message not sent!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputWrapperStyle =
    'flex items-center gap-3 border rounded-md px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-[#29A0D8] bg-white dark:bg-gray-800 transition-all w-full';

  return (
    <div className="w-full px-4 sm:px-6 py-4 mx-auto dark:bg-gray-900 rounded-lg relative max-w-xl">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 z-10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 dark:text-white mb-4 uppercase tracking-wide">
        Get Best Employees Now
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className={inputWrapperStyle}>
            <User className="text-[#29A0D8] w-5 h-5" />
            <Input
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              placeholder="First Name *"
              className="flex-1 border-0 outline-none focus-visible:ring-0 bg-transparent text-sm"
            />
          </div>

          <div className={inputWrapperStyle}>
            <User className="text-[#29A0D8] w-5 h-5" />
            <Input
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              placeholder="Last Name *"
              className="flex-1 border-0 outline-none focus-visible:ring-0 bg-transparent text-sm"
            />
          </div>
        </div>

        {/* Email & Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className={inputWrapperStyle}>
            <Mail className="text-[#29A0D8] w-5 h-5" />
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email *"
              className="flex-1 border-0 outline-none focus-visible:ring-0 bg-transparent text-sm"
            />
          </div>

          <div className={inputWrapperStyle}>
            <Phone className="text-[#29A0D8] w-5 h-5" />
            <Input
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              placeholder="Mobile *"
              className="flex-1 border-0 outline-none focus-visible:ring-0 bg-transparent text-sm"
            />
          </div>
        </div>

        {/* Company & Purpose */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className={inputWrapperStyle}>
            <Building className="text-[#29A0D8] w-5 h-5" />
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="flex-1 border-0 outline-none focus-visible:ring-0 bg-transparent text-sm"
            />
          </div>

          <div className={inputWrapperStyle}>
            <MessageCircle className="text-[#29A0D8] w-5 h-5" />
            <Input
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              placeholder="Purpose"
              className="flex-1 border-0 outline-none focus-visible:ring-0 bg-transparent text-sm"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex gap-3 border rounded-md px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-[#29A0D8] bg-white dark:bg-gray-800 transition-all">
          <MessageCircle className="text-[#29A0D8] w-5 h-5 mt-1" />
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            required
            placeholder="Your Message *"
            className="flex-1 border-0 outline-none focus-visible:ring-0 resize-none bg-transparent text-sm"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            size="sm"
            disabled={isSubmitting}
            className="bg-[#29A0D8] hover:bg-[#1E7CAD] text-white font-semibold transition-all duration-300 rounded-md px-6 py-2"
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </Button>
        </div>
      </form>
    </div>
  );
}
