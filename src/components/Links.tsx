import { Envelope, GithubLogo, LinkedinLogo, MapPin } from '@phosphor-icons/react'
export function Links() {
  return (
    <ul className='block'>
      <li>
        <a className='flex gap-1 break-all items-center' href="mailto:brianvicthorandp@gmail.com"><Envelope size={15} /> brianvicthorandp@gmail.com</a>
      </li>
      <li>
        <a className='flex gap-1 break-all items-center' target="_blank" href="https://www.linkedin.com/in/brian-farias/"><LinkedinLogo size={15} /> LinkedIn</a>
      </li>
      <li>
        <a className='flex gap-1 break-all items-center' target="_blank" href="https://github.com/brianvfarias"> <GithubLogo size={15} /> Github</a>
      </li>
      <li>
        <a className='flex gap-1 break-all items-center' target="_blank" href="https://maps.app.goo.gl/Xj3sztGv1Tv4JhAC7"><MapPin size={15} /> Fortaleza, CE</a>
      </li>
    </ul>
  )
}