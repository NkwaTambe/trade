import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Contact Information */}
      <div className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center animate__animated animate__fadeIn">
            Contact Us
          </h1>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Phone */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn">
              <Phone className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+237 653493804</p>
              <p className="text-gray-600">+237 654704027</p>
            </div>
            {/* Email */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-1s">
              <Mail className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">nkwajudetambe@gmail.com</p>
            </div>
            {/* Address */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-2s">
              <MapPin className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-600">
                Douala, Bonaberi
                <br />
                Cameroon
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div
        className="py-16 container mx-auto px-4"
        style={{
          backgroundImage: 'url("src/assets/images/resto.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "50vh",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-400 rounded-md focus:ring-orange-500 focus:border-orange-500 transition duration-300 ease-in-out transform hover:scale-105 bg-white bg-opacity-20"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-400 rounded-md focus:ring-orange-500 focus:border-orange-500 transition duration-300 ease-in-out transform hover:scale-105 bg-white bg-opacity-20"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:ring-orange-500 focus:border-orange-500 transition duration-300 ease-in-out transform hover:scale-105 bg-white bg-opacity-20"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:ring-orange-500 focus:border-orange-500 transition duration-300 ease-in-out transform hover:scale-105 bg-white bg-opacity-20"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-colors transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="h-96 bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d63676.33751636341!2d9.673165539013365!3d4.067010802088791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x106113cec03afb79%3A0xf764dff0a57246b!2sbonaberi!3m2!1d4.090287!2d9.6610134!4m5!1s0x1061128be2e1fe6d%3A0x92daa1444781c48b!2sdouala!3m2!1d4.0510564!2d9.7678687!5e0!3m2!1sen!2sde!4v1734077233418!5m2!1sen!2sde"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
