function EmptyState({ title = "Nothing to show", description = "Check back later for updates." }) {
  return (
    <div className="empty-state card">
      <h3 className="empty-state__title">{title}</h3>
      <p className="empty-state__description">{description}</p>
    </div>
  );
}

export default EmptyState;
