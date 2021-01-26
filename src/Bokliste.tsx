import React from "react";
import {bøker} from './bøker'
import {Bok} from './Bok'

function Bokliste (){
    return(
        <div>
            {bøker.map(bok => {
                return <Bok key={bok.id} bok={bok}/>
            } )}
        </div>
    )
}
export default Bokliste
