import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons";

export interface NavLink {
    name: string;
    href: string;
    sectionId?: string;
}

export interface SocialLink {
    name: string;
    href: string;
    icon: IconType;
    label: string;
}

export const siteConfig = {
    name: "Nivedita",
    role: "AI-first Product Manager",
    description: "AI-first Product Manager focused on thoughtful systems, human-centered decisions, and clear execution.",
    tagline: "I turn ambiguity into structured, shippable product decisions.",
    contactEmail: "nivedita9826@gmail.com",
    links: {
        github: "https://github.com/niveditajurel",
        linkedin: "https://www.linkedin.com/in/nivedita-niv/",
        twitter: "https://x.com/niviintech",
        email: "mailto:nivedita9826@gmail.com",
        instagram: "https://www.instagram.com/niv.in.tech/",
        resume: "https://drive.google.com/file/d/1fp0U0Oz0YUZwfNRGqBSR6vwijg5j4hLv/view?usp=sharing",
    },
    nav: [
        { name: "Home", href: "/" },
        { name: "Work", href: "/projects" },
        { name: "Fun", href: "/fun" },
        { name: "Journey", href: "/journey" },
    ] as NavLink[],
    experiments: {
        // Flip this to false to instantly revert the Clay × Notion landing-page experiment.
        clayNotionLanding: false,
    },
    socials: [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/nivedita-niv/",
            icon: FaLinkedin,
            label: "LinkedIn profile"
        },
        {
            name: "GitHub",
            href: "https://github.com/niveditajurel",
            icon: FaGithub,
            label: "GitHub profile"
        },
        {
            name: "X",
            href: "https://x.com/niviintech",
            icon: FaXTwitter,
            label: "X profile"
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/niv.in.tech/",
            icon: FaInstagram,
            label: "Instagram profile"
        },
    ] as SocialLink[]
};
