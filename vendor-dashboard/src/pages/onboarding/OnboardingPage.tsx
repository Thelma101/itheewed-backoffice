import NavLogo from "@/components/NavLogo";
import type React from "react";
import OnboardingGallery from "../../components/OnboardingGallery";
import '@/index.css'
import { useState } from "react";
import SignIn from "@/components/SignIn";

const images = [
    { id: 1, name: 'Venue', image: 'https://res.cloudinary.com/dfp5thr3y/image/upload/v1750539059/venue_ptzzou.svg' },
    { id: 2, name: 'MakeUp & Hair', image: 'https://res.cloudinary.com/dfp5thr3y/image/upload/v1750539050/makeup_f5sima.svg' },
    { id: 3, name: 'Cakes & Desserts', image: 'https://res.cloudinary.com/dfp5thr3y/image/upload/v1750539053/cakes_kfodsw.svg' },
    { id: 4, name: 'Interior Decoration', image: 'https://res.cloudinary.com/dfp5thr3y/image/upload/v1750539054/dj_unlrdy.svg' },
    { id: 5, name: 'Cars', image: 'https://res.cloudinary.com/dfp5thr3y/image/upload/v1750539056/cars_wdrnq1.svg' },
];


const OnboardingPage: React.FC = () => {

    const [isSignUp, setIsSignUp] = useState(false);
    return (
        <>
            <section className="h-screen bg-red-50">
                <div className="container mx-auto flex flex-col">
                    <NavLogo />
                </div>
                <div className="flex justify-center items-center h-full absolute top-10">
                    <div>
                        <div className="">
                            <OnboardingGallery />
                        </div>
                        {isSignUp ? <SignUp /> : <SignIn /> }
                    </div>
                    <div className="">
                        <button onClick={() => setIsSignUp(!isSignUp)} />
                        <SignIn />
                    </div>
                </div>
            </section>
        </>
    )
        ;
}

export default OnboardingPage;