import Subdivisao from "../Subdivisao/Subdivisao"
import styles from "./Linha.module.css"

export default function Linha(props) {
    return (
        <div className={styles.linha}>
            <Subdivisao verde={!props.preta} />
            <Subdivisao verde={props.preta} />
            <Subdivisao verde={!props.preta} />
            <Subdivisao verde={props.preta} />
            <Subdivisao verde={!props.preta} />
            <Subdivisao verde={props.preta} />
            <Subdivisao verde={!props.preta} />
            <Subdivisao verde={props.preta} />
        </div>
        
    )
}