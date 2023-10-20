import css from "./Statictics.module.css"

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return  (
        <>  
            <h1 className={css.title}>Statistics</h1>
                
            <ul className={css.options}>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive Feedback: {positivePercentage}%</li>
            </ul>
        </>
    )
}