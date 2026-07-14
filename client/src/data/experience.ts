export interface ExperienceItem {
    company: string;
    role: string;
    duration: string;
    location: string;
    description: string;
    achievements: string[];
    skills: string[];
    website: string | null;
    cardHref?: string | null;
}

export interface EducationItem {
    institution: string;
    degree: string;
    duration: string;
    gpa: string;
    activities: string[];
    coursework: string[];
}

export const experiences: ExperienceItem[] = [
    {
        company: "Anand PAG Inc.",
        role: "Product Manager",
        duration: "Jan 2025 - Present",
        location: "USA",
        description: "Led product delivery for an integration-heavy vendor-operations system replacing a legacy workflow for internal teams and external vendors.",
        achievements: [
            "Reduced 3-5 day coordination loops to near real-time visibility by redesigning workflow logic and tightening cross-system sync",
            "Improved background-job reliability from 95% to 100% and stabilized 200+ service-order bundles in 2-4 minutes",
            "Used prototypes, QA structure, and launch-readiness gates to keep an integration-heavy rollout on track",
        ],
        skills: ["BPMN 2.0", "SAP Signavio", "Process Optimization", "Digital Transformation", "Data Analysis"],
        website: null,
        cardHref: null,
    },
    {
        company: "Skingenius",
        role: "Product Manager",
        duration: "Aug 2024 - Dec 2024",
        location: "Boston, MA, USA",
        description: "Led product work on an AI skincare recommendation experience focused on onboarding clarity, recommendation trust, and first-session value.",
        achievements: [
            "Reduced onboarding friction and recommendation ambiguity, lifting engagement by 30% and quiz completion by 25%",
            "Managed agile delivery in Jira, improving release efficiency by 33% and shortening iteration loops across the team",
        ],
        skills: ["Product Management", "AI/ML", "Agile", "Jira", "User Experience", "B2C"],
        website: "https://skingenius.io/",
        cardHref: "https://skingenius.io/",
    },
    {
        company: "Nomad AI",
        role: "Product Manager",
        duration: "May 2024 - Jul 2024",
        location: "Boston, MA, USA",
        description: "Consulted on pricing, analytics, and MVP launch structure for an AI valuation product in a trust-sensitive SMB market.",
        achievements: [
            "Authored a pricing PRD across four monetization models after broker interviews and competitor benchmarking",
            "Defined AARRR, Lean Analytics, and OMTM metrics while supporting ETL automation for more reliable valuation inputs",
            "Modeled +42% conversion lift and +28% MRR upside as projected outcomes, separate from later post-launch growth",
        ],
        skills: ["SaaS", "Financial Tech", "Pricing Strategy", "Data Analytics", "SQL", "Mixpanel"],
        website: null,
        cardHref: null,
    },
    {
        company: "Cognizant",
        role: "Business Analyst",
        duration: "Jan 2022 - Jul 2022",
        location: "Remote",
        description: "Managed agile product backlog for EdTech product and engineered data preprocessing strategies.",
        achievements: [
            "Managed agile product backlog for EdTech product, resulting in 33% increase in user satisfaction and 10% reduction in time-to-market",
            "Engineered data preprocessing strategies, reducing data processing time by 18% and decreasing data errors by 20%",
            "Automated data dashboards using BI tools, accelerating access to insights and improving data-driven decision-making",
        ],
        skills: ["Business Analysis", "Agile", "ETL", "BI Tools", "Data Processing", "EdTech"],
        website: "https://cognizant.com",
        cardHref: null,
    },
    {
        company: "Symbionic",
        role: "Associate Product Manager",
        duration: "Jan 2021 - Dec 2021",
        location: "Remote",
        description: "Owned digital app for bionic arm technology, defining product roadmap and managing cross-functional collaboration.",
        achievements: [
            "Owned digital app for bionic arm, defining product roadmap and developing PRDs, optimizing release cycles and performance",
            "Managed cross-functional stakeholder collaboration (Biomechanical, Software, Design teams), improving product quality and increasing user satisfaction by 19%",
            "Conducted in-person market validation research with 100+ participants, contributing to 21% improvement in satisfaction",
            "Restructured customer satisfaction KPIs, leading to 17% increase in NPS and 13% boost in conversion rates",
        ],
        skills: ["Health Tech", "Hardware Integration", "Market Research", "Cross-functional Leadership", "NPS Optimization"],
        website: null,
        cardHref: null,
    },
    {
        company: "Various startups (Startup space)",
        role: "Product, Marketing, Web & Data",
        duration: "May 2019 - May 2020",
        location: "India",
        description: "Worked across early-stage teams in product marketing, web development, data science, and cross-functional delivery.",
        achievements: [
            "Supported product positioning, customer research, and go-to-market work for early-stage products",
            "Built web experiences and applied data analysis to emerging business problems",
            "Worked across technical and commercial responsibilities as startup needs changed",
        ],
        skills: ["Product Marketing", "Web Development", "Data Science", "Customer Research", "Cross-functional Delivery"],
        website: null,
        cardHref: null,
    },
    {
        company: "Entrepreneurship Cell, VIT",
        role: "Director of External Affairs",
        duration: "Dec 2017 - Apr 2020",
        location: "India",
        description: "Led external partnerships and strategic initiatives for the university's entrepreneurship ecosystem.",
        achievements: [
            "Managed external partnerships and stakeholder relationships for entrepreneurship initiatives",
            "Organized events and programs to foster entrepreneurial culture among students",
            "Developed strategic partnerships with industry leaders and startup ecosystem players",
        ],
        skills: ["Strategic Partnerships", "Leadership", "Event Management", "Stakeholder Relations", "Entrepreneurship"],
        website: null,
        cardHref: null,
    },
];

export const education: EducationItem[] = [
    {
        institution: "Northeastern University",
        degree: "Master of Science in Engineering Management",
        duration: "Sep 2022 - May 2024",
        gpa: "3.8/4.0",
        activities: [
            "Techstars Boston '24 - Event Organizer",
            "Women in Tech - Mentorship Coordinator",
            "Startup Accelerator Program - Participant",
            "Engineering Management Society - Member",
        ],
        coursework: [
            "Product Management",
            "Engineering Management",
            "Business Strategy",
            "Data Analytics",
            "Project Management",
            "Innovation & Entrepreneurship",
        ],
    },
    {
        institution: "Vellore Institute of Technology",
        degree: "Master of Technology Integrated in Software Engineering",
        duration: "2018 - 2022",
        gpa: "3.8/4.0",
        activities: [
            "Entrepreneurship Cell - Director of External Affairs",
            "Technical Clubs - Active Member",
            "Hackathons - Regular Participant",
        ],
        coursework: [
            "Software Engineering",
            "Data Structures & Algorithms",
            "Machine Learning",
            "Database Management",
            "Web Development",
            "Software Architecture",
        ],
    },
];
