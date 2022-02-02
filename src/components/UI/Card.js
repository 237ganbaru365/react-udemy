import "./Card.css";

function Card(props) {
  //childrenを使えば、カスタムコンポーネントでも外側にhtml要素がなくても使えるようになる
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
