import { Attributes } from "./components/Attributes";
import { Avatar } from "./components/Avatar";
import { JobExperiences } from "./components/JobExperiences";
import { Links } from "./components/Links";
import { Skills } from "./components/Skills";

const myAttr = [
  {
    id: 1,
    title: "Skills",
    content: <Skills />
  },
  {
    id: 2,
    title: "Languages",
    content: "Fluent English"
  },
  {
    id: 3,
    title: "Education",
    content: "Pursuing System Analysis and Development Course @ UNIASSELVI"
  },
  {
    id: 3,
    title: "Professional Experience",
    content: <JobExperiences />
  }
]

export function App() {
  return (
    <div className="flex justify-center align-center flex-col mx-[100px] flex-grow gap-5 my-24 md:mx-[30%] min-w-[350px] max-w-[600px]">
      <header className="flex flex-col">
        <div className="flex aling-center justify-between gap-8 row-start-1">
          <Avatar />
          <div className=" flex flex-col gap-4">
            <h1 className="self-center">Hey there! I'm Brian</h1>
            <Links />
          </div>
        </div>
      </header>
      {myAttr.map(a => (
        <Attributes
          key={a.id}
          id={a.id}
          title={a.title}
          children={a.content}
        />
      ))}
    </div>
  )
}


