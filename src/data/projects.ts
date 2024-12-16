import { ProjectCardProps } from "@/components/ProjectCard";
import { ProjectShowcaseListProps } from "@/components/ProjectShowcaseList";

export const PROJECT_SHOWCASE: ProjectShowcaseListProps[] = [
  {
    index: 0,
    title: "Youtube Quiz Generator App",
    href: "https://github.com/ankurgajurel/youtube-quiz-generator",
    tags: ["Python", "OpenAI", "CLI", "REST APIs", "NextJS"],
    image: {
      LIGHT:
        "https://opengraph.githubassets.com/671311041a3fc895c7e39c0263ef6a9593d12f4a9c93e7db4b6da9b508494521/ankurgajurel/youtube-chat",
      DARK:
        "https://opengraph.githubassets.com/671311041a3fc895c7e39c0263ef6a9593d12f4a9c93e7db4b6da9b508494521/ankurgajurel/youtube-chat",
    },
  },
  {
    index: 1,
    title: "URL Shortener",
    href: "https://github.com/ankurgajurel/url-shortener",
    tags: ["Flask", "Next.js", "Postgres", "Docker"],
    image: {
      LIGHT: "/projects/urlShortener.png",
      DARK: "/projects/urlShortener.png",
    },
  },
  {
    index: 2,
    title: "nepse-cli",
    href: "https://github.com/ankurgajurel/nepse-cli",
    tags: ["Python", "Typer", "CLI", "REST APIs"],
    image: {
      LIGHT:
        "https://opengraph.githubassets.com/671311041a3fc895c7e39c0263ef6a9593d12f4a9c93e7db4b6da9b508494521/ankurgajurel/youtube-chat",
      DARK: "https://opengraph.githubassets.com/671311041a3fc895c7e39c0263ef6a9593d12f4a9c93e7db4b6da9b508494521/ankurgajurel/youtube-chat",
    },
  },
  {
    index: 3,
    title: "Hyperce Main",
    href: "https://hyperce.io",
    tags: ["NextJS", "GraphQL", "Tailwind CSS"],
    image: {
      LIGHT: "/projects/hyperce-main.png",
      DARK: "/projects/hyperce-main.png",
    },
  },
  {
    index: 4,
    title: "Saru's Archival",
    href: "https://saruarchives.com/",
    tags: ["NextJS", "Typescript", "Tailwind CSS", "Docker", "Ant Design"],
    image: {
      LIGHT: "/projects/sarusArchival.png",
      DARK: "/projects/sarusArchival.png",
    },
  },
  {
    index: 5,
    title: "Utarchadhav",
    href: "https://utarchadhav.com/",
    tags: ["NextJS", "Typescript", "Tailwind CSS", "Docker"],
    image: {
      LIGHT: "/projects/utarchadhav.png",
      DARK: "/projects/utarchadhav.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Youtube Quiz Generator App",
    description: "A fullstack app that geneartes quiz questions for a vtt file or a youtube video",
    sourceCodeHref: "https://github.com/ankurgajurel/youtube-quiz-generator",
    imageUrl: ["https://opengraph.githubassets.com/c800106a9dffd8151a3fb383bc81b85550b0d5af229f723a78c7090fc685840f/ankurgajurel/youtube-quiz-generator"],
    favicon: "/images/projects/logos/jsontree.ico",
  },

  {
    name: "Youtube Chat",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "https://opengraph.githubassets.com/671311041a3fc895c7e39c0263ef6a9593d12f4a9c93e7db4b6da9b508494521/ankurgajurel/youtube-chat",
    ],
    description:
      "A CLI app build with Typer in Python that serves data related to Youtube Chat.",
    sourceCodeHref: "https://github.com/ankurgajurel/youtube-chat",
  },
  {
    name: "URL Shortener",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: ["/projects/urlShortener.png"],
    description:
      "A full-stack URL shortener built with Flask and SQLAlchemy for a robust and scalable server, Next.js for a modern and interactive user interface, and Postgres for reliable data storage. Showcases skills in full-stack development, modern frameworks, and clean architecture.",
    sourceCodeHref: "https://github.com/ankurgajurel/url-shortener",
    liveWebsiteHref: "https://github.com/ankurgajurel/url-shortener", // You might want to update this with the actual live website URL
  },
  {
    name: "nepse-cli",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "https://opengraph.githubassets.com/f29c38d48c3384f925635e6528801bbfa81423cee32e708b9aa9494b4d3d6afe/ankurgajurel/nepse-cli",
    ],
    description:
      "A CLI app build with Typer in Python that serves data related to NEPSE. The data is fetched from multiple websites.",
    sourceCodeHref: "https://github.com/ankurgajurel/nepse-cli",
    liveWebsiteHref: "https://github.com/ankurgajurel/nepse-cli", // You might want to update this with the actual live website URL
  },
  {
    name: "noc-nepal-api",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "https://opengraph.githubassets.com/d706e5207c68043d7f05147efce1c372d9ec16bcde971b40c8b3e1b495f8c186/ankurgajurel/noc-nepal-api",
    ],
    description: "An unofficial API for data from Nepal Oil Corporation",
    sourceCodeHref: "https://github.com/ankurgajurel/noc-nepal-api",
    liveWebsiteHref: "https://github.com/ankurgajurel/noc-nepal-api", // You might want to update this with the actual live website URL
  },
  {
    name: "Hyperce Main",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: ["https://www.hyperce.io/og-logo.png"],
    description: "Main Website for the company",
    liveWebsiteHref: "https://hyperce.io",
  },
  {
    name: "Garuda Agency",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "https://garuda-agency.vercel.app/_next/image?url=%2Fslideshow%2Fslideshow.gif&w=1920&q=75",
    ],
    description: "Main Website for the job recruitment solutions.",
    liveWebsiteHref: "https://garuda-agency.vercel.app/",
  },
  {
    name: "Invey Survey Platform",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: ["/projects/invey.png"],
    description: "A survey platform for the company.",
    liveWebsiteHref: "https://dev.invey.io/",
  },
  {
    name: "Saru's Archival",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: ["/projects/sarusArchival.png"],
    description: "Saru's Archival is a website that showcases work by Saru.",
    liveWebsiteHref: "https://saruarchives.com/",
  },
  {
    name: "Utarchadhav",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: ["/projects/utarchadhav.png"],
    description: "A survey platform for the company.",
    liveWebsiteHref: "https://utarchadhav.com/",
  },
];
