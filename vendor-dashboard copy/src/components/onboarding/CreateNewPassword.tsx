import React, { useState } from "react";

const CreateNewPassword: React.FC = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!password || !confirmPassword) {
            setMessage("Both fields are required.");
            setSuccess(false);
            return;
        }
        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            setSuccess(false);
            return;
        }
        setMessage("Password reset successfully!");
        setSuccess(true);
        // Here you would call your API to actually reset the password
    };

    return (
        <section className="w-full flex items-center justify-items-start md:px-16 py-8">
            <div className="p-4 w-full max-w-md">
                <h2 className="text-xl font-semibold mb-2 text-center text-primary-dark">Create New Password</h2>
                <p className="text-center text-primary-dark font-thin text-sm mb-6">Submitting a new password will replace your existing one.</p>
                <form onSubmit={handleSubmit} className="px-5 md:px-0 font-thin">
                    <label className="block mb-3">
                        <span className="text-primary-black text-xs sm:text-sm">New Password</span>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="New Password"
                                name="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                                className="mt-1 w-full md:h-14 h-14 px-3 sm:px-4 rounded-3xl border border-color-focus focus:ring-2 focus:ring-color-focus focus:outline-none transition text-primary-dark text-sm md:text-base"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                onClick={() => setShowPassword(prev => !prev)}
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </button>
                        </div>
                    </label>
                    <label className="block mb-3">
                        <span className="text-primary-black text-xs sm:text-sm">Confirm Password</span>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                required
                                className="mt-1 w-full md:h-14 h-14 px-3 sm:px-4 rounded-3xl border border-color-focus focus:ring-2 focus:ring-color-focus focus:outline-none transition text-primary-dark text-sm md:text-base"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                onClick={() => setShowConfirmPassword(prev => !prev)}
                            >
                                {showConfirmPassword ? "🙈" : "👁️"}
                            </button>
                        </div>
                    </label>
                    <button type="submit"
                        className="w-full md:h-14 h-14 rounded-3xl bg-primary hover:bg-primary transition text-white font-semibold text-center text-base sm:text-lg shadow mt-5"
                    >
                        Reset Password
                    </button>
                </form>
                {message && (
                    <div className={`mt-4 text-center ${success ? 'text-green-600' : 'text-primary-red'}`}>{message}</div>
                )}
            </div>
        </section>
    );
};

export default CreateNewPassword;

// Create new Password
// Submitting a new password, would replace your existing one.