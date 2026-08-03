import './Taglist.css';

type TagListProps = {
  tags: string[]
}

function TagList({tags}: TagListProps) {
  if (!tags || tags.length === 0) return null

  return (
    <>
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </>
  )
}


export default TagList;