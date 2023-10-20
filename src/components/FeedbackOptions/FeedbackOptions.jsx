import css from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
       
        <div className={css.container}>
        {options.map((option) => (
            <button key={option} type="button" className={css.button17} onClick={() => onLeaveFeedback(option)}>{option}</button>
        ))}</div>
    )
} 