import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //React Hookは必ずfunctionコンポーネント内に記入する必要がある。また、その他の要素内にネストできない。
  //useStateはarrayをreturn。firstはvaluableでsecondはfunction
  const [title, setTitle] = useState(props.title);

  //Eventを扱う関数名には末尾にHandlerを使用することでわかりやすくする（not must)
  const clickHandler = () => {
    //これはこのままでは動かない、なぜならばReactは全てをトップダウンで読み取り最終的にDOMに反映された後、再度読み込みは行わないため
    //そのためにstateという考え方を使う
    // title = "Updated!";

    //setXxx（）を使うことで、値を取得するだけでなく、React内に記入されているcodeを再読み込みされる
    //each states have own value, so that we could touch own element to change the value
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button
          //onを使うことでaddEventlistnerを設置できる
          //先に宣言したfunctionの変数名を代入するが、関数宣言方法に関わらず()は書かない！
          //なぜならば、()を記入してしまうと、JSが先にその関数を実行した後でJSXの内容が返されてしまうから
          onClick={clickHandler}
        >
          Change Title
        </button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
