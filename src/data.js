import IMG1 from "./assets/images/portfolio1.jpg";
import IMG2 from "./assets/images/portfolio2.jpg";
import Avatar1 from "./assets/images/avatars.png";

const data = [
  {
    id: 1,
    image: IMG2,
    title: "Real-Estate Agency",
    desc: "Real-Estate is to the best place to find your next perfect place to live.Real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.",
    techstack: ["#MongoDb ", " #ExpressJs ", " #ReactJs", " #NodeJs"],
    github: "https://github.com/mdjamilakhtar793/Rm-Real-Estate-Agency",
    demo: "https://rm-real-estate-agency-kbyz.onrender.com/",
  },
  {
    id: 2,
    image: IMG1,
    title: "E-Learning",
    desc: "Web application that enables users to search Valuable Course, view estimated Price ranges for positions, and locate available Courses based on their current Technical Skills.",
    techstack: ["#reactJs ", " #redux/Toolkits ", "#chakra ui"],
    github: "https://github.com/mdjamilakhtar793/Learning-Management-System/",
    demo: "https://learning-management-system-sigma.vercel.app/",
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
    image: Avatar1,
    name: "@R-Shobhna",
    designation: "Faculty-advisor-(AVIT) ",
    review:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  },
  {
    id: 3,
    image: Avatar1,
    name: "@S-Subhapriya",
    designation: "Professor-(AVIT)",
    review:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  },
];

export { data, testimonials };
