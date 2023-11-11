'use client'
import React, { useState } from 'react'
import Image from "next/image";
import { NavbarWrapper } from './styles'
import { Socials } from "@/constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }

    return (<NavbarWrapper open={open}>
        <div className="navbar">
            <a href="#about-me" className="navbar-logo">
                <Image
                    src="/NavLogo.png"
                    alt="logo"
                    width={70}
                    height={70}
                    className="cursor-pointer hover:animate-slowspin"
                />
                <span className="navbar-logo--text">
                    WebChain Dev
                </span>
            </a>
            <button onClick={handleToggle} className="navbar-button" type="button">{!open ? <AiOutlineMenu /> : <AiOutlineClose />}</button>
            <div className="navbar-menu">
                <div className="navbar-menu--list ">
                    <a href="#about-me" className="menu-item">
                        About me
                    </a>
                    <a href="#skills" className="menu-item">
                        Skills
                    </a>
                    <a href="#projects" className="menu-item">
                        Projects
                    </a>
                </div>
            </div>
            <div className="navbar-social">
                {Socials.map((social) => (
                    <Image
                        src={social.src}
                        alt={social.name}
                        key={social.name}
                        width={24}
                        height={24}
                    />
                ))}
            </div>
        </div>
    </NavbarWrapper >
    )
}

export default Navbar
