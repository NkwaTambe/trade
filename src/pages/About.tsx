import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20 w-full text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          About JudeXpert Trading Academy
        </h1>
        <p className="text-lg mb-6">
          Empowering traders with knowledge, tools, and a community to succeed
          in the financial markets.
        </p>
      </section>

      {/* Founder Section */}
      <section className="py-16 px-6 w-full bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">
          Our Founder: Nkwa Jude Tambe
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          The story of JudeXpert Trading Academy begins with our founder,{" "}
          <strong>Nkwa Jude Tambe</strong>. I began my trading journey in 2022,
          stepping into the world of financial markets with curiosity and
          determination. Like many traders, my path was marked by moments of
          success and lessons learned through challenges. Those experiences
          shaped my philosophy: "Success in trading is built on knowledge,
          discipline, and community."
        </p>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Through years of learning, adapting, and growing, I realized the
          importance of sharing my journey and guiding others toward their
          trading goals. This realization led to the creation of JudeXpert
          Trading Academy—a place where trading enthusiasts can grow, thrive,
          and achieve their financial aspirations.
        </p>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 px-6 w-full bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Vision & Mission</h2>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="mb-6">
            To become a leading trading academy globally, empowering individuals
            to achieve financial independence and success in the markets.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <ul className="list-disc list-inside">
            <li>
              To provide high-quality, accessible, and practical trading
              education.
            </li>
            <li>
              To offer real-time trading signals that help our members make
              informed decisions.
            </li>
            <li>To foster a supportive and thriving community of traders.</li>
          </ul>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="py-16 px-6 w-full text-center">
        <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded shadow-lg">
            <h3 className="text-xl font-bold mb-4">Expert-Led Courses</h3>
            <p>
              Our courses are taught by experienced traders who share real-world
              strategies and insights to guide you to success.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow-lg">
            <h3 className="text-xl font-bold mb-4">Real-Time Signals</h3>
            <p>
              Get timely trading signals to make informed decisions and maximize
              your trading profits.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow-lg">
            <h3 className="text-xl font-bold mb-4">Community Support</h3>
            <p>
              Join a vibrant community of like-minded traders who help,
              encourage, and learn from each other.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 w-full bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="max-w-3xl mx-auto">
          <ul className="list-disc list-inside">
            <li>
              <strong>Proven Expertise:</strong> We provide strategies backed by
              real-world experiences and successful trading journeys.
            </li>
            <li>
              <strong>Hands-On Learning:</strong> Practical application is at
              the heart of our courses, so you can start trading confidently.
            </li>
            <li>
              <strong>Continuous Growth:</strong> Stay updated with the latest
              market trends, techniques, and tools to keep evolving as a trader.
            </li>
            <li>
              <strong>Ethical Practices:</strong> We prioritize transparency,
              integrity, and responsible trading to ensure our members succeed.
            </li>
          </ul>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-6 w-full bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <blockquote className="p-6 bg-white rounded shadow">
            <p>
              "JudeXpert transformed my trading skills and mindset! I’m now
              consistently profitable thanks to the expert advice and signals."
            </p>
            <footer className="mt-4 text-sm text-gray-600">- Jane D.</footer>
          </blockquote>
          <blockquote className="p-6 bg-white rounded shadow">
            <p>
              "The courses are detailed and easy to follow. I went from
              struggling to make profits to confidently managing my own trades."
            </p>
            <footer className="mt-4 text-sm text-gray-600">- John T.</footer>
          </blockquote>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 px-6 w-full bg-blue-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Join Us Today</h2>
        <p className="mb-6 text-lg max-w-3xl mx-auto">
          Ready to take the first step in your trading journey? At JudeXpert
          Trading Academy, we believe in your potential. Join us today and begin
          your path to financial freedom!
        </p>
        <Link
          to="/get-started"
          className="bg-white text-blue-500 font-bold py-2 px-6 rounded shadow hover:bg-gray-200"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default About;
