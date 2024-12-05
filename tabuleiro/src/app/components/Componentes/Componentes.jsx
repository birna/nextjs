export default function teste() {
    return (
        <>
          <h2>Componente teste, nao precisa do mesmo nome onde importa</h2>
          <span> Motivo: Exporte Default / Padrao</span>
        </>
    )
}

export const Comp2 = function() {
    return <h2>Comp2 precisa ter o mesmo nome onde importa</h2>
}

export function Comp1() {
    return (
        <>
            <h3>Comp1 precista ter o mesmo nome onde importa e pode ter apelido com o AS</h3>
        </>
    )
}

export const Comp4 = () => <div><span> Arrow, return automatico </span></div>
export const Comp5 = props => <span> Arrow, com {JSON.stringify(props)}</span>