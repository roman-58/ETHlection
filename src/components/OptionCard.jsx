function OptionCard({ optionName, onClick }) {
  return (
    <div
      className="card shadow-sm pe-auto ratio ratio-1x1  "
      onClick={onClick}
      role="button"
    >
      <div className="card-body d-flex align-items-end p-3">
        <h1 className="card-title">{optionName}</h1>
      </div>
    </div>
  );
}

export default OptionCard;
