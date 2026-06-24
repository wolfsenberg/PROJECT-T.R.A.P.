import { QuizTopic } from "./types";
import { itFundamentalsQuestions } from "./it-fundamentals";
import { dataStructuresQuestions } from "./data-structures";
import { operatingSystemsQuestions } from "./operating-systems";
import { discreteStructuresQuestions } from "./discrete-structures";
import { networkingQuestions } from "./networking";
import { webDevelopmentQuestions } from "./web-development";
import { hciQuestions } from "./hci";

export const quizTopics: QuizTopic[] = [
  {
    id: "it-fundamentals",
    title: "IT Fundamentals",
    icon: "terminal",
    description: "Computing Concepts, History, Number Systems, Communication Systems, IT Social Issues",
    questions: itFundamentalsQuestions,
  },
  {
    id: "data-structures",
    title: "Data Structures & Algorithms",
    icon: "layers",
    description: "Arrays, Stacks, Sorting, Searching, Linked Lists, Queues",
    questions: dataStructuresQuestions,
  },
  {
    id: "operating-systems",
    title: "Operating Systems",
    icon: "cpu",
    description: "CPU Architecture, Booting, Protection, Process Management, Disk Scheduling",
    questions: operatingSystemsQuestions,
  },
  {
    id: "discrete-structures",
    title: "Discrete Structures",
    icon: "hash",
    description: "Counting, Permutations, Combinations, Set Operations, Logic",
    questions: discreteStructuresQuestions,
  },
  {
    id: "networking",
    title: "Data Comm & Networking",
    icon: "globe",
    description: "Protocols, Internet, Addressing, OSI Model, TCP/IP, Ethernet",
    questions: networkingQuestions,
  },
  {
    id: "web-development",
    title: "Web Development",
    icon: "code",
    description: "HTML & CSS Fundamentals, JavaScript, PHP Statements",
    questions: webDevelopmentQuestions,
  },
  {
    id: "hci",
    title: "Human-Computer Interaction",
    icon: "user",
    description: "Design Stories, User Research, Personas, Design Rules, Heuristics",
    questions: hciQuestions,
  },
];

export type { Question, QuizTopic } from "./types";
