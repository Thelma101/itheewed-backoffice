import React, { useState } from "react";
import OTPVerification from "./OTPVerification";
import CreateNewPassword from "./CreateNewPassword";

interface ForgotPasswordProps {
    onBackToSignIn?: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onBackToSignIn }) => {
    const [contact, setContact] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [showCreatePassword, setShowCreatePassword] = useState(false);
    const [verificationMethod, setVerificationMethod] = useState<'email' | 'phone'>('email');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle password reset logic here
        console.log('Password reset requested for:', contact);
        setShowOTP(true);
    };

    const handleBackToSignIn = () => {
        if (onBackToSignIn) {
            onBackToSignIn();
        }
    };

    const handleBackToEmailForm = () => {
        setShowOTP(false);
    };

    const handleOTPSuccess = () => {
        setShowCreatePassword(true);
    };

    const handleOTPResend = () => {
        console.log('Resending OTP to:', contact);
        // Handle OTP resend logic
    };

    const handleSwitchMethod = (method: 'phone' | 'email') => {
        setVerificationMethod(method);
        // Go back to forgot password form so user can change their input method
        setShowOTP(false);
        setContact('');
    };

    if (showOTP) {
        // const isEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(contact);
        return (
            <OTPVerification
                contact={contact}
                method={verificationMethod}
                purpose="forgot-password"
                onBack={handleBackToEmailForm}
                onSuccess={handleOTPSuccess}
                onResend={handleOTPResend}
                onSwitchMethod={handleSwitchMethod}
            />
        );
    }

    if (showCreatePassword) {
        return <CreateNewPassword />;
    }

    if (isSubmitted) {
        return (
            <section className="w-full flex items-center justify-center">
                <div className="p-4 w-full max-w-md">
                    <div className="text-center">
                        <div className="mb-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-bold mb-2 text-center text-primary-dark">Check Your Email</h2>
                            <p className="text-center text-primary-dark font-thin text-sm mb-6">
                                We've sent a password reset link to <span className="font-semibold">{contact}</span>
                            </p>
                        </div>
                        <div className="text-sm text-primary-dark mb-6">
                            <p>Didn't receive the email? Check your spam folder or</p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="text-primary font-semibold hover:underline"
                            >
                                try again
                            </button>
                        </div>
                        <button
                            onClick={handleBackToSignIn}
                            className="w-full h-12 rounded-3xl bg-primary hover:bg-primary transition text-white font-semibold text-base sm:text-lg shadow"
                        >
                            Back to Sign In
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full flex items-center justify-items-start md:px-16 py-8 mt-0 md:mt-16">
            <div className="p-4 w-full max-w-md">
                <div className="text-center mb-6">
                    <h2 className="text-xl font-bold mb-2 text-primary-dark">Password Recovery</h2>
                    <p className="text-center text-primary-dark font-thin text-sm">
                        Enter the email address or phone number of the account you want to recover.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="px-5 md:px-0 mb-4 font-thin">
                    <label className="block mb-3">
                        <span className="text-primary-black text-xs sm:text-sm">Email or Phone Number</span>
                        <input
                            type="text"
                            placeholder="Enter your email or phone number"
                            name="contact"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            required
                            className="mt-1 w-full h-12 px-3 sm:px-4 rounded-3xl border border-color-focus focus:ring-2 focus:ring-color-focus focus:outline-none transition text-primary-dark text-sm md:text-base"
                        />
                    </label>
                    <button
                        type="submit"
                        className="w-full h-12 rounded-3xl bg-primary hover:bg-primary transition text-white font-semibold text-base sm:text-lg shadow mt-5"
                    >
                        Submit
                    </button>
                </form>
                <div className="flex justify-center font-thin px-5 md:px-0 mt-2 text-xs sm:text-sm text-primary-dark">
                    <span>Remember your password? </span>
                    <button
                        onClick={handleBackToSignIn}
                        className="text-primary font-semibold hover:underline ml-1"
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;