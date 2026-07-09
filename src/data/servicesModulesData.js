import {
  LuWorkflow,
  LuWaypoints,
  LuShoppingBag,
  LuLayoutDashboard,
  LuShieldCheck,
  LuSearchCheck,
} from "react-icons/lu";

const services = [
  {
    id: 1,
    slug: "business-process-automation",

    title: "Business Process Automation",

    icon: LuWorkflow,

    intro:
      "Streamline repetitive tasks and improve operational efficiency through smart automation solutions tailored to your business.",

    problem:
      "Manual processes consume valuable time, increase human error, and slow down business growth.",

    audience:
      "Growing businesses looking to improve productivity, reduce repetitive work, and create more efficient workflows.",

    link: "/services/business-process-automation",
  },

  {
    id: 2,
    slug: "digital-transformation-consultancy",

    title: "Digital Transformation Consultancy",

    icon: LuWaypoints,

    intro:
      "Helping businesses identify opportunities where technology can improve operations, customer experience, and long-term growth.",

    problem:
      "Many businesses know they need to modernize but aren't sure where to begin or which technologies will create real value.",

    audience:
      "Business owners seeking guidance on adopting practical technology that aligns with their goals.",

    link: "/services/digital-transformation-consultancy",
  },

  {
    id: 3,
    slug: "ecommerce-solutions",

    title: "E-commerce Solutions",

    icon: LuShoppingBag,

    intro:
      "Build a stronger online selling experience through digital commerce solutions that connect businesses with more customers.",

    problem:
      "Limited online sales channels and disconnected customer experiences often prevent businesses from reaching their full potential.",

    audience:
      "Retailers, wholesalers, and businesses looking to sell products or services online.",

    link: "/services/ecommerce-solutions",
  },

  {
    id: 4,
    slug: "custom-digital-platforms",

    title: "Custom Digital Platforms",

    icon: LuLayoutDashboard,

    intro:
      "Design and develop digital platforms built specifically around your business processes, goals, and users.",

    problem:
      "Off-the-shelf software doesn't always fit the way your business operates, creating unnecessary limitations and inefficiencies.",

    audience:
      "Organizations that need tailored digital systems such as portals, dashboards, booking platforms, or internal business tools.",

    link: "/services/custom-digital-platforms",
  },

  {
    id: 5,
    slug: "system-maintenance-support",

    title: "System Maintenance & Technical Support",

    icon: LuShieldCheck,

    intro:
      "Keep your digital systems secure, reliable, and performing at their best through continuous maintenance and technical support.",

    problem:
      "Without ongoing support, digital platforms can become outdated, vulnerable, and less reliable over time.",

    audience:
      "Businesses that want dependable technical support and proactive system maintenance.",

    link: "/services/system-maintenance-support",
  },

  {
    id: 6,
    slug: "online-visibility-optimization",

    title: "Online Visibility Optimization",

    icon: LuSearchCheck,

    intro:
      "Improve your business's online presence so potential customers can discover, trust, and engage with your brand more easily.",

    problem:
      "Even exceptional businesses struggle to grow when customers can't easily find them online.",

    audience:
      "Businesses looking to strengthen their digital presence and attract more qualified customers.",

    link: "/services/online-visibility-optimization",
  },
];

export default services;