import React from "react";
import { Link } from "react-router-dom";


const GetStarted: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Get Started with JudeXpert</h1>
      <p className="mb-4 text-lg text-gray-700">
        Join our academy and start your trading journey today.
      </p>
      <Link
          to="/signup"
          className="text-blue-500 cursor-pointer hover:underline font-bold"
        >
          SignUp
        </Link>
      <p className="mt-4 text-gray-600">
        Already a member?{" "}
        
       <Link
          to="/login"
          className="text-blue-500 cursor-pointer hover:underline font-bold"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default GetStarted;
