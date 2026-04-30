function FeedComposer() {
  return (
    <section className="gln-panel" aria-label="Create post">
      <h3>Share with your gaming network</h3>
      <textarea placeholder="Post an update, share a clip strategy, or announce opportunities..." rows={4} />
      <div className="gln-composer__actions">
        <button type="button" className="gln-btn">Add Clip</button>
        <button type="button" className="gln-btn">Add Poll</button>
        <button type="button" className="gln-btn gln-btn--primary">Publish</button>
      </div>
    </section>
  );
}

export default FeedComposer;
