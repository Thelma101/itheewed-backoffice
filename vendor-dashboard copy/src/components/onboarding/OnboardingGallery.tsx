import React from 'react';

// type ImageType = {
//   id: number;
//   name: string;
//   image: string;
// };

const OnboardingGallery: React.FC = () => {

    const images = [
        { id: 1, name: 'Venue', image: 'https://res.cloudinary.com/dfp5thr3y/image/upload/v1750539059/venue_ptzzou.svg' },
        { id: 2, name: 'MakeUp & Hair', image: 'https://res.cloudinary.com/dfp5thr3y/image/upload/v1750539050/makeup_f5sima.svg' },
        { id: 3, name: 'Cakes & Desserts', image: 'https://res.cloudinary.com/dfp5thr3y/image/upload/v1750539053/cakes_kfodsw.svg' },
        { id: 4, name: 'Interior Decoration', image: 'https://res.cloudinary.com/dfp5thr3y/image/upload/v1750539054/dj_unlrdy.svg' },
        { id: 5, name: 'Cars', image: 'https://res.cloudinary.com/dfp5thr3y/image/upload/v1750539056/cars_wdrnq1.svg' },
    ];

    return (
        <>
         <section className='flex w-full px-5'>
                <div className='mx-auto  w-full max-w-3xl'>
                    <div className="grid grid-cols-3">
                        {
                            images.slice(0, 3).map((image) => (
                                <div key={image.id}
                                    className="w-full p-1 md:p-2">
                                    <div className='shadow-md relative overflow-hidden group'>
                                        <img
                                            src={image.image}
                                            alt={image.name}
                                            className="w-full h-full object-cover shadow-lg group-hover:shadow-2xl transition-all duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-300"></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='grid grid-cols-2'>
                        {
                            images.slice(3, 5).map((image) => (
                                <div key={image.id}
                                    className='w-full p-1 md:p-2'
                                >
                                    <div className='shadow-md shadow-[#002528]/50 relative overflow-hidden group'>
                                        <img
                                            src={image.image}
                                            alt={image.name}
                                            className="w-full h-full object-cover shadow-lg group-hover:shadow-2xl transition-all duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-300"></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default OnboardingGallery;