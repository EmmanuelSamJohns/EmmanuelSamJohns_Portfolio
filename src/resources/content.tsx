import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Emmanuel",
  lastName: "Sam Johns",
  name: `Emmanuel Sam Johns`,
  role: "Aspiring Environmental Consultant",
  avatar: "",
  email: "emmanuel.samjohns@outlook.com",
  location: "Australia/Brisbane", // Townsville, QLD, Australia
  languages: [],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <></>,
  description: <></>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/emmanuel-sam-johns-1b54911b2",
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
  image: "/images/og-image.png",
  label: "Home",
  title: `${person.name} — Portfolio`,
  description: `Portfolio of ${person.name}, an aspiring environmental consultant bringing field science and spatial data to environmental decision-making.`,
  headline: <>Bringing field science and spatial data to environmental consulting.</>,
  featured: {
    display: false,
    title: <></>,
    href: "/work",
  },
  subline: (
    <>
      Masters graduate from James Cook University bringing skills in spatial mapping, GIS, and
      remote sensing to the table. Aspiring to work as an environmental consultant, translating
      field and satellite data into clear outputs for environmental decision-making.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, an aspiring environmental consultant based in Townsville, QLD, Australia`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>
          I&apos;m Emmanuel Sam Johns, a Master of Marine Biology graduate from James Cook
          University with hands-on experience in environmental monitoring, spatial data analysis,
          and fieldwork.
        </p>
        <p>
          During my research internship at JCU, I helped build a long-term ecological monitoring
          framework for Pioneer Bay, combining drone imagery, R-based spatial mapping, and on-site
          field validation, and worked directly with OIRS, AIMS, and JCU stakeholders to design
          permanent reef transects. Furthermore, I have spent time in hatchery and aquaculture
          operations at MPEDA-RGCA in Kochi, adding to my experience working in
          biosecurity-conscious settings.
        </p>
        <p>
          I enjoy translating scientific and spatial data into clear, structured outputs that
          support real decision-making, and I&apos;m now looking to bring that combination of field
          science, GIS, and reporting into a graduate environmental consulting role.
        </p>
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "James Cook University, Marine Biology & Aquaculture",
        timeframe: "Aug 2025 – Nov 2025",
        role: "Environmental Research Intern",
        achievements: [
          <>
            Contributed to a long-term ecological monitoring framework for Pioneer Bay,
            integrating drone imagery, R-based mapping, literature synthesis, and field
            validation to inform sampling design.
          </>,
          <>
            Designed and managed a structured research library of peer-reviewed studies for the
            OIRS Long-Term Monitoring Program.
          </>,
          <>
            Created coordinate-based spatial datasets and reference maps in R, overlaying
            satellite imagery with sampling locations across Orpheus Island and the Palm Island
            Group.
          </>,
          <>
            Assisted in designing permanent transects across reef-flat, mangrove, crest, and
            slope habitats, incorporating feedback from OIRS, AIMS, and JCU stakeholders.
          </>,
          <>
            Conducted snorkelling surveys, reef walking, and camera-based transect swims using
            GeoNadir drone imagery and GPS coordinates to evaluate site suitability.
          </>,
          <>
            Produced a structured handover report and presentation outlining project progress,
            methodology, and recommended next steps.
          </>,
        ],
        images: [],
      },
      {
        company: "MPEDA-RGCA Multispecies Aquaculture Complex (MAC), Kochi",
        timeframe: "Jun 2023 – Nov 2023",
        role: "Technical Trainee & Project Intern, Aquaculture & Hatchery Operations",
        achievements: [
          <>
            Worked across hatchery and nursery operations for tiger shrimp, Asian seabass, GIFT
            tilapia, and pearl spot, supporting broodstock management, spawning, live-feed prep,
            larval rearing, and water quality monitoring.
          </>,
          <>
            Assisted with disease diagnostics, early-stage culture management, and routine
            hatchery maintenance supporting biosecurity standards.
          </>,
          <>Supported training sessions for undergraduate and postgraduate students.</>,
          <>
            Invited to extend as Technical Trainee based on performance, strengthening teamwork,
            communication, and field discipline.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Master of Marine Biology (MSc), James Cook University",
        description: (
          <>
            Townsville, Feb 2024 – Dec 2025. GPA 5.07/7.0 (Credit average). Coursework: Remote
            Sensing; Coastal, Estuarine &amp; Mangrove Ecosystems; Marine Conservation Biology;
            Modelling Ecological Dynamics; Quantitative Methods in Science; Techniques in Marine
            Science 1 &amp; 2. Recipient of the JCU International Excellence Award, 2024.
          </>
        ),
      },
      {
        name: "Bachelor of Zoology, Mahatma Gandhi University, CMS College",
        description: <>2019 – 2022. Overall grade: A.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills & Tools",
    skills: [
      {
        title: "GIS & Spatial Mapping",
        tags: [
          { name: "ArcGIS (in progress)" },
          { name: "R (ggplot2, ggmap)" },
          { name: "GeoNadir drone imagery" },
          { name: "Satellite imagery analysis" },
          { name: "Coordinate dataset creation" },
          { name: "Google Earth Engine" },
        ],
        images: [],
      },
      {
        title: "Data & Analysis",
        tags: [
          { name: "Excel" },
          { name: "Word" },
          { name: "Outlook" },
          { name: "Basic MATLAB" },
          { name: "Structured database development" },
          { name: "Literature review & synthesis" },
        ],
        images: [],
      },
      {
        title: "Field Techniques",
        tags: [
          { name: "Snorkelling surveys" },
          { name: "Reef walking" },
          { name: "Transect photography" },
          { name: "Habitat assessment" },
          { name: "Water quality testing" },
          { name: "Marine lab techniques" },
        ],
        images: [],
      },
      {
        title: "Reporting & Communication",
        tags: [
          { name: "Scientific report writing" },
          { name: "Technical documentation" },
          { name: "Stakeholder briefings" },
          { name: "Presentations" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Selected Projects – ${person.name}`,
  description: "Coursework and applied research from the MB5370 spatial ecology unit at JCU.",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
