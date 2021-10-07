export default function Card(props) {
  return (
    <div className="card">
      <img src={props.imgSrc} alt=""/>
      <span className="card__characters">{props.characters}</span>
    </div>
  );
}
