'use client';

import { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button'; // Adjust import path to your button component
import { Input } from '@/components/ui/input'; // Optional: use styled input component
import { Textarea } from '@/components/ui/textarea'; // Optional: use styled textarea

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

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormState);
  const [status, setStatus] = useState<{message: string, type: 'success' | 'error'} | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    try {
      const res = await axios.post('http://localhost:9000/api/contact/submit', formData);
      setStatus({message: res.data.message, type: 'success'});
      setFormData(initialFormState);
    } catch (err: any) {
      setStatus({
        message: err.response?.data?.message || 'Something went wrong!',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">Contact Us</h2>
      
      {status && (
        <div className={`mb-6 p-4 rounded-lg text-center ${
          status.type === 'success' 
            ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200' 
            : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200'
        }`}>
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              First Name *
            </label>
            <Input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Last Name *
            </label>
            <Input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email *
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Mobile *
            </label>
            <Input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Company
            </label>
            <Input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Purpose
            </label>
            <Input
              type="text"
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="w-full"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Your Message *
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="w-full"
          />
        </div>

        <div className="flex justify-end">
          <Button 
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full md:w-auto"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;