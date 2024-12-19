import React, { useState, useEffect } from "react";

const Testimonials: React.FC = () => {
  // State to hold existing testimonials
  const [testimonials, setTestimonials] = useState<
    { name: string; message: string }[]
  >([]);

  // State to hold new testimonial form input
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    message: "",
  });

  // Load testimonials from localStorage when the component mounts
  useEffect(() => {
    const savedTestimonials = localStorage.getItem("testimonials");
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials));
    }
  }, []);

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewTestimonial({
      ...newTestimonial,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTestimonial.name && newTestimonial.message) {
      // Add new testimonial and update state
      const updatedTestimonials = [...testimonials, newTestimonial];
      setTestimonials(updatedTestimonials);
      // Save testimonials to localStorage
      localStorage.setItem("testimonials", JSON.stringify(updatedTestimonials));
      setNewTestimonial({ name: "", message: "" }); // Clear the form
    }
  };

  return (
    <div className="py-16 px-6 w-full bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">What Our Members Say</h2>

      {/* Display Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
        {testimonials.map((testimonial, index) => (
          <blockquote key={index} className="p-6 bg-white rounded shadow">
            <p>"{testimonial.message}"</p>
            <footer className="mt-4 text-sm text-gray-600">
              - {testimonial.name}
            </footer>
          </blockquote>
        ))}
      </div>

      {/* Testimonial Submission Form */}
      <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Add Your Testimonial</h3>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={newTestimonial.name}
            onChange={handleInputChange}
            className="p-3 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Testimonial"
            value={newTestimonial.message}
            onChange={handleInputChange}
            className="p-3 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded shadow hover:bg-blue-600"
          >
            Submit Testimonial
          </button>
        </form>
      </div>
    </div>
  );
};

export default Testimonials;
