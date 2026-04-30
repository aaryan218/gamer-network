import Topbar from "./components/Topbar";
import LeftSidebar from "./components/LeftSidebar";
import FeedComposer from "./components/FeedComposer";
import PostFeed from "./components/PostFeed";
import RightSidebar from "./components/RightSidebar";
import "./gamers.css";

function GamersLinkedIn() {
  return (
    <div className="gln-shell">
      <Topbar />

      <main className="gln-layout">
        <LeftSidebar />

        <section className="gln-main">
          <FeedComposer />
          <PostFeed />
        </section>

        <RightSidebar />
      </main>
    </div>
  );
}

export default GamersLinkedIn;
