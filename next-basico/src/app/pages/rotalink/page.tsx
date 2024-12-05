import Link from "next/link";


export default function Rotas() {
    return (
        <div>
            <h1>Rotas Index</h1>
            <ul>
                <li>
                    <Link href="/pages/90?foo=bar1&teste=testando">
                        Indo para [ID] 90
                    </Link>
                </li>
                <li>
                    <Link href="/pages/100?foo=Cascavel1&teste=Outra Variavel">
                        Indo para [ID] 100
                    </Link>
                </li>
            </ul>
        </div>
    );
}

// http://localhost:3000/pages/80?foo=bar&teste=teste