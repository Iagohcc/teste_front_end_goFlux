export default function CardTimeline(props) {
  return (
    <div className="card-timeline">
      <div className="card-timeline__content-head">
        <span className="card-timeline__title">{props.title}</span>
        <span className="card-timeline__date">{props.date}</span>
      </div>
      <div className="card-timeline__content-body">{props.text}</div>
      <div className="card-timeline__content-footer">
        <a href="." target="_blank" className="card-timeline__button">
          Ver mais...
        </a>
        <span className="card-timeline__artist">{props.artist}</span>
      </div>
    </div>
  );
}
