import React, { useState } from "react";

// import styled from 'styled-components';
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${({ invalid }) => invalid && 'red'};
//   }

//   input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${({ invalid }) => invalid ? 'red' : '#ccc'};
//     background-color: ${({ invalid }) => invalid && '#e1c5d8'};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;

//     &:focus {
//       outline: none;
//       background: #fad0ec;
//       border-color: #8b005d;
//     }
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valid, setValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!valid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
