'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className='container mx-auto px-4 py-16 max-w-2xl'>
      <h1 className='text-4xl font-bold mb-8'>Get in Touch</h1>

      {status === 'success' && (
        <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4'>
          Thanks! I&apos;ll get back to you within 24 hours.
        </div>
      )}

      {status === 'error' && (
        <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>
          Something went wrong. Please email me directly at your@email.com
        </div>
      )}

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <label className='block text-sm font-medium mb-2'>Name</label>
          <input
            type='text'
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-2'>Email</label>
          <input
            type='email'
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-2'>
            Service Interested In
          </label>
          <select
            required
            value={formData.service}
            onChange={(e) =>
              setFormData({ ...formData, service: e.target.value })
            }
            className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
          >
            <option value=''>Select a service</option>
            <option value='it-support'>General IT Support</option>
            <option value='media-server'>Media Server Setup</option>
            <option value='pc-building'>Custom PC Building</option>
            <option value='gaming-setup'>Gaming Setup & Emulation</option>
          </select>
        </div>

        <div>
          <label className='block text-sm font-medium mb-2'>Message</label>
          <textarea
            required
            rows='5'
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <button
          type='submit'
          disabled={status === 'sending'}
          className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition'
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
