import {
  LuBuilding2,
  LuEar,
  LuLightbulb,
  LuHandshake,
  LuTrendingUp,
} from "react-icons/lu";

const promises = [
  {
    id: 1,
    label: "Business First",
    title: "We Put Business Before Technology",
    description:
      "Technology is only valuable when it solves a real business problem. Every recommendation we make begins with understanding your goals, not selling software.",
    icon: LuBuilding2,
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
  },

  {
    id: 2,
    label: "Listen",
    title: "We Listen Before We Recommend",
    description:
      "Every business has its own story. We take the time to understand your challenges, your team, and your vision before suggesting any solution.",
    icon: LuEar,
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
  },

  {
    id: 3,
    label: "Practical",
    title: "We Believe in Practical Solutions",
    description:
      "The best technology isn't the most complicated it's the one your team can confidently use every day. We value simplicity, usability, and lasting impact.",
    icon: LuLightbulb,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },

  {
    id: 4,
    label: "Partnership",
    title: "We Build Partnerships, Not Projects",
    description:
      "We're invested in long-term relationships, not one-time deliveries. We stay involved, provide guidance, and continue improving alongside your business.",
    icon: LuHandshake,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },

  {
    id: 5,
    label: "Growth",
    title: "We Grow Together",
    description:
      "Your progress is our success. As your business evolves, we're committed to helping your digital solutions evolve with it.",
    icon: LuTrendingUp,
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
  },
];

export default promises;