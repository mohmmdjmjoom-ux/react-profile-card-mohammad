// App exists to turn the profiles array into a grid: one ProfileCard per profile.
import { profiles } from "./profiles.js";
import ProfileCard from "./ProfileCard.jsx";

function App() {
  return (
    <main className="page">
      <h1>Our Team</h1>
      <section className="grid">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </section>
    </main>
  );
}

export default App;
