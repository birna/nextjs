"use client";
import { useEffect, useRef, useState } from "react";
import Error from "../../components/MsgError/MsgError";
import styles from './MegaSena.module.css';
import BolinhasMegaSena from '../../components/BolinhasMegaSena/BolinhasMegaSena';

export default function Contador() {
    const [valor, setValor] = useState('');
    const [numeros, setNumeros] = useState<number[]>([]);
    const [msg, setMsg] = useState('');

    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleChange = (e) => {
        let value = e.target.value;
    
        if (value.length > 2) {
            value = value.slice(0, 2);
        }

        if (!/^\d*$/.test(value)) {
            setValor(value);
            setMsg("Digite apenas números");
            return;
        }
    
        if (Number(value) < 6 || Number(value) > 20) {
            setValor(value);
            setMsg("Você pode gerar entre 6 e 20 números para a Mega Sena. Por favor, insira um número dentro desse intervalo.");
            return;
        }

        setValor(value);
        setMsg('');
    };

    const recursiveNumber = (qtde: number = 6, numbers: number[] = []): number[] => {
        if (numbers.length === qtde) {
            return numbers;
        }
    
        const randomNumber = Math.floor(Math.random() * 60) + 1;
        if (!numbers.includes(randomNumber)) {
            return recursiveNumber(qtde, [...numbers, randomNumber]);
        }
    
        return recursiveNumber(qtde, numbers);
    };
    
    function gerarNumeros() {
        if (!msg && valor) {
            
            const qtde = parseInt(valor, 10)
            setNumeros(recursiveNumber(qtde))
        }
        inputRef.current?.focus()
    }



    return (
        <div className={styles.megasena}>
            <div className={styles.inputContainer}>
                <input
                    ref={inputRef}
                    className={styles.input}
                    type="text"
                    value={valor}
                    onChange={handleChange}
                />
                <button className={styles.botoes} onClick={gerarNumeros}>
                    Gerar Números
                </button>
            </div>
            
            {msg && <Error msg={msg} />}
            {!msg && <BolinhasMegaSena numeros={numeros} cor="#28a745" espelhoOrdenado={true} />}
        </div>
    );
}