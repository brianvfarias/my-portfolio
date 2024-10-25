import { Badge } from "./ui/badge";


interface TechBadgeProps {
  tech: string
  color: "yellow" | "red" | "blue" | "green"
}
export function TechBadge(props: TechBadgeProps) {
  let bgColor = "";
  switch (props.color) {
    case "yellow":
      bgColor = "bg-yellow-500";
      break;
    case "blue":
      bgColor = "bg-blue-500";
      break;
    case "green":
      bgColor = "bg-green-400";
      break;
    case "red":
      bgColor = "bg-red-400";
      break;
    default:
      bgColor = "bg-gray-400"
  }
  return (
    <li className="">
      <Badge className={`${bgColor} text-md`} >{props.tech}</Badge>
    </li>
  )
}