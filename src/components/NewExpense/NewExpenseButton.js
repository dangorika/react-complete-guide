import './NewExpenseButton.css';

const NewExpenseButton = ({ type, text, onClick = () => {} }) => {
    return <button type={type} className="new-expense-button" onClick={onClick}>{text}</button>
};

export default NewExpenseButton;