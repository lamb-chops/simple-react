import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  //props.children are nested elements of the component
  return <div className={classes}>{props.children}</div>;
}

export default Card;
