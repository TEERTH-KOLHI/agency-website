"use client";
import React from "react";
import { useTranslation } from "react-i18next";

interface Expert {
  id: number;
  name: string;
  username: string;
  role: string;
  expertise: string;
  description: string;
  profileImage: string;
}

const experts: Expert[] = [
  {
    id: 1,
    name: "John Doe",
    username: "@johndoe",
    role: "Full Stack Developer",
    expertise: "React, Node.js, MongoDB",
    description: "Building scalable web apps and leading agile teams.",
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "@janesmith",
    role: "UI/UX Designer",
    expertise: "Figma, Adobe XD, Prototyping",
    description: "Crafting delightful user experiences and modern UI designs.",
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    username: "@mchen",
    role: "Data Scientist",
    expertise: "Python, TensorFlow, Pandas",
    description: "Turning raw data into actionable insights.",
    profileImage: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    id: 4,
    name: "Sophia Lee",
    username: "@slee",
    role: "Frontend Engineer",
    expertise: "Next.js, TailwindCSS, TypeScript",
    description: "Creating fast and accessible frontend solutions.",
    profileImage: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    name: "David Kim",
    username: "@dkim",
    role: "Backend Engineer",
    expertise: "Go, PostgreSQL, Docker",
    description: "Designing reliable and secure server architectures.",
    profileImage: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    id: 6,
    name: "Emily Carter",
    username: "@ecarter",
    role: "Mobile Developer",
    expertise: "Flutter, Swift, Kotlin",
    description: "Building smooth cross-platform mobile experiences.",
    profileImage: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    id: 7,
    name: "Robert Green",
    username: "@rgreen",
    role: "DevOps Engineer",
    expertise: "AWS, Kubernetes, CI/CD",
    description: "Automating workflows and managing scalable systems.",
    profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 8,
    name: "Anna Johnson",
    username: "@ajohnson",
    role: "AI Engineer",
    expertise: "PyTorch, NLP, Computer Vision",
    description: "Pushing the limits of machine intelligence.",
    profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 9,
    name: "Carlos Martinez",
    username: "@cmartinez",
    role: "Cybersecurity Expert",
    expertise: "PenTesting, Firewalls, Encryption",
    description: "Protecting systems from threats and vulnerabilities.",
    profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 10,
    name: "Olivia Brown",
    username: "@obrown",
    role: "Product Manager",
    expertise: "Agile, Roadmapping, Strategy",
    description: "Driving product vision and delivering customer value.",
    profileImage: "https://randomuser.me/api/portraits/women/35.jpg",
  },
  {
    id: 11,
    name: "James Wilson",
    username: "@jwilson",
    role: "Cloud Architect",
    expertise: "Azure, GCP, Multi-cloud",
    description: "Designing cost-effective cloud-native solutions.",
    profileImage: "https://randomuser.me/api/portraits/men/71.jpg",
  },
  {
    id: 12,
    name: "Mia Davis",
    username: "@mdavis",
    role: "QA Engineer",
    expertise: "Selenium, Cypress, JUnit",
    description: "Ensuring high-quality products through testing.",
    profileImage: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    id: 13,
    name: "Ethan Walker",
    username: "@ewalker",
    role: "Game Developer",
    expertise: "Unity, Unreal, C#",
    description: "Designing fun and immersive game experiences.",
    profileImage: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    id: 14,
    name: "Isabella Rossi",
    username: "@irossi",
    role: "Marketing Strategist",
    expertise: "SEO, SEM, Growth Hacking",
    description: "Helping brands grow with data-driven campaigns.",
    profileImage: "https://randomuser.me/api/portraits/women/61.jpg",
  },
  {
    id: 15,
    name: "Liam Thompson",
    username: "@lthompson",
    role: "Blockchain Developer",
    expertise: "Solidity, Ethereum, Web3",
    description: "Building decentralized applications for the future.",
    profileImage: "https://randomuser.me/api/portraits/men/90.jpg",
  },
];

const CommunityCards = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen p-6  flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-12">
        <h1
          className="text-black dark:text-white text-8xl font-bold mb-2 leading-[0.84]"
          dangerouslySetInnerHTML={{ __html: t("communityHeader") }}
        ></h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg">
          {t("communitySubtitle")}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
        {experts.map((expert) => (
          <article
            key={expert.id}
            className="scale-115 flex flex-col items-center justify-start gap-2 rounded-lg border bg-[#EAF3FF] p-3 text-center shadow-md dark:bg-[#1E1E1E] h-[240px] w-[200px]
             transform transition-transform duration-300 hover:scale-118 cursor-pointer"
          >
            <img
              src={expert.profileImage}
              alt={expert.name}
              className="w-12 h-12 rounded-full object-cover border"
            />
            <h3 className="text-sm font-bold text-black dark:text-white mt-1">
              {expert.name}
            </h3>
            <p className="text-[10px] text-gray-500">{expert.username}</p>
            <h4 className="text-xs font-medium text-black dark:text-white">
              {expert.role}
            </h4>
            <p className="text-[10px] text-gray-700 dark:text-indigo-200/90 text-center">
              <span className="font-semibold">{t("expertise")}: </span>
              {expert.expertise}
            </p>
            <p className="text-[10px] text-gray-500 text-center">
              {expert.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default CommunityCards;
