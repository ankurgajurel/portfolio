import { TShowCaseListDetatils } from "@/components/ShowCaseList";

export const EXPERIENCE: TShowCaseListDetatils[] = [
  {
    title: "Backend DevOps Developer",
    organisation: {
      name: "A5IT Capital",
      href: "https://a5it.com/",
    },
    location: "Remote",
    description: `
      - Deploy and build CI pipelines for Express, Postgres and NextJS apps. <br />
      - Develop and maintain backend services using Node.js and TypeScript.<br />
      - Design and implement RESTful APIs with the Express.js framework.<br />
      - Utilize Docker for containerization / deployment. and setup CI/CD pipelines
    `,
  },
  {
    title: "Cloud / Developer",
    organisation: {
      name: "Hyperce LLC",
      href: "https://hyperce.io/",
    },
    location: "Remote",
    description: `
      - Orchestrated AWS deployments on ECS, AppRunner, and EC2 platforms. <br />
      - Managed SES, S3, CloudFront, Route 53 and more AWS services for efficient solutions.<br />
      - Spearheaded CI/CD pipeline development for streamlined software delivery.<br />
      - Single handedly developed main company website using Next.js for optimal performance.<br />
      - Aided junior DevOps professional in a smooth transition and knowledge transfer.
      `,
  },
  {
    title: "Cloud Intern",
    organisation: {
      name: "Hyperce LLC",
      href: "https://hyperce.io/",
    },
    location: "Remote",
    description: `
      - Deployed Node/Express/Typescript based API on EC2 and AppRunner. <br />
      - CI/CD with Github Actions.
    `,
  },
  {
    title: "Frontend Developer",
    organisation: {
      name: "Nest Nepal",
      href: "https://nestnepal.com/",
    },
    location: "Hybrid - Pepsicola, Kathmandu",
    description: `
      - Redesigned most components with Tailwind CSS and AstroJS. <br />
      - Built a CI/CD pipeline for the website using Github Actions - FTP Action.
    `,
    // description:
    //   "Redesigned most components with Tailwind CSS and AstroJS. Built a CI/CD pipeline for the website using Github Actions - FTP Action.",
  },
];
