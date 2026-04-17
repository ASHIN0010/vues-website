export const personalInfo = {
  name: "VUES",
  title: "Creative Director & Content Creator",
  experience: "2+ Years",
  email: "supportvues@gmail.com",
  phone: "+91 7306147446",
  location: "Chalakudy, Thrissur, Kerala",
  socials: {
    instagram: "https://www.instagram.com/vues.in?igsh=MXJtaXFsaDMyZ3ZhcQ==",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    vimeo: "https://vimeo.com"
  }
};

export const heroContent = {
  badge: personalInfo.title,
  headingMain: "WE DELIVER",
  headingAccent1: "BEFORE THE ",
  headingBreak: "PULSE OF THE EVENT ",
  headingAccent2: "FADES.",
  description: "We craft immersive digital experiences, high-end videos, and striking visuals that tell compelling stories and captivate audiences."
};

export const aboutContent = {
  tag: "About Us",
  title: "Merging creativity with",
  titleAccent: "technology",
  description: "We are a digital creator collective obsessed with crafting stunning visual narratives. From high-end videography and photography to immersive web experiences, we bring ideas to life with meticulous attention to detail and a passion for aesthetics.",
  profileImage: "/src/assets/about_vision.png",
  stats: [
    { label: "Experience", value: personalInfo.experience }
  ],
  features: [
    { title: "Visual Storytelling", description: "Cinematic videos and striking photography." },
    { title: "Creative Direction", description: "Brand identity and conceptual artistry." }
  ]
};

export const projects = [
  {
    id: 1,
    category: 'Video',
    type: 'video',
    title: 'EVENTS',
    src: '/videos/work-vfx.mp4',
    description: 'High-end visual effects and color grading showcase for a futuristic metropolis concept.',
    role: "VFX Artist, Editor"
  },
  {
    id: 2,
    category: 'Reels',
    type: 'video',
    title: 'Lifestyle Moments',
    src: '/videos/reel-lifestyle.mp4',
    description: 'Engaging, fast-paced vertical content designed to capture everyday energy.',
    role: "Cinematographer"
  },
  {
    id: 3,
    category: 'Reels',
    type: 'video',
    title: 'FAREWELL',
    src: '/videos/reel-urban.mp4',
    description: 'Visual storytelling through the lens of modern city life and architecture.',
    role: "Director, Editor"
  },
  {
    id: 4,
    category: 'Video',
    type: 'video',
    title: 'Event Highlights',
    src: '/videos/work-event.mp4',
    description: 'Full-coverage highlights from major corporate and cultural events.',
    role: "Lead Cinematographer"
  },
  {
    id: 5,
    category: 'Reels',
    type: 'video',
    title: 'Fashion Forward',
    src: '/videos/reel-fashion.mp4',
    description: 'Dynamic fashion reels focusing on style, movement, and visual rhythm.',
    role: "Editor, Stylist"
  },
  {
    id: 6,
    category: 'Reels',
    type: 'video',
    title: 'Global Wanderer',
    src: '/videos/reel-travel.mp4',
    description: 'A cinematic look at remote landscapes and travel adventures.',
    role: "Content Creator"
  },
];

export const services = [
  {
    iconName: "Video",
    title: "Content Creation",
    desc: "High-end video and photo production tailored for your brand's narrative. From concept to post-production.",
    price: "Start at $500",
    features: ["4K Video Production", "Cinematic Edits", "Storyboarding"],
  },
  {
    iconName: "Award",
    title: "Social Media Reels",
    desc: "Fast-paced, engaging short-form content optimized for Instagram Reels, TikTok, and YouTube Shorts.",
    price: "Start at $250",
    features: ["Trendy Transitions", "Subtitles & Graphics", "Color Grading"],
  },
  {
    iconName: "Handshake",
    title: "Event Coverage",
    desc: "Capturing the energy and key moments of your live events, festivals, or corporate gatherings.",
    price: "Start at $1000",
    features: ["Multi-cam Setup", "Same-day Edits", "Photo Highlights"],
  }
];

export const partners = [
  "Aura Digital", "Zenith Media", "Pixel Perfect", "Vision Agency", "Echo Creative", "Nova Studios"
];

export const workingSteps = [
  {
    title: "Book",
    desc: "Select your service and share your vision with us.",
    icon: "Calendar"
  },
  {
    title: "Shoot",
    desc: "We bring our high-end equipment to capture your story.",
    icon: "Video"
  },
  {
    title: "Deliver",
    desc: "Get your edited content ready for the world.",
    icon: "Send"
  }
];

export const brandingFeatures = [
  {
    id: 1,
    title: "Certified Creator Partner",
    desc: "Working with industry standards and verified procedures to deliver the best.",
    icon: "BadgeCheck"
  },
  {
    id: 2,
    title: "Unbelievable Pricing",
    desc: "High-end content starts at competitive pricing, matching your brand needs.",
    icon: "Tag"
  },
  {
    id: 3,
    title: "Instant Edits, Fast Delivery",
    desc: "No hidden delays! Clients get upfront timelines and a seamless delivery experience.",
    icon: "Zap"
  },
  {
    id: 4,
    title: "Easy Booking",
    desc: "Stop struggling with complex booking procedures. Simple and direct.",
    icon: "CalendarCheck"
  },
  {
    id: 5,
    title: "Safe & Secure",
    desc: "You & Your data is safe and secured with our private cloud servers.",
    icon: "ShieldCheck"
  },
  {
    id: 6,
    title: "Dedicated Support",
    desc: "We prioritize our clients and provide round-the-clock assistance.",
    icon: "HeartHandshake"
  }
];
