import styles from './Subdivisao.module.css'

export default function Subdivisao(props) {
    return (
        <div
            style={{
                backgroundColor: props.verde ? "#42C920" : "#000"
            }} 
            className={styles.subdivisao}></div>
    )
}