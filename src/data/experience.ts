import { TShowCaseListDetatils } from "@/components/ShowCaseList";

export const EXPERIENCE: TShowCaseListDetatils[] = [
  {
    title: "Full Stack Developer",
    organisation: {
      name: "A5IT Capital",
      href: "https://a5it.com/",
    },
    location: "Remote",
    description:
      "Helping refactor code written in ExpressJS and NextJS to use TypeScript. Building a CI/CD pipeline for the company's main product using Github Actions and AWS CodePipeline. Explored docker deployment and maintainance",
  },
  {
    title: "Cloud / Developer",
    organisation: {
      name: "Hyperce LLC",
      href: "https://hyperce.io/",
    },
    location: "Remote",
    description:
      "Helping build and deploy Vendure based eCommerce application with Vendure, NextJS, Postgres and AWS (EC2, ECR, ECS, AppRunner, S3, SES). \n\n Built the new website for the company with NextJS, Tailwind, Framer.",
  },
  {
    title: "Cloud Intern",
    organisation: {
      name: "Hyperce LLC",
      href: "https://hyperce.io/",
    },
    location: "Remote",
    description:
      "Built CI/CD Pipeline for a Node/Express/Typescript based API using Github Actions and deployed it to AWS EC2. Deployed a NextJS and a Vendure application on EC2.",
  },
  {
    title: "Frontend Developer",
    organisation: {
      name: "Nest Nepal",
      href: "https://nestnepal.com/",
    },
    location: "Hybrid - Pepsicola, Kathmandu",
    description:
      "Redesigned most components with Tailwind CSS and AstroJS. Built a CI/CD pipeline for the website using Github Actions - FTP Action.",
  },
];
