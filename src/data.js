import IMG1 from "./assets/images/portfolio1.jpg";
import IMG2 from "./assets/images/portfolio2.jpg";
import IMG3 from "./assets/images/portfolio3.jpg";

import Avatar1 from "./assets/images/avatar1.jpg";
import Avatar2 from "./assets/images/avatar2.jpg";
import Avatar3 from "./assets/images/avatar3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "E-Learning",
    desc: "Web application that enables users to search Valuable Course, view estimated Price ranges for positions, and locate available Courses based on their current Technical Skills.",
    techstack: ["#reactJs ", " #redux/Toolkits ", "#chakra ui"],
    github: "https://github.com/mdjamilakhtar793/Learning-Management-System/",
    demo: "https://learning-management-system-sigma.vercel.app/",
  },

  {
    id: 2,
    image: IMG2,
    title: "Facebook-Clone",
    desc: " A comprehensive Social Meadia platform that allows users to Allow to use and Share Contents and recommendations for popular Information.",
    techstack: ["#Html ", " #Css ", " #JavaScript"],
    github: "https://github.com/mdjamilakhtar793/Facebook-Clone/",
    demo: "https://github.com/mdjamilakhtar793/Facebook-Clone/",
  },

  {
    id: 3,
    image: IMG3,
    title: "Fiver-Clone",
    desc: "A comprehensive Freelancer platform that allows users to Connect Client, and Build Products, and offers curated recommendations for Good Quality Products.",
    techstack: ["#React ", "#React-Router-Dom ", "#Tailwind CSS"],
    github: "https://github.com/mdjamilakhtar793/Fiver-UI-CLone",
    demo: "https://github.com/mdjamilakhtar793/Fiver-UI-CLone",
  },
];

const testimonials = [
  {
    id: 1,
    image: Avatar1,
    name: "@Dr S Raja Prakash",
    designation: "Depty HOD-(AVIT)",
    review:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  },
  {
    id: 2,
    image: Avatar2,
    name: "@R-Shobhna",
    designation: "Faculty-advisor-(AVIT) ",
    review:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  },
  {
    id: 3,
    image: Avatar3,
    name: "@S-Subhapriya",
    designation: "Professor-(AVIT)",
    review:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  },
];

export { data, testimonials };
