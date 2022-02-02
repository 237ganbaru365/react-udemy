import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpensesFilter />
      {props.items.map((item) => (
        <ExpenseItem
          //Reactが変更、追加、または削除されたアイテムを識別するために、keyを設定する必要がある（otherwise エラーが表示される）
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
