import GameTags from "../components/Profile/GameTags";
import ProfileFeed from "../components/Profile/ProfileFeed";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileStats from "../components/Profile/ProfileStats";
import ProfileTabs from "../components/Profile/ProfileTabs";

const profileUser = {
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    username: "NovaStrike",
    bio: "Ranked grinder, clip maker, and co-op strategist with a soft spot for indie games.",
};

const profileStats = {
    posts: 48,
    followers: 12800,
    following: 312,
};

const favoriteGames = ["Counter-Strike 2", "Valorant", "League of Legends", "Fortnite", "Apex Legends"];

const profilePosts = [
    {
        id: 1,
        author: "NovaStrike",
        handle: "@novastrike",
        avatar: profileUser.avatar,
        timestamp: "2h ago",
        content: "Hit a new personal best in ranked tonight. The clutch on round 24 still feels unreal.",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=800&fit=crop",
        likes: 421,
        comments: 56,
        shares: 13,
        tags: ["Ranked", "Clutch", "FPS"],
    },
    {
        id: 2,
        author: "NovaStrike",
        handle: "@novastrike",
        avatar: profileUser.avatar,
        timestamp: "Yesterday",
        content: "Trying a new support build this week. Team synergy is finally clicking.",
        likes: 208,
        comments: 34,
        shares: 9,
        tags: ["Strategy", "Co-op"],
    },
];

function Profile() {
    return (
        <main className="profile-page">
            <ProfileHeader user={profileUser} />
            <ProfileStats stats={profileStats} />
            <GameTags games={favoriteGames} />
            <ProfileTabs />
            <ProfileFeed posts={profilePosts} />
        </main>
    );
}

export default Profile;