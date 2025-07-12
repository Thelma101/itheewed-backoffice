import React, { useState, useRef, useEffect } from "react";

interface OTPVerificationProps {
    contact: string;
    method: 'email' | 'phone';
    purpose: 'registration' | 'forgot-password';
    onBack?: () => void;
    onSuccess?: () => void;
    onResend?: () => void;
    onSwitchMethod?: (method: 'email' | 'phone') => void;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({
    contact,
    method,
    purpose,
    onBack,
    onSuccess,
    onResend,
    onSwitchMethod
}) => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [isVerifying, setIsVerifying] = useState(false);
    const [isResending, setIsResending] = useState(false);
    const [countdown, setCountdown] = useState(30);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        if (countdown > 0) {
            timer = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        if (timer) clearInterval(timer);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => { if (timer) clearInterval(timer); };
    }, [countdown]);

    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const otpString = otp.join('');
        if (otpString.length !== 6) {
            alert('Please enter the complete 6-digit OTP');
            return;
        }
        setIsVerifying(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            if (otpString.length === 6) {
                if (onSuccess) onSuccess();
            } else {
                alert('Invalid OTP. Please try again.');
            }
        } catch {
            alert('Verification failed. Please try again.');
        } finally {
            setIsVerifying(false);
        }
    };

    const handleResend = async () => {
        if (countdown > 0) return;
        setIsResending(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setCountdown(30);
            if (onResend) onResend();
        } catch {
            alert('Failed to resend OTP. Please try again.');
        } finally {
            setIsResending(false);
        }
    };

    const getTitle = () => {
        return purpose === 'registration'
            ? `Verify Your ${method === 'email' ? 'Email' : 'Phone'}`
            : 'Security Verification';
    };

    const getDescription = () => {
        return `We have sent a verification code to your ${method}. Please enter the 6-digit code below.`;
    };

    return (
        <section className="w-full flex items-center justify-items-start md:px-16 py-8">
            <div className="p-4 w-full max-w-md">
                <div className="text-center mb-6">
                    <h2 className="text-xl font-bold mb-2 text-primary-dark">{getTitle()}</h2>
                    <p className="text-center text-primary-dark font-thin text-sm mb-2">
                        {getDescription()}
                    </p>
                    <p className="text-sm text-primary-dark font-semibold md:mt-7">
                        <span className="font-thin">Enter OTP sent to</span>  {contact}
                    </p>
                    <p className="text-sm text-primary-dark font-thin mt-7 mb-2" >OTP </p>
                </div>
                <form onSubmit={handleSubmit} className="px-5 md:px-0 font-thin">
                    <div className="mb-9">
                        <div className="flex justify-between py-4 gap-2">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleOtpChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="w-14 md:h-14 h-12 text-center text-lg font-semibold border border-color-focus rounded-2xl focus:ring-2 focus:ring-color-focus focus:outline-none transition text-primary-dark"
                                />
                            ))}
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={otp.join('').length !== 6 || isVerifying}
                        className="w-full h-12 rounded-3xl bg-primary hover:bg-primary disabled:bg-gray-300 disabled:cursor-not-allowed transition text-white font-semibold text-base sm:text-lg shadow"
                    >
                        {isVerifying ? 'Verifying...' : 'Verify OTP'}
                    </button>
                </form>
                <div className="flex justify-center mt-6 text-xs sm:text-sm text-primary-red">
                    <button type="button" className="font-semibold" onClick={() => onSwitchMethod && onSwitchMethod(method === 'email' ? 'phone' : 'email')}>
                        Switch to {method === 'email' ? 'phone' : 'email'} verification
                    </button>
                </div>
                <div className="flex justify-center mt-6 text-xs sm:text-sm text-primary-dark">
                    <span>
                        Didn't receive OTP?{' '}
                        <button
                            onClick={handleResend}
                            disabled={countdown > 0 || isResending}
                            className="text-primary font-semibold hover:underline disabled:text-gray-400 disabled:cursor-not-allowed"
                        >
                            {isResending
                                ? 'Sending...'
                                : countdown > 0
                                    ? `Resend in ${countdown}s`
                                    : 'Resend Code'
                            }
                        </button>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default OTPVerification; 