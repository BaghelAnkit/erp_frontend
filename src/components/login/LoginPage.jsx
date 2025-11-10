import { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import "../../../src/App.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loadingSendOtp, setLoadingSendOtp] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);

  return (
    <div className="h-screen flex">
      {/* Left side */}
      <div className="hidden md:flex w-1/2 bg-black text-white items-center justify-center">
        <h1 className="text-4xl font-bold">LogoTest.in</h1>
      </div>

      {/* Right side */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8">
          <h2 className="text-2xl font-semibold mb-2">
            Let’s <span className="font-bold">Sign in</span>
          </h2>
          <p className="text-gray-500 mb-6">
            Hey, Enter your details to sign in to your account
          </p>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Email</label>
            <div className="relative border rounded-lg">
              <div className="flex items-center px-3 py-2">
                <MdEmail className="text-gray-400 mr-2" size={20} />
                <input
                  type="email"
                  placeholder="Enter email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none"
                  disabled={otpSent} // lock email after OTP sent
                />
              </div>
            </div>
            {!otpSent && (
              <button
                onClick={() => setOtpSent(true)} // mock sending OTP
                className="mt-2 text-sm text-indigo-600 hover:underline flex items-center justify-end"
              >
                {loadingSendOtp ? (
                  <span className="flex items-center animate-spin">Sending...</span>
                ) : (
                  "Send OTP"
                )}
              </button>
            )}
          </div>

          {/* OTP Field */}
          <div className="mb-6">
            <label className="block text-sm mb-1">OTP</label>
            <div className="relative border rounded-lg">
              <div className="flex items-center px-3 py-2">
                <MdLock className="text-gray-400 mr-2" size={20} />
                <input
                  type="text"
                  placeholder="Enter OTP..."
                  value={otp}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    if (value.length <= 6) setOtp(value);
                  }}
                  className="w-full outline-none"
                  disabled={!otpSent} // enable only after OTP sent
                />
              </div>
            </div>
          </div>

          {/* Verify OTP Button */}
          <button
            disabled={otp.length !== 6}
            className={`w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center justify-center ${
              otp.length !== 6 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loadingLogin ? "Verifying..." : "Verify OTP"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;