function PostCard({ post = {} }) {
  const {
    author = "Unknown Player",
    avatar = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    handle = "@unknown",
    timestamp = "Just now",
    content = "",
    image,
    likes = 0,
    comments = 0,
    shares = 0,
    tags = [],
  } = post;

  return (
    <article className="post-card card">
      <header className="post-card__header">
        <div className="post-card__identity">
          <img className="post-card__avatar" src={avatar} alt={author} />
          <div>
            <h3 className="post-card__author">{author}</h3>
            <p className="post-card__meta">
              {handle} · {timestamp}
            </p>
          </div>
        </div>
      </header>

      <p className="post-card__content">{content}</p>

      {image ? <img className="post-card__image" src={image} alt="Post preview" /> : null}

      {tags.length ? (
        <div className="post-card__tags" aria-label="Post tags">
          {tags.map((tag) => (
            <span key={tag} className="tag-pill tag-pill--small">
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      <footer className="post-card__footer" aria-label="Post engagement">
        <span>♥ {likes}</span>
        <span>💬 {comments}</span>
        <span>↗ {shares}</span>
      </footer>
    </article>
  );
}

export default PostCard;
