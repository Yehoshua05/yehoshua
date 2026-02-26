// Site configuration
// Yehoshua - Software Developer Portfolio

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "Yehoshua | Software Developer",
  description: "Professional software developer specializing in HTML, CSS, JavaScript, Vue.js, Bootstrap, C#, and MySQL. Building modern, responsive web applications with 2 years of experience.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "/images/logo.png",
  links: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  contactLabel: "Contact Me",
  contactHref: "#contact",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "YEHOSHUA",
  roles: [
    "Full Stack Developer",
    "Frontend Specialist",
    "Backend Engineer",
    "UI/UX Enthusiast",
  ],
  backgroundImage: "/images/hero-bg.jpg",
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "About Me",
  description: "I'm Yehoshua, a passionate software developer with 2 years of experience crafting modern web applications. Based in Oyo, Nigeria, I specialize in building responsive, user-friendly interfaces and robust backend systems. My expertise spans from frontend technologies like HTML, CSS, JavaScript, Vue.js, and Bootstrap to backend development with C# and MySQL. I believe in writing clean, maintainable code that delivers exceptional user experiences.",
  experienceValue: "2+",
  experienceLabel: "Years of\nExperience",
  stats: [
    { value: "15+", label: "Projects Completed" },
    { value: "10+", label: "Happy Clients" },
    { value: "7", label: "Tech Stacks" },
  ],
  images: [
    { src: "/images/about-1.jpg", alt: "Frontend Development" },
    { src: "/images/about-2.jpg", alt: "Vue.js Framework" },
    { src: "/images/about-3.jpg", alt: "Backend Development" },
    { src: "/images/about-4.jpg", alt: "Full Stack Development" },
  ],
};

// Services section configuration
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "My Services",
  heading: "What I Can Do For You",
  services: [
    {
      iconName: "Code",
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using HTML, CSS, and JavaScript. Creating pixel-perfect implementations of designs with clean, semantic code.",
      image: "/images/service-1.jpg",
    },
    {
      iconName: "Layers",
      title: "Vue.js Applications",
      description: "Developing modern single-page applications with Vue.js framework. Implementing reactive components, state management, and seamless user experiences.",
      image: "/images/service-2.jpg",
    },
    {
      iconName: "Layout",
      title: "Responsive Design",
      description: "Creating mobile-first, responsive websites using Bootstrap and custom CSS. Ensuring your application looks great on all devices and screen sizes.",
      image: "/images/service-3.jpg",
    },
    {
      iconName: "Database",
      title: "Backend Development",
      description: "Building robust server-side applications with C# and MySQL database. Creating RESTful APIs, authentication systems, and efficient data management solutions.",
      image: "/images/service-4.jpg",
    },
  ],
};

// Portfolio section configuration
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "My Portfolio",
  heading: "Featured Projects",
  description: "A selection of my recent work showcasing my expertise in full-stack development. From e-commerce platforms to dashboard applications, each project demonstrates my commitment to quality and attention to detail.",
  projects: [
    {
      title: "LuxeCommerce",
      category: "E-Commerce Platform",
      year: "2025",
      image: "/images/portfolio-1.jpg",
      featured: true,
    },
    {
      title: "AnalyticsPro",
      category: "Dashboard Application",
      year: "2025",
      image: "/images/portfolio-2.jpg",
    },
    {
      title: "EstateFinder",
      category: "Real Estate Platform",
      year: "2024",
      image: "/images/portfolio-3.jpg",
    },
    {
      title: "ReserveLuxe",
      category: "Restaurant Booking",
      year: "2024",
      image: "/images/portfolio-4.jpg",
    },
    {
      title: "TaskMaster Pro",
      category: "Productivity App",
      year: "2024",
      image: "/images/portfolio-5.jpg",
    },
  ],
  cta: {
    label: "Have a project in mind?",
    heading: "Let's Work Together",
    linkText: "Start a Project",
    linkHref: "mailto:the.yehoshua01@gmail.com",
  },
  viewAllLabel: "View All Projects",
};

// Testimonials section configuration
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "Testimonials",
  heading: "What Clients Say",
  testimonials: [
    {
      quote: "Yehoshua delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise transformed our online presence. Highly recommended!",
      author: "Michael Adeyemi",
      role: "CEO",
      company: "LuxeRetail Nigeria",
      image: "/images/testimonial-1.jpg",
      rating: 5,
    },
    {
      quote: "Working with Yehoshua was a pleasure. He understood our requirements perfectly and built a responsive dashboard that our team uses daily. His Vue.js skills are impressive!",
      author: "Sarah Okafor",
      role: "Product Manager",
      company: "DataTech Solutions",
      image: "/images/testimonial-2.jpg",
      rating: 5,
    },
    {
      quote: "The restaurant booking system Yehoshua developed has streamlined our operations significantly. Clean code, great communication, and delivered on time. Will definitely work with him again!",
      author: "David Nwosu",
      role: "Owner",
      company: "ReserveLuxe Dining",
      image: "/images/testimonial-3.jpg",
      rating: 5,
    },
  ],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["Full Stack Developer", "Vue.js Specialist", "C# Developer"],
  heading: "Ready to Build Something Amazing?",
  description: "I'm always excited to take on new challenges and collaborate on innovative projects. Whether you need a complete web application or want to enhance an existing one, let's discuss how I can help bring your vision to life.",
  buttonText: "Get In Touch",
  buttonHref: "mailto:the.yehoshua01@gmail.com",
  email: "the.yehoshua01@gmail.com",
  backgroundImage: "/images/cta-bg.jpg",
};

// Footer section configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "/images/logo.png",
  description: "Software developer crafting modern web experiences with HTML, CSS, JavaScript, Vue.js, Bootstrap, C#, and MySQL. Let's build something extraordinary together.",
  columns: [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Frontend Development", href: "#services" },
        { label: "Vue.js Applications", href: "#services" },
        { label: "Responsive Design", href: "#services" },
        { label: "Backend Development", href: "#services" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "the.yehoshua01@gmail.com", href: "mailto:the.yehoshua01@gmail.com" },
        { label: "+234 805 896 4569", href: "tel:+2348058964569" },
        { label: "Oyo, Nigeria", href: "#" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Linkedin", href: "https://www.linkedin.com/in/joshua-uchenna-3b6148315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { iconName: "Github", href: "https://github.com", label: "GitHub" },
    { iconName: "Twitter", href: "https://twitter.com", label: "Twitter" },
    { iconName: "Mail", href: "mailto:the.yehoshua01@gmail.com", label: "Email" },
  ],
  newsletterHeading: "Stay Updated",
  newsletterDescription: "Subscribe to receive updates on my latest projects and tech insights.",
  newsletterButtonText: "Subscribe",
  newsletterPlaceholder: "Enter your email",
  copyright: "© 2026 Yehoshua. All rights reserved.",
  credit: "Crafted with passion in Oyo, Nigeria",
};
