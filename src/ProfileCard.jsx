// ProfileCard exists so one component can show ANY person:
// it receives a profile object as a prop and knows nothing about who it is.
import "./ProfileCard.css";

function ProfileCard({ profile }) {
  const { name, title, bio, avatar, featured } = profile;

  return (
    <article className={featured ? "card featured" : "card"}>
      <img className="avatar" src={avatar} alt={`Portrait of ${name}`} />
      <h2 className="name">{name}</h2>
      <p className="title">{title}</p>
      <p className="bio">{bio || "No bio provided"}</p>
    </article>
  );
}

export default ProfileCard;
