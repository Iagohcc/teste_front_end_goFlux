export default function Card(props) {
  return (
    <div className={"card" + (props.isArtist ? " is-artist" : "")}>
      <img src={props.imgSrc} alt=""/>
      <span className="card__music">{props.music}</span>
      <span className="card__artist">{props.artist}</span>
    </div>
  );
}
