export default function CardFlux(props) {
  return (
    <div className="card-flux">
      <div className="card-flux__content-head">
        <span className="card-flux__title">{props.title}</span>
        <span className="card-flux__date">{props.date}</span>
      </div>
      <div className="card-flux__content-body">{props.text}</div>
      <div className="card-flux__content-footer">
        <a href="." target="_blank" className="card-flux__button">
          Ver mais...
        </a>
      </div>
    </div>
  );
}
