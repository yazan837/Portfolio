import { DiAndroid } from "react-icons/di";
import { SiFirebase, SiGit } from "react-icons/si";
import { SiTypescript } from "react-icons/ri";

export const Skills = [
  {
    slug: "React Native",
    Component: DiAndroid,
    title: "React Native",
    Description: () => <>I work on many apps using this technologies</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => (
      <>I have used Firebase for auth, database & analytics in my apps.</>
    ),
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => (
      <>Git is a tool that I use every day. I use GitHub for pushing my code.</>
    ),
  },
];
