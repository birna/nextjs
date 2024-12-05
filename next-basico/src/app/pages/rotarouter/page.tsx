"use client";

import { useRouter } from "next/navigation";
import styles from "./RotaRouter.module.css";

export default function RotasRouter() {
    const router = useRouter();

    // Constante com os paths armazenados
    const paths: { [key: string]: string } = {
        id1: "/pages/1?foo=G1&teste=T1",
        id2: "/pages/2?foo=G2&teste=T2",
        id3: "/pages/3?foo=G3&teste=T3",
    };

    // Constante para o evento de navegação
    const handleNavigation = (pathKey: string) => {
        // Resolve o path usando a chave
        const path = paths[pathKey];
        if (path) {
            router.push(path);
        } else {
            console.error("Path não encontrado!");
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <button
                className={`${styles.botoes} ${styles.verde}`}
                onClick={() => handleNavigation("id1")}
            >
                Rota: Id 1
            </button>
            <button
                className={`${styles.botoes} ${styles.amarelo}`}
                onClick={() => handleNavigation("id2")}
            >
                Rota: Id 2
            </button>
            <button
                className={`${styles.botoes} ${styles.azul}`}
                onClick={() => handleNavigation("id3")}
            >
                Rota: Id 3
            </button>
        </div>
    );
}

// http://localhost:3000/pages/80?foo=bar&teste=teste