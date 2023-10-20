import css from "./Section.module.css"

export default function Section({ title , children}) {
    return (
        <div className={css.mainContainer}>
        <h1 className={css.title}>{title}</h1>
        {children}</div>
    )
} 