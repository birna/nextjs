"use client"
import { useSearchParams, useParams, useRouter } from 'next/navigation';


// http://localhost:3000/pages/80?foo=bar&teste=teste
export default function teste() {
    const router = useRouter()
    const params = useParams(); // Retorna os parâmetros da URL
    const searchParams = useSearchParams();
    const foo = searchParams.get('foo'); // Exemplo: ?foo=bar => 'bar'
    const testando = searchParams.get('teste'); // Exemplo: ?teste=teste => 'teste'
    
    
    const slug = params.id;   // Exemplo: /post/[slug] => { slug: 'meu-post' }
    console.log("ROUTER: ", router)
    console.log("searchParams: ", searchParams, "//////", foo, "----",testando)
    console.log("PARAMS: ", params, "/////", slug)
    

    return (
        <>
            <h1>Rota Dinamica</h1>
            {/* <h2>{}</h2> */}
        </>
    )
}