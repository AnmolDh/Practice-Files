import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No Expenses for Year {props.filteredYear}
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((e) => (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={new Date(e.date)}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
