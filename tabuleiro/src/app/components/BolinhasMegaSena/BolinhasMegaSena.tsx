import styles from './BolinhasMegaSena.module.css';

export default function BolinhasMegaSena(props) {
    const numeros = props.espelhoOrdenado ? [...props.numeros].sort((a, b) => a - b) : props.numeros;

    return (
        <div className={styles.container}>
            {numeros.map((numero, index) => (
                <div
                    key={index}
                    className={styles.bolinha}
                    style={{ backgroundColor: props.cor }}
                >
                    {numero}
                </div>
            ))}
        </div>
    );
}