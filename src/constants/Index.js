const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "Hono"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/JavaScript-Mastery-Pro",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://jsmastery.com/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/jsmasterypro",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  { id: 1, img: "/images/AdventureousMe.png" },
  { id: 2, img: "/images/CandidMe.png" },
  { id: 3, img: "/images/FormalMe.png" },
  { id: 4, img: "/images/AthleteMe.png" },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "AI-Tutor",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "AI-Tutor Text",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This AI Tutor app is a smart, responsive learning platform built to feel like having a personal mentor right in your pocket.",
            "Instead of a traditional study tool, it offers an interactive experience where users can create custom learning companions: choosing subject, topic depth, voice style, tone, and session duration.",
            "With real-time voice interaction, live transcripts, and seamless mic controls, it transforms studying into a natural conversation.",
            "Every companion is saved, progress is tracked, and users can manage multiple learning profiles with a clean, intuitive interface.",
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/PAM-cake/ai_saas",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Pictures",
          icon: "/images/folder.png",
          kind: "folder",
          position: "top-52 right-80",
          children: [
            {
              id: 1,
              name: "Authentication.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-5 left-10",
              imageUrl: "/Project1/Authentication.png",
            },
            {
              id: 2,
              name: "Companion Builder.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-5 left-72",
              imageUrl: "/Project1/Companion Builder.png",
            },
            {
              id: 3,
              name: "Home.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-5 right-10",
              imageUrl: "/Project1/Home.png",
            },
            {
              id: 4,
              name: "Journey.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-40 left-10",
              imageUrl: "/Project1/Journey.png",
            },
            {
              id: 5,
              name: "My Companions.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-40 left-72",
              imageUrl: "/Project1/My Companions.png",
            },
            {
              id: 6,
              name: "Transcripts.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-40 right-10",
              imageUrl: "/Project1/Transcripts.png",
            },
            {
              id: 7,
              name: "TutorPage.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-80 left-40",
              imageUrl: "/Project1/TutorPage.png",
            },
          ],
        }
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Ride_Booking App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Ride.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Designed as a seamless ride-booking platform, this app delivers a smooth and intuitive experience for both riders and drivers.",
            "Instead of just handling basic trip requests, it offers real-time tracking with Google Maps, smart fare calculation, and secure OTP-based ride verification.",
            "Think of it like a fully modern transport system—where users confirm a ride and nearby drivers instantly receive the request with live updates.",
            "It's built with a complete frontend and backend setup, featuring clean UI, robust authentication, and reliable database integration for trips, fares, and history.",
            "With dedicated interfaces for riders and drivers, the app ensures a fast, modern, and professional flow that mirrors real-world ride-hailing experiences."
          ],
        },
        {
          id: 2,
          name: "RIDE.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/PAM-cake/RIDE.",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "Pictures",
          icon: "/images/folder.png",
          kind: "folder",
          position: "top-52 left-80",
          children: [
            {
              id: 1,
              name: "User Homepage.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-5 left-10",
              imageUrl: "/Project2/User Homepage.png",
            },
            {
              id: 2,
              name: "User Confirmation Page.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-5 left-72",
              imageUrl: "/Project2/User Confirmation Page.png",
            },
            {
              id: 3,
              name: "Destination Search.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-5 right-10",
              imageUrl: "/Project2/Destination Search.png",
            },
            {
              id: 4,
              name: "Vehicle Selection.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-40 left-10",
              imageUrl: "/Project2/Vehicle Selection.png",
            },
            {
              id: 5,
              name: "User And Capt connection.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-40 left-72",
              imageUrl: "/Project2/User And Capt connection.png",
            },
            {
              id: 6,
              name: "OTP page.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-40 right-10",
              imageUrl: "/Project2/OTP page.png",
            },
            {
              id: 7,
              name: "Captain Home Page.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-75 left-10",
              imageUrl: "/Project2/Captain Home Page.png",
            },
            {
              id: 8,
              name: "Captain OTP.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-75 left-72",
              imageUrl: "/Project2/Captain OTP.png",
            },
            {
              id: 9,
              name: "Payement Page.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-75 right-10",
              imageUrl: "/Project2/Payement Page.png",
            },
            {
              id: 10,
              name: "Final Page.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-128 left-40",
              imageUrl: "/Project2/Final Page.png",
            },
          ],
        }
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "LAZAREV frontend",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Lazarev.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Built as a modern, animated frontend experience, this project recreates the Lazrev-style website with smooth scrolling and polished visual transitions.",
            "From sliding sections to scroll-triggered animations and a dynamic navbar, it delivers a lively, interactive feel powered by JavaScript and GSAP.",
            "Even with older tech stacks, it showcases clean UI work, attention to detail, and strong creative control over motion and user experience."
          ],
        },
        {
          id: 2,
          name: "Lazarev.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/PAM-cake/Agency-1",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Pictures",
          icon: "/images/folder.png",
          kind: "folder",
          position: "top-52 right-80",
          children: [
            {
              id: 1,
              name: "Homepage.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-5 left-10",
              imageUrl: "/Project3/HomePage.png",
            },
            {
              id: 2,
              name: "Information Page.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-5 left-72",
              imageUrl: "/Project3/Information Page.png",
            },
            {
              id: 3,
              name: "Second Page.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-5 right-10",
              imageUrl: "/Project3/Second Page.png",
            },
            {
              id: 4,
              name: "Third Page.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-40 left-10",
              imageUrl: "/Project3/Third Page.png",
            },
          ],
        }
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 4,
      name: "AdventureousMe.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-5 left-5",
      imageUrl: "/images/AdventureousMe.png",
    },
    {
      id: 5,
      name: "CandidMe.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-5 left-40",
      imageUrl: "/images/CandidMe.png",
    },
    {
      id: 6,
      name: "FormalMe.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-5",
      imageUrl: "/images/FormalMe.png",
    },
    {
      id: 7,
      name: "AthleteMe.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-40",
      imageUrl: "/images/ME.png",
    },
    {
      id: 8,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-140 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian.jpg",
      description: [
        "Hey! I’m Param 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };