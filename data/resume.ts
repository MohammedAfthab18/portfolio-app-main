import type { ContactInfo, SkillGroup, Experience, Project, Education, StatItem, ResumeData } from "@/types";

export const contact: ContactInfo = {
    name: "Lalithapriya Kumaravel",
    firstName: "Lalithapriya",
    lastName: "Kumaravel",
    title: "UI/UX Designer",
    email: "lalithapriyakumaravel@gmail.com",
    phone: "+91 8925490563",
    linkedin: "https://www.linkedin.com/in/lalithapriyakumaravel/",
    location: "Tiruvannamalai, Tamil Nadu, India",
    openToRelocate: true,
};

export const summary = "";

export const stats: StatItem[] = [
    { value: "3+", label: "Years Experience" },
    { value: "4+", label: "Production Apps Built" },
    { value: "6", label: "APIs Integrated" },
    { value: "40%", label: "PR Rework Reduced" },
];

export const skillGroups: SkillGroup[] = [
    {
        category: "Design Tools",
        skills: ["Figma, Framer, Webflow, Adobe XD, Adobe Photoshop, Adobe Illustrator, Adobe After Effects, Blender"],
    },
    {
        category: "UX Competencies",
        skills: ["UX Research, Interaction Design, Information Architecture, User Flows, Journey Mapping, Wireframing, Prototyping, Usability Testing, Heuristic Evaluation, A/B Testing, Accessibility (WCAG)"],
    },
    {
        category: "Design Systems",
        skills: ["Component Libraries, Design Tokens, Material Design, Responsive Design, Visual Hierarchy, Mobile-First, Design"],
    },
    {
        category: "Technical",
        skills: ["HTML5, CSS3, JavaScript, WordPress, Developer Handoff (Figma Inspect)"],
    },
    {
        category: "Emerging",
        skills: ["AI-Assisted Design Workflows, MCP-Based Design Systems, Prompt Engineering for UX"],
    },
    {
        category: "Methodologies",
        skills: ["Human-Centered Design, Agile, Cross-functional Collaboration, Product Strategy, Design Thinking"],
    },
];

export const experiences: Experience[] = [
    {
        id: "webtrendz",
        role: "UI/UX Designer",
        company: "Webtrendz Technologies",
        companyFull: "Webtrendz Technologies India Private Limited",
        location: "Tiruvannamalai, Tamil Nadu",
        duration: "March 2023 – Present",
        tenure: "3 yrs 2 mos",
        type: "Full-time",
        highlights: [
            "Designed and delivered 4+ production ERP and CRM web applications from scratch using Laravel — owning RESTful API design, business logic, Eloquent ORM, and MySQL database schema across 10+ relational modules per project.",
            "Introduced an Event Bus architecture in React JS to replace Redux for cross-component state management, reducing boilerplate code by 30%; adopted as the standard pattern across all subsequent full stack frontends.",
            "Led and mentored a team of 4 junior full stack developers in Laravel MVC, Git branching workflows, and React JS component patterns — reducing average pull-request rework by 40% and shortening sprint delivery cycles within 3 months.",
            "Integrated 6 third-party APIs across live client systems: Ozonetel (VoIP telephony), Twilio (WhatsApp messaging), SendGrid (transactional email), QuickBooks (invoicing automation), AskEva, and Buoy Insurance API.",
            "Managed CI/CD pipelines using Jenkins for automated deployment of 6+ production applications; administered cPanel hosting, DNS configuration, and SSL certificate setup and renewal.",
        ],
        tags: ["Laravel", "React JS", "MySQL", "Jenkins", "REST API", "Team Lead"],
    },
];

export const projects: Project[] = [
    {
        id: "real-estate-crm",
        index: 1,
        title: "Real Estate & Property Management CRM",
        status: "Live",
        description: "Full-featured real estate CRM for lead management, property listings, and customer communication — including a React JS admin dashboard, a Laravel-powered website, and separate REST APIs for two mobile apps.",
        techStack: ["Laravel", "React JS", "MySQL", "Ozonetel", "Twilio", "SendGrid"],
        highlights: [
            "Agent telephony via Ozonetel VoIP CTI integration",
            "WhatsApp messaging pipeline built on Twilio",
            "Automated transactional emails via SendGrid",
            "Dual REST APIs powering two separate mobile apps",
        ],
        color: "#2563EB",
    },
    {
        id: "industrial-erp",
        index: 2,
        title: "Industrial Job Management ERP",
        status: "Live",
        description: "End-to-end ERP for a metal manufacturing firm handling job quotes, production workflow cards, and fully automated invoicing via QuickBooks — built with Laravel API and a React JS dashboard.",
        techStack: ["Laravel", "React JS", "QuickBooks API"],
        highlights: [
            "Job quote and production workflow card management",
            "QuickBooks API integration for automated invoice generation",
            "Eliminated manual billing effort across the manufacturing cycle",
        ],
        color: "#0D9488",
    },
    {
        id: "garment-crm",
        index: 3,
        title: "Garment Order & Production Tracking CRM",
        status: "Live",
        description: "CRM for a garment business tracking customer orders, production job stages, and invoices — with a proforma and billing module enabling structured invoice generation and automated financial calculations.",
        techStack: ["Laravel", "React JS", "AskEva"],
        highlights: [
            "Real-time WhatsApp customer notifications via AskEva",
            "Proforma and billing module with automated totals and tax calculation",
            "End-to-end order tracking across all production stages",
        ],
        color: "#EA580C",
    },
    {
        id: "boat-rental",
        index: 4,
        title: "Boat Rental Booking Marketplace",
        status: "Live",
        description: "Marketplace platform where operators manage boat listings and complete bookings end-to-end, with Buoy Insurance API integrated directly into the booking flow for on-demand rental coverage.",
        techStack: ["Laravel", "Buoy Insurance API"],
        highlights: [
            "Operator-facing listing and booking management",
            "Buoy Insurance embedded at the point of booking",
            "On-demand rental coverage for customers",
        ],
        color: "#7C3AED",
    },
];

export const additionalWork = [
    "Developed custom WordPress themes and plugins for 5+ client websites, delivering tailored PHP solutions aligned to branding and functional requirements.",
    "Built and shipped features for an Android mobile app using Flutter and Dart, integrating REST APIs across multiple screens and navigation flows.",
    "Performed Joomla CMS version upgrades for multiple client sites, validating backward compatibility with zero data loss.",
];

export const education: Education[] = [
    {
        id: "bsc",
        degree: "Bachelor of Science (B.Sc.) in Mathematics",
        institution: "Kalaignar Karunanidhi Government Arts and Science College",
        board: "Thiruvalluvar University, Tamil Nadu",
        duration: "June 2017 – May 2020",
        grade: "69%",
    },
    // {
    //   id: "hsc",
    //   degree: "Higher Secondary Certificate (HSC) — Class XII",
    //   institution: "Danish Mission HR Secondary School, Tiruvannamalai",
    //   board: "Tamil Nadu State Board",
    //   duration: "March 2017",
    //   grade: "82.58%",
    // },
    // {
    //   id: "sslc",
    //   degree: "Secondary School Leaving Certificate (SSLC) — Class X",
    //   institution: "Danish Mission HR Secondary School, Tiruvannamalai",
    //   board: "Tamil Nadu State Board",
    //   duration: "March 2015",
    //   grade: "85.6%",
    // },
];

export const resume: ResumeData = {
    contact, summary, stats, skillGroups, experiences, projects, additionalWork, education,
};
