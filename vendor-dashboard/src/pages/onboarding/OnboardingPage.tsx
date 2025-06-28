import NavLogo from "@/components/NavLogo";
import type React from "react";
import OnboardingGallery from "@/components/OnboardingGallery";
import '@/index.css'
import { useState } from "react";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";

const images = [
    { id: 1, name: 'Venue', image: 'https://res.cloudinary.com/dfp5thr3y/image/upload/v1750539059/venue_ptzzou.svg' },
    { id: 2, name: 'MakeUp & Hair', image: 'https://res.cloudinary.com/dfp5thr3y/image/upload/v1750539050/makeup_f5sima.svg' },
    { id: 3, name: 'Cakes & Desserts', image: 'https://res.cloudinary.com/dfp5thr3y/image/upload/v1750539053/cakes_kfodsw.svg' },
    { id: 4, name: 'Interior Decoration', image: 'https://res.cloudinary.com/dfp5thr3y/image/upload/v1750539054/dj_unlrdy.svg' },
    { id: 5, name: 'Cars', image: 'https://res.cloudinary.com/dfp5thr3y/image/upload/v1750539056/cars_wdrnq1.svg' },
];

const OnboardingPage: React.FC = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    return (
        <section className="min-h-screen bg-[#D9D9D9] flex flex-col">
            {/* Nav */}
            <div className="w-full py-6 px-4 bg-[#D9D9D9]">
                <NavLogo />
            </div>
            {/* Split Screen */}
            <div className="flex flex-1 flex-col md:flex-row w-full bg-[#D9D9D9]">
                {/* Gallery */}
                <div className="md:w-1/2 w-full flex items-center justify-center bg-[#D9D9D9] p-4 md:p-8">
                    <OnboardingGallery />
                </div>
                {/* Form */}
                <div className="md:w-1/2 w-full flex items-center justify-center bg-[#D9D9D9] p-4 md:p-8">
                   {/* { isSignIn ? <SignIn /> : <SignUp /> } */}
                   <SignUp />
                </div>
            </div>
        </section>
    );
}


export default OnboardingPage;