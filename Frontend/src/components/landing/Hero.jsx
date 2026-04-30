function Hero() {
  return (
    <section className="hero">
      <p className="hero__eyebrow">Next-gen social gaming</p>
      <h1 className="hero__title">Build your squad, share your wins, and grow your gaming identity.</h1>
      <p className="hero__subtitle">
        A complete gamer-focused frontend experience with profile-first design, social discovery, and smooth responsive UI.
      </p>

      <div className="hero__actions">
        <button type="button" className="btn btn--primary">
          Get Started
        </button>
        <button type="button" className="btn btn--secondary">
          Explore Demo
        </button>
      </div>
    </section>
  );
}

export default Hero;
