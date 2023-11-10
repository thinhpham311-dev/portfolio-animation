import Image from "next/image";
import React from "react";

interface Props {
    src: string;
    title: string;
    description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
    return (
        <div className="card ">
            <Image
                src={src}
                alt={title}
                width={1000}
                height={1000}
                className="card--image"
            />

            <div className="card--text">
                <h1 className="card--text-title">{title}</h1>
                <p className="card--text-description">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;