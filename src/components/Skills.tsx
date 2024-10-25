import { TechBadge } from "./TechBadge";

export function Skills() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <strong className="text-lg">Technologies</strong>
        <ul className="flex justify-center gap-2 flex-wrap py-2 px-8">
          <TechBadge tech="JavaScript" color="yellow" />
          <TechBadge tech="TypeScript" color="blue" />
          <TechBadge tech="React.JS" color="blue" />
          <TechBadge tech="Node.JS" color="green" />
          <TechBadge tech="Java" color="red" />
          <TechBadge tech="Python" color="blue" />
        </ul>
        <strong className="text-lg">Experience With</strong>
        <ul className="list-disc">
          <li>Integration with ERPs</li>
          <li>Data Analysis</li>
          <li>Customer Support</li>
          <li>Software Customization</li>

        </ul>
      </div>

    </div>
  )
}