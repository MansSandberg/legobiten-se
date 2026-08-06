import './ProjektItem.css';
import { HiOutlineGlobeAlt } from "react-icons/hi";
import TagList from './components/TagList';

type ProjektItemProps = {
  id: string
  title: string
  background?: string
  solution?: string
  lessons?: string
  website?: string,
  tags: string[]
  github?: string
  image?: string
}

function ProjektItem({ title, background, solution, lessons, website: link, tags, github, image }: ProjektItemProps) {
  return (
    <article className="projekt-item">
      <h3>{title}</h3>
      {background && (
        <>
          <h4>Bakgrund</h4>
          <p style={{ whiteSpace: 'pre-line' }}>{background}</p>
        </>
      )}
      {solution && (
        <>
        <h4>Lösning</h4>
        <p style={{ whiteSpace: 'pre-line' }}>{solution}</p>
        </>
      )}
      {lessons && <>
        <h4>Vad jag lärde mig</h4>
        <p style={{ whiteSpace: 'pre-line' }}>{lessons}</p>
      </>}
      {link && (
        <p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="button website"
          >
          <HiOutlineGlobeAlt />
            <span>Besök projektet</span>
          </a>
        </p>
      )}
      {github && (
        <p>
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className='button github'>
            {/* GitHub SVG icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: 'middle' }}>
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.81 1.19 1.84 1.19 3.1 0 4.44-2.71 5.41-5.29 5.69.42.36.8 1.08.8 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
            </svg>
            &nbsp;Visa koden på GitHub
          </a>
        </p>
      )}
      {tags.length > 0 && (
        <>
          <h4>Teknik</h4>
          <TagList tags={tags} />
        </>
      )}
      {image && (
        <img className="project-image" src={image} alt={`Skärmdump på ${title}`} />
      )}
    </article>
  )
}

export default ProjektItem
