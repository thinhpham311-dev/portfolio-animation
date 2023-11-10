"use client"
import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";
import { FooterWrapper } from './styles'
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <FooterWrapper>
            <div className="footer-inner ">
                <div className="footer-inner--grid ">


                    <div className="footer-inner--grid-col">
                        <div className="footer-title ">Community</div>
                        <p className="footer-item">
                            <FaYoutube />
                            <span className="footer-item--text">Youtube</span>
                        </p>
                        <p className="footer-item">
                            <RxGithubLogo />
                            <span className="footer-item--text">Github</span>
                        </p>
                        <p className="footer-item">
                            <RxDiscordLogo />
                            <span className="footer-item--text">Discord</span>
                        </p>
                    </div>
                    <div className="footer-inner--grid-col">
                        <div className="footer-title ">Social Media</div>
                        <p className="footer-item">
                            <FaYoutube />
                            <span className="footer-item--text">Instagram</span>
                        </p>
                        <p className="footer-item">
                            <RxGithubLogo />
                            <span className="footer-item--text">Twitter</span>
                        </p>
                        <p className="footer-item">
                            <RxDiscordLogo />
                            <span className="footer-item--text">Linkedin</span>
                        </p>
                    </div>
                    <div className="footer-inner--grid-col">
                        <div className="footer-title ">About</div>
                        <p className="footer-item">

                            <span className="footer-item--text">Become Sponsor</span>
                        </p>
                        <p className="footer-item">

                            <span className="footer-item--text">Learning about me</span>
                        </p>
                        <p className="footer-item">

                            <span className="footer-item--text">mifwebchain@gmail.com</span>
                        </p>
                    </div>
                </div>

                <div className="footer-license ">
                    &copy; WebChain Dev 2023 Inc. All rights reserved
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer