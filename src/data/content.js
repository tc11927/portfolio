export const profile = {
    name: "Thea C",
    handle: "thea-c",

    email: "TheaCalaquian@gmail.com",
    socials: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/thea-c/" },
    ],
    tags: ["Graphic Design", "UI/UX Design", "Motion Graphics"],
};

export const hero = {
    greeting: "Hey there! Nice to meet you, I'm",
    firstName: "Thea C!",
    statement: {
        before: "Rooted in creating designs made with    ",
        accent1: "curiosity",
        middle: " and",
        accent2: "care",
        after: ". I love approaching each project where I can bring both joy and bring my user-first mindset into play :)",
    },

    marquee: {
        line1: "visual storytelling rooted in",
        accent1: "curiosity",
        connector: "and",
        accent2: "care",
    },
};

export const projectFilters = [
    "all",
    "Design",
    "UI/UX",
    "Motion Graphics",
    "Front-end",
];

export const featuredProjectIds = [
    "tandem",
    "bandit-breakout",
    "popunk",
    "porksoda",
];

export const allProjects = [
    {
        id: "tandem",
        year: "2025",
        title: "Tandem",
        subtitle: "Childcare web app",
        categories: ["Design", "UI/UX", "Motion Graphics", "Front-end"],
        tools: "Figma + Illustrator + After Effects + Visual Studio Code",
        description:
            "A childcare web app aimed to create a world where instead of childcare feeling overwhelming and consistent, childcare is supportive, flexible, and reliable.",
        color: "#64bcad",
        link: "/work/tandem",
        image: "/work/tandemmockup.png",
    },
    {
        id: "bandit-breakout",
        year: "2025",
        title: "Bandit Breakout",
        subtitle: "Gaming platform",
        categories: ["Design", "UI/UX", "Motion Graphics"],
        tools: "Figma + Illustrator + After Effects",
        description:
            "Bandit Breakout blends stunning visual design with engaging gameplay, making gaming with friends more interactive and personalized.",
        color: "#7da75b",
        link: "/work/bandit-breakout",
        image: "/work/banditmockup.png",
    },
    {
        id: "paramore",
        year: "2024",
        title: "Paramore E-magazine",
        subtitle: "Interactive digital magazine",
        categories: ["Design", "UI/UX", "Front-end"],
        tools: "Figma + Illustrator + Photoshop + Visual Studio Code",
        description:
            "An interactive e-magazine homage to Paramore and their history — fun, stylish, creative, and informative.",
        color: "#64bcad",
        link: "/work/paramore",
        image: "/work/paramoremockup.png",
    },
    {
        id: "popunk",
        year: "2024",
        title: "POPUNK!",
        subtitle: "Energy drink brand identity",
        categories: ["Design"],
        tools: "Illustrator + Photoshop",
        description:
            "POPUNK! is a high voltage energy drink for late nights, fun times, and chaotic energy with friends.",
        color: "#64bcad",
        link: "/work/popunk",
        image: "/work/canmockup 1.png",
    },
    {
        id: "porksoda",
        year: "2024",
        title: "Pork Soda",
        subtitle: "Lyrics video",
        categories: ["Design", "Motion Graphics"],
        tools: "Illustrator + After Effects",
        description:
            "A vibrant, fun, and detailed animated lyrics video for Pork Soda by Glass Animals.",
        color: "#7da75b",
        link: "/work/porksoda",
        image: "/work/porksodamockup.png",
    },
    {
        id: "tandemvideo",
        year: "2024",
        title: "Tandem Video Ad",
        subtitle: "Motion ad",
        categories: ["Design", "Motion Graphics"],
        tools: "Illustrator + After Effects",
        description:
            "A video ad telling the story of a stressed trades parent, drawing from real experiences to highlight daily pressures and imbalances they face.",
        color: "#64bcad",
        link: "/work/tandemvideo",
        image: "/work/tandemvideomockup.png",
    },
    {
        id: "moolahmate",
        year: "2024",
        title: "MoolahMate",
        subtitle: "Budgeting app",
        categories: ["Design", "UI/UX", "Motion Graphics", "Front-end"],
        tools: "Figma + Illustrator + After Effects + Visual Studio Code",
        description:
            "A budgeting app that helps people save money and track spending — with MooMoo, the money-saving cow mascot!",
        color: "#64bcad",
        link: "/work/moolahmate",
        image: "/work/moolahmatemockup.png",
    },
    {
        id: "ayezerok",
        year: "2024",
        title: "Ayezerok",
        subtitle: "Character design",
        categories: ["Design"],
        tools: "Illustrator + Photoshop",
        description:
            "A strange, mysterious creature threatening society — made, melded, and blended together from various different animals.",
        color: "#7da75b",
        link: "/work/ayezerok",
        image: "/work/creature.png",
    },
];

export const featuredProjects = allProjects.filter((project) =>
    featuredProjectIds.includes(project.id),
);


export const projects = allProjects;

export const sketchbook = {
    title: "My Sketchbook",

    images: [
        {
            id: "toothless",
            src: "/sketchbook/toothless.png",
            alt: "Toothless doodle",
        },
        {
            id: "kitty",
            src: "/sketchbook/kittycat.png",
            alt: " kitty",
        },
        { id: "anjei", src: "/sketchbook/anjei.png", alt: "Character sketch" },
        {
            id: "cawfee",
            src: "/sketchbook/cawfee 1.png",
            alt: "Coffee illustration",
        },

        { id: "b", src: "/sketchbook/b.png", alt: "Sketch study" },
        {
            id: "woman",
            src: "/sketchbook/woman.png",
            alt: " woman",
        },
        {
            id: "spiderman",
            src: "/sketchbook/spiderman.jpg",
            alt: "Spiderman",
        },
        {
            id: "sunset",
            src: "/sketchbook/sunset.png",
            alt: "Sunset illustration",
        },
    ],
};

export const about = {
    bio: "I'm a UX/UI and Graphic Designer from Vancouver, B.C., rooted in curiosity and care. I love approaching each project with joy and a user-first mindset — blending creativity with meaningful, connection-driven design.",
};

export const aboutPage = {
    heading: "About Me",
    paragraphs: [
        "I'm Thea, a UX/UI and Graphic Designer from Vancouver, B.C., who is rooted in creating designs rooted in curiosity and care. I love approaching each project where I can bring both joy and bring my user-first mindset into play.",
        "I’ve always had a passion for art, starting with drawing and animating. Over time, I found myself enjoying graphic design and technology, as it allowed me to blend my creativity and desire to make meaningful products. Now, I strive to design in a way that sparks curiosity and connection.",
        "When I’m not designing, you’ll probably find me drawing, exploring nature, or listening to music. My desire to search and create drive my work, and I believe that in no matter what I do, creativity and care is key.",
    ],
    skills: [
        "User-Centered Design",
        "Visually Captivating Graphics",
        "Fun and Practicallity",
        "Storytelling and Empathy",
    ],
    connect: {
        line1: "Let's",
        line2: "Connect!",
    },
};

export const navLinks = [
    {
        id: "projects",
        label: "Projects",
        path: "/work",
        hoverColor: "green",
    },
    { id: "about", label: "About", path: "/about", hoverColor: "teal" },

    {
        id: "sketchbook",
        label: "Sketchbook",
        path: "/sketchbook",
        hoverColor: "yellow",
    },
    {
        id: "contact",
        label: "Contact",
        path: "https://www.linkedin.com/in/thea-c/",
        hoverColor: "blue",
    },
];
