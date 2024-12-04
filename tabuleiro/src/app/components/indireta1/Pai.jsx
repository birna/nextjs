"use client";
import Filhos from "./Filhos";

export default function Pai(props) {
    function falarComigo(param1, param2, param3) {
        console.log(param1, param2, param3)
    }
    
    return (
        <div>
            <Filhos funcao={falarComigo}/>
        </div>
    )
}