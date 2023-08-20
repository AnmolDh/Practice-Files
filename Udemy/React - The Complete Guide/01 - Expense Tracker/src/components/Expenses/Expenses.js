import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function (props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterYear = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (e) => filteredYear === new Date(e.date).getFullYear().toString()
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} filterYear={filterYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList
          filteredYear={filteredYear}
          filteredExpenses={filteredExpenses}
        />
      </Card>
    </div>
  );
}
