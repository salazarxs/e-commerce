import React from 'react';

// Components
import Link from 'next/link';

// Icons
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

// Images
import logo from '../../public/logo.webp';
import Image from 'next/image';

const Nav = () => {
    return (
        <nav>
            <Image
                src={logo}
                alt="E-commerce's logo"
                rel="preload"
                priority
                height={'40'}
                width={'40'}
            />

            <ul>
                <li>Discovery</li>
                <li>About</li>
                <li>ContactUs</li>
            </ul>

            <Link href={'/login'} ><FaRegUser /></Link>
            <Link href={'/cart'} ><FiShoppingCart /></Link>
        </nav>
    );
}

export default Nav;
