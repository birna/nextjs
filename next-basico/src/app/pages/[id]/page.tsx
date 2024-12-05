"use client"
import { useSearchParams, useParams, useRouter } from 'next/navigation';


// http://localhost:3000/pages/80?foo=bar&teste=teste
export default function teste() {
    const router = useRouter()
    
    const params = useParams(); // Retorna os parâmetros da URL
    const id = params.id;   // Exemplo: /post/[id] => { id: '80' }
    
    const searchParams = useSearchParams();
    const foo = searchParams.get('foo'); // Exemplo: ?foo=bar => 'bar'
    const testando = searchParams.get('teste'); // Exemplo: ?teste=teste => 'teste'
    
    return (
        <>
            <h1>Rota Dinamica</h1>
            <div>
                <h2>Params</h2>
                <span>ID: {id}</span>
            </div>
            <div>
                <h2>Search Params</h2>
                <span>Foo: {foo}</span>
                <br />
                <span>Testando: {testando}</span>
            </div>
        </>
    )
}