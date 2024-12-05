import Padrao, { Comp1 as Blabla, Comp2, Comp4, Comp5} 
from "../../components/Componentes/Componentes";

export default function exportados() {
    return (
        <div>
            <Blabla />
            <Comp2 />
            <Padrao />
            <Comp4 />
            <Comp5 nome="Guilherme" sobrenome="Urbinatti" sexo="M" pessoa />
        </div>
    )
}