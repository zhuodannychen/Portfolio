import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    company: "Meta",
    position: "Software Engineer",
    duration: "March 2024 - Present",
    description: [
      "Product development"
    ],
    technologies: []
  },
  {
    company: "Capital One",
    position: "Software Engineer Intern",
    duration: "June 2023 - August 2023",
    description: [
      "Implemented REST API endpoints for a system designed to uniquely identify web devices, prioritizing user privacy by eliminating reliance on device fingerprinting",
      "Wrote automated tests; built Jenkins jobs to create AWS infra and deploy service in a coded manner"
    ],
    technologies: ["Java", "Spring Boot", "Docker", "YAML", "ECS", "EC2", "ALB"]
  },
  {
    company: "Texas A&M University",
    position: "B.S. in Computer Science & Minor in Economics",
    duration: "August 2020 - May 2023",
    description: [
      "GPA: 4.0/4.0",
      "Organizations: Aggie Competitive Programming Club, Aggie Coding Club, TAMU Blockchain Club",
      "Relevant Course Work: Networking, Blockchains, Computer Systems, Database System, Machine Learning, AI, Competitive Programming, Programming Languages, Data Structures & Algorithms, Analysis of Algorithms, Multivariable Calculus, Linear Algebra, Probability & Statistics, Financial Markets, Money & Banking"
    ],
    technologies: []
  },
  {
    company: "Texas A&M University",
    position: "Teaching Assistant",
    duration: "January 2023 - May 2023",
    description: [
      "Supported 90+ students as a TA for a competitive programming class taught under Dr. John Keyser",
      "Held weekly office hours, debugging sessions, and led discussions; received all positive feedback from student evaluations"
    ],
    technologies: ["Python", "C++"]
  },
  {
    company: "Capital One",
    position: "Software Engineer Intern",
    duration: "June 2022 - August 2022",
    description: [
      "Developed machine learning algorithms such as decision trees to identify hot leads out of 150K+ leads generated monthly",
      "Performed feature extraction using information gain and tuned model with cross validation, with 80% accuracy",
      "Architected serverless backend and created REST API endpoints"
    ],
    technologies: ["Python", "AWS Lambda", "SQL", "Flask", "Pandas", "Jenkins"]
  },
  {
    company: "Jasper & Plano West Senior High",
    position: "High School Student",
    duration: "August 2016 - May 2020",
    description: [
      "GPA: 4.32, Summa Cum Laude",
      "AP Scholar with Distinction",
      "Organizations: Computer Science Club, Artificial Intelligence Club, Robotics Club",
      "Led teams to win at multiple programming competitions including Lockheed Martin CodeQuest",
      "Lectured on advanced algorithms and data-structures that appear frequently in programming contests",
      "Planned and judged a regional programming contest with 150+ participants"
    ],
    technologies: []
  }
];