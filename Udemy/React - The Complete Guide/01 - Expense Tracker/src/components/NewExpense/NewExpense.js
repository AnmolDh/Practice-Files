import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

export default function (props) {
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => setShowForm((prev) => !prev);
  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          handleShowForm={handleShowForm}
          onSaveExpense={props.onSaveExpense}
        />
      ) : (
        <button onClick={handleShowForm}>Add New Expense</button>
      )}
    </div>
  );
}
