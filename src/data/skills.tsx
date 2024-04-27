import Image from "next/image";
import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";

import {
  FramerMotionIcon,
  GithubIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/Icons";
import { SkillPillProps } from "@/components/Skills";
import {
  ArchitectureServiceAWSAppRunner,
  ArchitectureGroupEC2instancecontents,
  ArchitectureServiceAmazonRDS,
  ArchitectureServiceAmazonS3onOutposts,
} from "aws-react-icons";

export const LANGUAGES: SkillPillProps[] = [
  {
    name: "Javascript",
    icon: <Image alt="javascript logo" src="/icons/javascript.svg" fill />,
  },
  {
    name: "Typescript",
    icon: <Image alt="typescript logo" src="/icons/typescript.svg" fill />,
  },
  {
    name: "Python",
    icon: <Image alt="python logo" src="/icons/python.svg" fill />,
  },
];

export const DEVOPS: SkillPillProps[] = [
  {
    name: "AWS EC2",
    icon: (
      <svg
        className="w-6 h-6"
        height="40"
        width="40"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
            id="Arch_Amazon-EC2_32_svg__a"
          >
            <stop stop-color="#C8511B" offset="0%"></stop>
            <stop stop-color="#F90" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <path d="M0 0h40v40H0z" fill="url(#Arch_Amazon-EC2_32_svg__a)"></path>
          <path
            d="M26.052 27L26 13.948 13 14v13.052L26.052 27zM27 14h2v1h-2v2h2v1h-2v2h2v1h-2v2h2v1h-2v2h2v1h-2v.052a.95.95 0 01-.948.948H26v2h-1v-2h-2v2h-1v-2h-2v2h-1v-2h-2v2h-1v-2h-2v2h-1v-2h-.052a.95.95 0 01-.948-.948V27h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-.052a.95.95 0 01.948-.948H13v-2h1v2h2v-2h1v2h2v-2h1v2h2v-2h1v2h2v-2h1v2h.052a.95.95 0 01.948.948V14zm-6 19H7V19h2v-1H7.062C6.477 18 6 18.477 6 19.062v13.876C6 33.523 6.477 34 7.062 34h13.877c.585 0 1.061-.477 1.061-1.062V31h-1v2zM34 7.062v13.876c0 .585-.476 1.062-1.061 1.062H30v-1h3V7H19v3h-1V7.062C18 6.477 18.477 6 19.062 6h13.877C33.524 6 34 6.477 34 7.062z"
            fill="#FFF"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "AWS ECS",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 40 40"
        height="40"
        width="40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
            id="Arch_Amazon-Elastic-Container-Service_32_svg__a"
          >
            <stop stop-color="#C8511B" offset="0%"></stop>
            <stop stop-color="#F90" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <path
            d="M0 0h40v40H0z"
            fill="url(#Arch_Amazon-Elastic-Container-Service_32_svg__a)"
          ></path>
          <path
            d="M32 24.25l-4-2.357v-6.068a.492.492 0 00-.287-.444L22 12.736V8.285l10 4.897V24.25zm.722-11.811l-11-5.387a.504.504 0 00-.485.022.49.49 0 00-.237.417v5.557c0 .19.111.363.287.444L27 16.136v6.035c0 .172.091.332.243.42l5 2.947a.501.501 0 00.757-.42v-12.24a.49.49 0 00-.278-.44zM19.995 32.952L9 27.317V13.169l9-4.849v4.442l-4.746 2.636a.488.488 0 00-.254.427v8.842a.49.49 0 00.258.43l6.5 3.515a.508.508 0 00.482.001l6.25-3.371 3.546 2.33-10.041 5.38zm6.799-8.693a.51.51 0 00-.519-.022L20 27.622l-6-3.245v-8.265l4.746-2.637a.489.489 0 00.254-.427V7.49a.489.489 0 00-.245-.422.512.512 0 00-.496-.01l-10 5.388a.49.49 0 00-.259.43v14.737c0 .184.103.35.268.436l11.5 5.895a.52.52 0 00.471-.005l11-5.895a.486.486 0 00.039-.839l-4.484-2.947z"
            fill="#FFF"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "AWS AppRunner",
    icon: <ArchitectureServiceAWSAppRunner />,
  },
  {
    name: "AWS RDS",
    icon: <ArchitectureServiceAmazonRDS />,
  },
  {
    name: "AWS S3",
    icon: <ArchitectureServiceAmazonS3onOutposts />,
  },
  {
    name: "Azure",
    icon: (
      <Image
        alt="aws s3 logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png"
        fill
      />
    ),
  },
  {
    name: "Github Actions",
    icon: (
      <Image
        alt="python logo"
        src="https://i.pinimg.com/564x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg"
        fill
      />
    ),
  },
];

export const LIBRARY_FRAMEWORK: SkillPillProps[] = [
  {
    name: "Reactjs",
    icon: <Image alt="reactjs logo" src="/icons/reactjs.svg" fill />,
  },
  {
    name: "Nextjs",
    icon: <SiNextdotjs className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "ContextAPI",
    icon: <Image alt="redux logo" src="/icons/redux.svg" fill />,
  },
  {
    name: "Tailwindcss",
    icon: <Image alt="tailwindcss logo" src="/icons/tailwindcss.svg" fill />,
  },

  {
    name: "Framer motion",
    icon: <FramerMotionIcon className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
];

export const BACKEND_PILL: SkillPillProps[] = [
  {
    name: "FastAPI",
    icon: (
      <svg
        fill="none"
        height="40"
        width="40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 154 154"
      >
        <circle cx="77" cy="77" fill="#05998b" r="77" />
        <path
          d="M81.375 18.667l-38.75 70H77.5l-3.875 46.666 38.75-70H77.5z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    name: "Flask",
    icon: <SiFlask className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "Node JS",
    icon: <Image alt="nodejs logo" src="/icons/nodejs.svg" fill />,
  },
  {
    name: "Express JS",
    icon: (
      <svg
        fill="#ffffff"
        className="h-full w-full"
        viewBox="0 0 24 24"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
      </svg>
    ),
  },
];

export const DATABASE_ORM_PILL: SkillPillProps[] = [
  {
    name: "PostgreSQL",
    icon: <Image alt="postgresql logo" src="/icons/postgresql.svg" fill />,
  },
  {
    name: "MongoDB",
    icon: <Image alt="mongodb logo" src="/icons/mongodb.svg" fill />,
  },
];

export const TOOLS_TECHNOLOGIES: SkillPillProps[] = [
  {
    name: "Git",
    icon: <Image alt="git logo" src="/icons/git.svg" fill />,
  },
  {
    name: "Github",
    icon: <GithubIcon className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  {
    name: "Docker",
    icon: <Image alt="docker logo" src="/icons/docker.svg" fill />,
  },
  {
    name: "Postman",
    icon: <Image alt="postman logo" src="/icons/postman.svg" fill />,
  },
  {
    name: "VSCode",
    icon: <Image alt="vscode logo" src="/icons/vscode.svg" fill />,
  },
];
