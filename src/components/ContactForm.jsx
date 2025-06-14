import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faComment, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { MdLocationPin } from 'react-icons/md';


const InputField = ({ type, name, value, onChange, placeholder, icon, error }) => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <FontAwesomeIcon icon={icon} className="text-gray-400" />
    </div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className={`p-3 pl-10 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
        error ? 'border-red-500' : 'border-gray-300'
      }`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const TextAreaField = ({ name, value, onChange, placeholder, icon, error }) => (
  <div className="relative">
    <div className="absolute top-3 left-0 pl-3 flex items-center pointer-events-none">
      <FontAwesomeIcon icon={icon} className="text-gray-400" />
    </div>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows="4"
      required
      className={`p-3 pl-10 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
        error ? 'border-red-500' : 'border-gray-300'
      }`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const Popup = ({ isOpen, onClose, message }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full"
        >
          <div className="flex items-center gap-2 mb-4">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
            <h3 className="text-lg font-semibold text-gray-800">Success!</h3>
          </div>
          <p className="text-gray-600 mb-4">{message}</p>
          <button
            onClick={onClose}
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowPopup(true);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-white border-t">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8"
        >
          Get in Touch
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 bg-gray-50 p-8 rounded-xl shadow-md"
        >
          <InputField
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            icon={faUser}
            error={errors.name}
          />
          <InputField
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            icon={faEnvelope}
            error={errors.email}
          />
          <InputField
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            icon={faPhone}
            error={errors.phone}
          />
          <TextAreaField
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            icon={faComment}
            error={errors.message}
          />
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition flex items-center justify-center ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </div>
            ) : (
              'Submit'
            )}
          </motion.button>
        </motion.form>
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  className="mt-12 relative w-full h-[350px] rounded-xl overflow-hidden shadow-md"
>
  <iframe
    title="Whitecircle Headquarter Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.6249479341516!2d81.36177477495492!3d23.2964041076544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39853b21b56f0a65%3A0x99a09c9c028e3930!2sSwastik%20Galaxy%2C%20A%20Block%2C%20Shahdol%2C%20Madhya%20Pradesh%20484111!5e0!3m2!1sen!2sin!4v1718222240000!5m2!1sen!2sin"
    className="absolute top-0 left-0 w-full h-full border-0"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>

  {/* Floating Location Pin Icon */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <div className="relative group text-center">
      <MdLocationPin className="text-red-600 text-4xl animate-bounce drop-shadow-md" />
      <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-white text-black text-sm px-2 py-1 rounded shadow hidden group-hover:block">
        Whitecircle HQ
      </div>
    </div>
  </div>
</motion.div>

      </div>
      <Popup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        message="Thank you! We'll get in touch with you soon."
      />
    </section>
  );
};

export default ContactForm;