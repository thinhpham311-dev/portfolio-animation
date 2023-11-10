"use client";
import React from "react";
import { EncryptionWrapper } from "./styles"
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
    return (
        <EncryptionWrapper>
            <div className="encryption-title">
                <motion.div
                    variants={slideInFromTop}
                    className="encryption-title--text"
                >
                    Performance
                    <span className="mask">
                        {" "}
                        &{" "}
                    </span>
                    Security
                </motion.div>
            </div>

            <div className="encryption-context">
                <div className="encryption-context--image">
                    <Image
                        src="/LockTop.png"
                        alt="Lock top"
                        width={50}
                        height={50}
                        className="lock-top"
                    />
                    <Image
                        src="/LockMain.png"
                        alt="Lock Main"
                        width={70}
                        height={70}
                        className="lock-main"
                    />
                </div>

                <div className="Welcome-box">
                    <h1 className="Welcome-text ">Encryption</h1>
                </div>
            </div>
            <div className="encryption-subtitle">
                <div className="encryption-subtitle--text cursive ">
                    Secure your data with end-to-end encryption
                </div>
            </div>

            <div className="encryption-bg ">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    src="/encryption.webm/"
                />
            </div>
        </EncryptionWrapper>
    );
};

export default Encryption;