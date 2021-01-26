import React, {useState} from "react";


export const Knapp = () => {
    let [count, setCount] = useState <number>(0)

    const handleClick = () => {
        setCount(count+1)
    }

    return (
        <div>
            <button type={"button"} onClick={handleClick}>Klikk</button>
            <p>{count}</p>
        </div>
    )
}
