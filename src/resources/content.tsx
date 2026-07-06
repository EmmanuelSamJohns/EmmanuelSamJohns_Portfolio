import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

// NOTE: Placeholder content — to be replaced verbatim with the copy from
// "Emmanuel Sam Johns Portfolio.dc.html" (Claude Design project) once the
// file is available in this repository. Only the design comes from the
// magic-portfolio template; the content source of truth is the .dc.html.

const person: Person = {
  firstName: "Emmanuel",
  lastName: "Sam Johns",
  name: `Emmanuel Sam Johns`,
  role: "Software Developer", // TODO: replace with role from the .dc.html
  avatar: "/images/avatar.jpg", // TODO: replace with Emmanuel's photo
  email: "", // TODO: replace with email from the .dc.html
  location: "Asia/Kolkata", // TODO: IANA time zone, e.g. 'Asia/Kolkata'
  languages: [], // TODO: fill from the .dc.html, or leave empty to hide
  locale: "en",
};

const newsletter: Newsletter = {
  display: false, // enable after configuring Mailchimp in once-ui.config.ts
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Occasional updates about my work and projects</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essential: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/EmmanuelSamJohns", // TODO: confirm handle
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "", // TODO: add LinkedIn URL from the .dc.html
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  // TODO: replace headline/subline with the hero copy from the .dc.html
  headline: <>Emmanuel Sam Johns</>,
  featured: {
    display: false, // enable and point at a real project once content lands
    title: <>Featured work</>,
    href: "/work",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()}. This portfolio is
      being set up — full content coming soon.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // set a scheduling link to enable
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    // TODO: replace with the introduction from the .dc.html
    description: <>{person.name} is a {person.role.toLowerCase()}.</>,
  },
  work: {
    display: false, // TODO: enable and fill experiences from the .dc.html
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: false, // TODO: enable and fill institutions from the .dc.html
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: false, // TODO: enable and fill skills from the .dc.html
    title: "Technical skills",
    skills: [],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: `Blog – ${person.name}`,
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [], // TODO: add images if the .dc.html includes a gallery
};

export { person, social, newsletter, home, about, blog, work, gallery };
