import React from "react"
import logo from '@/assets/Nav/itheewedLogo.svg';

const NavLogo: React.FC = () => {
    return (
        <>
            <section>
                <div className="flex items-center">
                        <img src={logo} alt="Logo" className="w-36 h-10" />
                </div>
            </section>
        </>
    )

}

export default NavLogo;