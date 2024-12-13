import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20 w-full text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to JudeXpert Trading Academy
        </h1>
        <p className="text-lg mb-6">
          Learn how to trade, receive signals, and join our thriving community.
        </p>
        <Link
          to="/get-started"
          className="bg-white text-blue-500 font-bold py-2 px-6 rounded shadow hover:bg-gray-200"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 w-full bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded shadow hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-4">Expert-Led Courses</h3>
            <p>Learn from experienced traders who understand the market.</p>
          </div>
          <div className="p-6 bg-white rounded shadow hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-4">Real-Time Signals</h3>
            <p>Receive trading signals to help you make informed decisions.</p>
          </div>
          <div className="p-6 bg-white rounded shadow hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-4">Community Support</h3>
            <p>Join a vibrant community of traders and grow together.</p>
          </div>
        </div>
      </section>

      {/* Live Trading Charts Section */}
      <section className="py-16 px-6 w-full bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Explore Live Market Trends</h2>
        <div className="w-full max-w-4xl mx-auto">
          <iframe
            src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_abcdef&symbol=NASDAQ:AAPL&interval=D&theme=light&style=1&timezone=Etc/UTC&withdateranges=true&hide_side_toolbar=false&allow_symbol_change=true&save_image=false&locale=en"
            width="100%"
            height="500"
            frameBorder="0"
            allowTransparency={true}
            scrolling="no"
          ></iframe>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section className="py-16 px-6 w-full bg-blue-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div>
            <h3 className="text-4xl font-extrabold mb-2">50+</h3>
            <p>Active Members</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold mb-2">2,000+</h3>
            <p>Trades Executed</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold mb-2">78%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 w-full bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Members Say</h2>
        <Link
          to="/testimonials"
          className="bg-blue-500 text-white py-2 px-6 rounded shadow hover:bg-blue-600"
        >
          See All Testimonials
        </Link>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 px-6 w-full bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Stay Updated</h2>
        <form className="flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="py-2 px-4 rounded shadow mb-4 w-80"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded shadow hover:bg-blue-600"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
