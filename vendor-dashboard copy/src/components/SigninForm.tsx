import React from "react";

const SigninForm: React.FC = () => {
    return (
        <section className="flex justify-center items-center min-h-[70vh]">
            <div className=" p-8 w-full max-w-md">
                <div className="mb-6 text-center">
                    <p className="text-3xl font-extrabold text-gray-800 shadow-sm mb-1">Couple Log In</p>
                    <p className="text-sm text-gray-500">Sign in as a Couple or Vendor</p>
                </div>
                <fieldset className="flex justify-center gap-6 mb-6">
                    <legend className="sr-only">Account Type</legend>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="accountType" className="accent-blue-500" defaultChecked />
                        <span className="text-gray-700">Couple</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="accountType" className="accent-blue-500" />
                        <span className="text-gray-700">Vendor</span>
                    </label>
                </fieldset>
                <form className="flex flex-col gap-4">
                    <label className="block">
                        <span className="text-gray-700 font-medium">Email</span>
                        <input type="email" placeholder="Email" className="mt-1 w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition" />
                    </label>
                    <label className="block">
                        <span className="text-gray-700 font-medium">Password</span>
                        <input type="password" placeholder="Password" className="mt-1 w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition" />
                    </label>
                    <button type="submit" className="w-full h-12 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold text-lg shadow mt-2">Sign In</button>
                </form>
                <div className="flex justify-between mt-4 text-sm">
                    <a href="#" className="text-primary-red hover:underline">Forgot Password?</a>
                </div>
                <div className="flex justify-center mt-4 text-sm">
                    <span>
                        Don't have an account?{' '}
                        <a href="#" className="text-blue-600 font-semibold hover:underline">Register Now</a>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default SigninForm;