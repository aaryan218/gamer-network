import { feedPosts } from "../data/mockData";

function PostFeed() {
  return (
    <section className="gln-feed" aria-label="Professional feed">
      {feedPosts.map((post) => (
        <article className="gln-panel" key={post.id}>
          <h4>{post.author}</h4>
          <p className="gln-muted">{post.role}</p>
          <p>{post.content}</p>
          <div className="gln-tags">
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <footer className="gln-post__meta">
            <span>♥ {post.likes}</span>
            <span>💬 {post.comments}</span>
            <button type="button" className="gln-btn">Connect</button>
          </footer>
        </article>
      ))}
    </section>
  );
}

export default PostFeed;
