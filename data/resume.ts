import type { ContactInfo, SkillGroup, Experience, Project, Education, Publication, Certification, StatItem, ResumeData } from "@/types";

export const contact: ContactInfo = {
    name: "Mohammed Afthab N",
    firstName: "Mohammed",
    lastName: "Afthab N",
    title: "Full Stack Developer",
    email: "afthab2282@gmail.com",
    phone: "+91 63834 75532",
    linkedin: "https://www.linkedin.com/in/mohammed-afthab-4a8a72220/",
    github: "https://github.com/MohammedAfthab18",
    researchgate: "https://www.researchgate.net/publication/375668956_EEG_Based_Emotion_Classification_using_Deep_Learning_Models",
    location: "Tiruvannamalai, Tamil Nadu, India",
    openToRelocate: true,
};

export const summary = "Full Stack & Cross-Platform Software Engineer with 2+ years of production experience designing and shipping scalable systems across mobile (Flutter), web (React.js), desktop (Electron.js), and serverless backends. Progressed from Frontend Developer Intern to Full Stack Developer, independently delivering end-to-end production systems across fintech, EdTech, real estate, and maritime domains. Led a Flutter 2 → 3 production migration, integrated multi-platform payment systems (Stripe, Razorpay, Apple IAP), and architected clean, domain-driven solutions. Published researcher in deep-learning-based EEG emotion classification.";

export const stats: StatItem[] = [
    { value: "2+", label: "Years Experience" },
    { value: "8+", label: "Production Apps Built" },
    { value: "8+", label: "APIs Integrated" },
    { value: "15+", label: "ERP Modules Developed" },
];

export const skillGroups: SkillGroup[] = [
    {
        category: "Mobile",
        skills: ["Flutter", "BLoC", "GetX", "Firebase", "Hive", "TensorFlow Lite", "Razorpay", "Apple IAP"],
    },
    {
        category: "Frontend",
        skills: ["React.js", "TypeScript", "Redux Toolkit", "Angular", "Material UI", "Formik", "Yup", "ApexCharts"],
    },
    {
        category: "Desktop",
        skills: ["Electron.js", "Konva.js", "Electron Builder (Windows / macOS)"],
    },
    {
        category: "Backend",
        skills: ["Node.js", "Laravel (PHP)", "REST APIs", "Serverless Framework", "MySQL", "Firebase Firestore"],
    },
    {
        category: "AI/ML",
        skills: ["TensorFlow Lite", "Python", "scikit-learn", "NumPy", "DNN", "GRU", "LSTM", "Botpress", "Retell AI"],
    },
    {
        category: "DevOps & Tools",
        skills: ["Git", "Bitbucket", "Webpack", "Make.com"],
    },
];

export const experiences: Experience[] = [
    {
        id: "webtrendz-developer",
        role: "Full Stack Developer",
        company: "Webtrendz Technologies",
        companyFull: "Webtrendz Technologies India Private Limited",
        location: "Tiruvannamalai, Tamil Nadu",
        duration: "Aug 2024 – Present",
        tenure: "1 yr 10 mos",
        type: "Full-time",
        highlights: [
            "Owned end-to-end delivery of cross-platform Flutter mobile apps for 4+ production clients, architecting clean, domain-driven codebases using BLoC, GetX, and Repository patterns across Android and iOS.",
            "Engineered multi-platform payment systems integrating Stripe (3D Secure, retry, request-payment flows), Razorpay, and Apple In-App Purchase including purchase verification, restore flows, backend payment recording, and StoreKit debugging.",
            "Achieved App Store compliance under Apple Guideline 5.1.1(v) by building a complete account-deletion workflow with Firebase Auth revocation, backend profile anonymization, and financial audit data preservation.",
            "Led a Flutter 2 → 3 production migration across a live 4-app suite, resolving API deprecations, updating state management patterns, and maintaining zero-regression release stability throughout the upgrade.",
            "Built and maintained REST APIs using Laravel (PHP) and Node.js Serverless (AWS Lambda), implementing validation middleware, exception handling, and join-optimized queries to eliminate N+1 performance issues.",
            "Implemented offline-first mobile architectures using Hive NoSQL with lazy loading, delta refresh, cache invalidation, and Firestore sync ensuring full functionality in zero-connectivity environments.",
            "Delivered subscription-based course access control, timed test workflows, and media-rich learning features (PDF, video, HTML content, screen-protected playback) for a production EdTech platform on Android and iOS.",
            "Maintained multi-environment release cycles (QA → staging → demo → production) across multiple client projects using Git/Bitbucket branching strategies, preserving deployment stability across all environments."
        ],
        tags: ["Flutter", "Laravel", "React.js", "Node.js Serverless", "Stripe", "BLoC", "GetX", "Hive", "Firebase"],
    },
    {
        id: "webtrendz-intern",
        role: "Frontend Developer Intern",
        company: "Webtrendz Technologies",
        companyFull: "Webtrendz Technologies India Private Limited",
        location: "Tiruvannamalai, Tamil Nadu",
        duration: "May 2024 – Aug 2024",
        tenure: "4 mos",
        type: "Internship",
        highlights: [
            "Reduced cross-module data entry errors by architecting complex multi-step validated forms across 15+ ERP modules using Formik and Yup, enforcing field-level business rules at the UI layer before API submission.",
            "Strengthened organizational data security by implementing a granular Role-Based Access Control (RBAC) system governing permissions across Quotations, Job Cards, and Purchase Orders for multiple user roles.",
            "Improved management decision-making by building interactive ApexCharts dashboards that visualized real-time user productivity metrics and job work-time trends, giving leadership on-demand operational visibility.",
            "Ensured financial data consistency by integrating the React frontend with a QuickBooks synchronization endpoint via Axios, enabling reliable bidirectional data flow between the ERP and the accounting system.",
            "Accelerated frontend scalability by architecting global state management with Redux Toolkit, eliminating prop-drilling across deeply nested component trees in a large multi-module enterprise application."
        ],
        tags: ["React.js", "Redux Toolkit", "Formik", "Yup", "ApexCharts", "Axios", "QuickBooks Sync"],
    }
];

export const projects: Project[] = [
    {
        id: "super-id-card-maker",
        index: 1,
        title: "Super ID Card Maker",
        status: "Live",
        description: "Developed a comprehensive desktop ID card generation application that serves educational institutions, businesses, and event organizers with professional ID card creation capabilities.",
        detailedDescription: "A production-grade cross-platform ID card design utility deployed across Windows, macOS environments. It is architected as an Electron-based desktop app with dedicated main and renderer processes, optimizing window state management, and file systems. The design canvas engine is built using Konva.js to support rich features like layers, alignment, custom typography, image filters, and gradient fills. A dynamic Excel integration allows loading massive CSV/Excel sheets and instantly mapping columns to template fields for bulk badge and card rendering. The local print pipeline converts designs into optimized high-DPI PDFs, JPGs, PNGs, and custom binary formats with sub-millimeter print accuracy.",
        techStack: ["Electron.js", "React", "TypeScript", "Node.js", "Konva.js", "Redux Toolkit", "Framer Motion"],
        highlights: [
            "Built cross-platform desktop application using Electron.js with React and TypeScript frontend inside an MVC architecture.",
            "Engineered Excel data import system using xlsx library and dynamic column mapping for bulk card population.",
            "Built vector-based canvas design tool using Konva.js with drag-and-drop layer management and precise alignment.",
            "Engineered multi-format export (PDF, PNG, JPG, TIF) using jspdf and sharp, optimized with DPI scaling.",
            "Implemented user authentication (bcrypt, keytar), secure credential storage, and seamless auto-updates (electron-updater)."
        ],
        color: "#2563EB",
        links: [
            { label: "Maker App", url: "https://makerapp.superidcards.com/", platform: "web" }
        ]
    },
    {
        id: "gt-color-mixing-studio",
        index: 2,
        title: "GT Color Mixing Studio",
        status: "Live",
        description: "Offline, AI-powered physical color mixing app for artists simulating subtractive pigment blending with on-device light spectrum calculations.",
        detailedDescription: "An AI-powered offline Flutter application that bridges the gap between digital screen colors and real-world pigments. It implements two mixing engines: a high-fidelity Kubelka-Munk PigmentMixingEngine that models physical light reflection, absorption, and scattering of physical paint, and an RgbAverageMixingEngine for speed-efficient approximations. The application connects to a Node.js backend hosting the TensorFlow Lite model for color matching and pigment ratio calculations. It supports a 5-source input pipeline to import colors (from image color extractors, palette databases, HSL color wheels, brand catalogs, or color pickers) and calculate the precise mixing ratios of commercial artist brands to replicate the target hue.",
        techStack: ["Flutter", "Dart", "Node.js", "BLoC", "GetIt", "Hive NoSQL", "TensorFlow Lite", "Kubelka-Munk"],
        highlights: [
            "Developed dual mixing algorithms: Kubelka-Munk PigmentMixingEngine for physical simulation and RgbAverageMixingEngine.",
            "Implemented linear RGB color space conversions with sRGB gamma correction for accurate paint blend representation.",
            "Built comprehensive color input pipeline supporting 5 sources (picker, color wheel, image upload, catalog, palette reuse).",
            "Designed reactive DDD hierarchical data model (Projects → Workspaces → Color Mixes → Palettes) using BLoC streams.",
            "Optimized offline Hive database operations with lazy loading and local TensorFlow Lite on-device matching, backed by a Node.js backend service."
        ],
        color: "#EA580C",
    },
    {
        id: "thiruvel-academy",
        index: 3,
        title: "Thiruvel Academy",
        status: "Live",
        description: "Cross-platform EdTech learning and payments app supporting course subscription, timed tests, and secure App Store-compliant workflows.",
        detailedDescription: "A full-stack EdTech learning platform built with Flutter and Laravel. It integrates Firebase Phone Auth for student authentication, Razorpay for Android payments, and Apple In-App Purchase for iOS subscriptions. The app includes test-taking engines with timed limits, question logs, and reports, alongside media-rich course access features (PDF, video, HTML rendering, downloads). In addition, it provides robust Apple Guideline 5.1.1(v) compliance with direct account deletion and token revocation while safely retaining transaction history for financial audits.",
        techStack: ["Flutter", "Dart", "Firebase Auth", "Razorpay", "Apple IAP", "Laravel", "MySQL", "REST API"],
        highlights: [
            "Built full-stack EdTech platform using Flutter and Laravel API supporting course subscriptions, tests, and study materials.",
            "Integrated Razorpay (Android) and Apple In-App Purchase (iOS), debugging StoreKit configuration and transaction callbacks.",
            "Added App Store Guideline 5.1.1(v) compliance for account deletion, backend anonymization, and token revocation.",
            "Built interactive test-taking engine with timed tests, question navigation, submit flows, and subject performance reports.",
            "Implemented media-rich course content viewer with PDF rendering, secure video playback, and screen capture protection."
        ],
        color: "#16A34A",
        links: [
            { label: "App Store", url: "https://apps.apple.com/in/app/thiruvel-academy/id1620869307", platform: "appstore" },
            { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.web_trendz.thiruvelacademy&pcampaignid=web_share", platform: "playstore" }
        ]
    },
    {
        id: "vms-jewellery-platform",
        index: 4,
        title: "VMS Jewellery Platform",
        status: "Live",
        description: "Maintained and extended 4 production Flutter applications (2 customer, 2 admin) for the VMS/Vardhaman Silvers jewellery platform, including biometric locks.",
        detailedDescription: "A comprehensive multi-application suite for the Vardhaman Silvers (VMS) jewellery platform, comprising 2 customer-facing apps and 2 admin operations apps. The suite is built on Flutter and Dart, connecting to a Laravel REST API. Key features include an offline-ready biometric authentication lock using local authentication APIs, Cupertino interface styling to match iOS conventions, and secure catalog sync. Handled the end-to-end upgrade of the entire 4-app suite from Flutter 2 to Flutter 3, resolving breaking platform channel modifications, state management API deprecations, and library changes while ensuring zero down-time for active users.",
        techStack: ["Flutter", "Dart", "Cupertino Widgets", "Laravel", "REST API", "Biometric Lock", "State Management"],
        highlights: [
            "Maintained and extended 4 production Flutter applications (2 customer-facing, 2 admin) for VMS/Vardhaman Silvers jewellery platform.",
            "Led a Flutter 2 → Flutter 3 production migration — resolved breaking API changes, updated state management patterns, and preserved release stability.",
            "Implemented secure biometric lock in Flutter (Fingerprint/FaceID) which is live on production environments.",
            "Designed and implemented high-performance Cupertino widget controls to deliver platform-native design aesthetics.",
            "Integrated client applications with a Laravel REST API for live catalogue sync, order placements, and stock status updates."
        ],
        color: "#D97706",
        links: [
            { label: "Craft Cart (App Store)", url: "https://apps.apple.com/in/app/craft-cart/id1492994762", platform: "appstore" },
            { label: "VMS Pro (App Store)", url: "https://apps.apple.com/in/app/pro-vms/id1477701020", platform: "appstore" },
            { label: "Craft Cart (Play Store)", url: "https://play.google.com/store/apps/details?id=com.webtrendz.provms.craftcart&pcampaignid=web_share", platform: "playstore" },
            { label: "VMS Pro (Play Store)", url: "https://play.google.com/store/apps/details?id=com.vardhamansilvers.provms916&pcampaignid=web_share", platform: "playstore" }
        ]
    },
    {
        id: "daga-tvm-properties",
        index: 5,
        title: "DAGA TVM Properties Admin Portal",
        status: "Live",
        description: "Full-stack real estate CRM and operations dashboard for managing properties, plots, leads, customers, and org-level admin workflows.",
        detailedDescription: "A real estate property management platform and CRM built on Laravel and React Admin. It handles property and plot status tracking, lead management, document storage, and employee attendance logs. The backend aggregates SQL reporting (leave count, check-in averages, time-off checkouts) to eliminate N+1 database queries, and the frontend displays organization-level analytics using Material UI components and ApexCharts visualization.",
        techStack: ["Laravel 8", "PHP", "React.js", "React Admin", "MySQL", "Eloquent ORM", "Material UI", "ApexCharts"],
        highlights: [
            "Developed CRM and operations dashboard modules for property, plot, lead, customer, and settings management.",
            "Built SQL-based attendance report aggregation for check-in/out averages, leaves, permissions, and checkouts.",
            "Integrated ApexCharts-based visual reports with React for tracking attendance and plot interest trends.",
            "Implemented configurable app settings using dynamic JSON configurations stored and queryable in MySQL.",
            "Optimized API endpoints using Eloquent joins and preloading to eliminate N+1 data fetching issues."
        ],
        color: "#9333EA",
    },
    {
        id: "docklyne",
        index: 6,
        title: "Docklyne Marina Booking Platform",
        status: "Live",
        description: "Production marina operations platform used for rental and experience bookings, payments, Calendars, ledgers, and check-in workflows.",
        detailedDescription: "A full-stack booking marketplace for boat rentals and experiences. Docklyne coordinates fleet availability, digital booking calendars, approvals, renter communications, and Stripe payments (handling 3D Secure, transaction retries, and ledger synchronization). Built with Flutter for renters and Node.js Serverless Framework (AWS Lambda) for scalable, secure backends.",
        techStack: ["Flutter", "GetX", "Node.js", "Serverless", "AWS Lambda", "MySQL", "Stripe API", "WebSockets"],
        highlights: [
            "Maintained Flutter mobile app and Node.js serverless backend for marina bookings, fleet, and check-in/out workflows.",
            "Delivered secure Stripe payments handling saved cards, 3D Secure verification, retries, and recovery pipelines.",
            "Built low-latency REST APIs and WebSockets on AWS Lambda to sync booking status and calendar availability.",
            "Integrated GetX controller layers for state management, resolving async payment confirmation delays.",
            "Supported Git/Bitbucket branching strategies across multi-environment cycles (QA, staging, demo, production)."
        ],
        color: "#0D9488",
    },
    {
        id: "wt-books",
        index: 7,
        title: "WT Books",
        status: "Live",
        description: "Flutter bookkeeping and transaction tracker featuring offline-first Hive caching and Cloud Firestore synchronization.",
        detailedDescription: "WT Books is a cross-platform mobile bookkeeping and financial transaction manager designed for businesses. Developed with Flutter for high performance and native design fidelity on Android and iOS. The app is backed by a Node.js API server for transactions, PDF/Excel generation, and synchronization. The core architecture uses the BLoC pattern for clean separation of concerns, alongside GetIt for lightweight dependency injection. The app supports full offline-first functionality, storing records locally in Hive NoSQL and synchronizing with Cloud Firestore over the air using advanced delta refresh, fallback queries, and conflict-resolution algorithms. A reporting system enables users to export complex balance sheets, receipt records, and contact-specific statements to Excel and PDF formats, with automatic file compression and secure cloud attachment uploads.",
        techStack: ["Flutter", "Dart", "Node.js", "Firebase Auth", "Cloud Firestore", "Firebase Storage", "Hive", "BLoC", "GetIt", "GoRouter"],
        highlights: [
            "Built a production bookkeeping app in Flutter for managing businesses, transactions, attachments, and balance summaries.",
            "Implemented offline-first data access using Hive caching with Firestore sync, cache invalidation, and delta refreshes.",
            "Designed financial report exports in PDF and Excel formats covering balances, totals, and file attachments.",
            "Integrated material estimation calculators for TMT steel, water tank, and brickwork engineering.",
            "Structured codebase around BLoC, Repository, GetIt, and GoRouter, maintaining clean state separation."
        ],
        color: "#DB2777",
    },
    {
        id: "gadgets-masters",
        index: 8,
        title: "Gadgets Masters",
        status: "Live",
        description: "Automated the full customer intake, diagnosis, and scheduling pipeline by engineering a multi-modal AI booking system combining Botpress (text) and Retell AI (voice LLM).",
        detailedDescription: "Gadgets Masters is a conversational AI agent designed for automated repair booking, scheduling, and diagnostic triage. It features a multi-modal interface that processes text inputs via Botpress and real-time voice calls via Retell AI (voice LLM integration). The system implements a custom state-machine in TypeScript that enforces business-logic compliance: it validates phone numbers against Australian formats, restricts scheduling to valid business hours, and performs live knowledge-base queries to quote accurate pricing based on device models. It integrates with Make.com webhooks to synchronize bookings with backend calendars and dispatch instant SMS booking confirmations.",
        techStack: ["TypeScript", "Botpress", "Retell AI", "Make.com Webhooks", "Node.js"],
        highlights: [
            "Automated the full customer intake, diagnosis, and scheduling pipeline by engineering a multi-modal AI booking system combining Botpress (text) and Retell AI (voice LLM), eliminating manual agent handling.",
            "Enforced business-logic reliability by designing a deterministic state-machine with strict prompt engineering & validating Australian phone formats, enforcing business-hour scheduling, and retrieving real-time knowledge-base pricing.",
            "Ensured clean backend data ingestion by building TypeScript execution layers to parse unstructured user inputs into structured JSON payloads, triggering automated SMS reminders via Make.com webhooks."
        ],
        color: "#7C3AED",
        links: [
            { label: "Gadgets Masters", url: "https://gadgetsmaster.com.au/", platform: "web" }
        ]
    }
];

export const additionalWork = [
    "Led a Flutter 2 → 3 production migration across a live 4-app suite, resolving API deprecations and maintaining zero-regression release stability.",
    "Integrated multi-platform payment systems including Stripe (3D Secure, retry flows), Razorpay, and Apple In-App Purchases (IAP).",
    "Published academic researcher in deep-learning-based EEG emotion classification using DNN, GRU, and LSTM models.",
];

export const education: Education[] = [
    {
        id: "btech-cse",
        degree: "B.Tech in Computer Science and Engineering",
        institution: "SRM Institute of Science and Technology",
        board: "Chennai, Tamil Nadu, India",
        duration: "2020 – 2024",
        grade: "9.38 / 10 CGPA",
    }
];

export const publications: Publication[] = [
    {
        title: "EEG Based Emotion Classification using Deep Learning Models",
        publisher: "International Journal Of Innovative Science And Research Technology",
        date: "November 2023",
        description: "Developed and benchmarked DNN, GRU, and LSTM architectures for EEG-based emotion classification; conducted comparative evaluation using confusion matrix analysis and ML-based sentiment workflows.",
        link: "https://www.researchgate.net/publication/375668956_EEG_Based_Emotion_Classification_using_Deep_Learning_Models",
    }
];

export const certifications: Certification[] = [
    {
        name: "Advanced Learning Algorithms",
        issuer: "DeepLearning.AI / Coursera",
        date: "February 2026",
        grade: "Grade: 100%",
        link: "https://coursera.org/share/dc9413b23a627165cf54f01a201a90f8",
    },
    {
        name: "Supervised Machine Learning: Regression & Classification",
        issuer: "DeepLearning.AI / Coursera",
        date: "February 2026",
        grade: "Grade: 100%",
        link: "https://coursera.org/share/1a9928336c9cc832b4e0a62f0a9c698a",
    },
    {
        name: "Programming in Python",
        issuer: "Meta / Coursera",
        date: "November 2022",
        grade: "Grade: 98.87%",
        link: "https://coursera.org/share/d16912935ebf3155c7824b213ad924f3",
    }
];

export const resume: ResumeData = {
    contact, summary, stats, skillGroups, experiences, projects, additionalWork, education, publications, certifications
};
