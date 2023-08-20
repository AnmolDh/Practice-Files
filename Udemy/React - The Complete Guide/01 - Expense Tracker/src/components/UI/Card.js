import "./Card.css";

export default function (props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
