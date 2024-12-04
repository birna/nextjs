import styles from './MsgError.module.css';

export default function MsgError(props) {
    return (
        <span className={styles.msgerror}>
            {props.msg}
        </span>
    )
}

