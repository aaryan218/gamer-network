import EmptyState from "../common/EmptyState";
import PostCard from "../common/PostCard";

function ProfileFeed({ posts = [] }) {
  if (!posts.length) {
    return (
      <section className="profile-card profile-section">
        <EmptyState
          title="No posts yet"
          description="This profile has not shared any posts yet."
        />
      </section>
    );
  }

  return (
    <section className="profile-feed" aria-label="Profile feed">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}

export default ProfileFeed;
