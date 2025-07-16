import React from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Disable the button

    emailjs.sendForm(
      'service_2qh01vv',
      'template_0uns8or',
      e.target,
      '7lVMJPGzc_zUWw3ow'
    )
    .then((result) => {
      console.log('Email sent:', result.text);
      alert('Message sent successfully!');
      e.target.reset();
    })
    .catch((error) => {
      console.error('Email send error:', error);
      alert('Something went wrong. Please try again.');
    })
    .finally(() => {
      setLoading(false); // Re-enable the button
    });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl text-[#076499] font-bold dark:text-[#BFDBFE] mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-b from-[#e8f4fa] dark:from-[#1F2937] via-[#f1f7f9] dark:via-[#273242] to-[#fcfeff] dark:to-[#2e3a4e] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl dark:text-gray-200 font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-white dark:text-gray-800" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-white dark:text-gray-800" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea id="message" name="message" rows="4" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-white dark:text-gray-800"></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 py-2 rounded-md text-white transition-colors ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-b from-[#e8f4fa] dark:from-[#1F2937] via-[#f1f7f9] dark:via-[#273242] to-[#fcfeff] dark:to-[#2e3a4e] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Contact Information</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p><strong>Address:</strong><br />
              VAYUGARD AIRCONDITIONING PVT. LTD<br />
              Regd Off: H.No 68, Khasra No 177, <br />
              Kushak Hiranki, North West,<br />
              Delhi: 110036
            </p>
            <p><strong>Phone:</strong><br />+91-8744050073</p>
            <p><strong>Email:</strong><br />sales@vayugard.com</p>
            <p><strong>Hours:</strong><br />Monday - Friday: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
