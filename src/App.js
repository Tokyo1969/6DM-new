import React from "react";

function App() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ color: "#FFD700" }}>6DM</h1>
      <p>Nowoczesna strona muzyczna w stylu synthpop</p>
    </div>
  );
}
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <section className="hero">
        <h1>6DM</h1>
        <p>Muzyka synthpop z nowoczesnym brzmieniem</p>
      </section>
      
      <section className="about">
        <h2>O mnie</h2>
        <p>
          Jestem twórcą muzyki synthpop, łączącym brzmienia lat 80. z nowoczesną elektroniką. 
          Moja pasja to tworzenie dźwięków, które przenoszą w czasie.
        </p>
      </section>
      
      <section className="music">
  <h2>Muzyka</h2>
  <div className="soundcloud-gallery">
    <iframe
      width="100%"
      height="166"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      title="Track 1"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/123456789&color=%23FFD700&inverse=false&auto_play=false&show_user=true"
    ></iframe>

    <iframe
      width="100%"
      height="166"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      title="Track 2"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/987654321&color=%23FFD700&inverse=false&auto_play=false&show_user=true"
    ></iframe>
  </div>
</section>

      
      <section className="contact">
        <h2>Kontakt</h2>
        <p>Skontaktuj się: <a href="mailto:kontakt@sixdm.pl">kontakt@sixdm.pl</a></p>
      </section>
    </div>
  );
}

export default App;
