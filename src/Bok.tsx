import React from 'react';
import {Knapp} from './Knapp'

type Props = {
    bok: {
        id: number;
        img: string;
        tittel: string;
        forfatter: string;
    }
}


export const Bok: React.FC<Props>= (props) => {
// const Bok = (props: { bok: { id: number; img: string; tittel: string; forfatter?: string; }; }) => {

    const {img, tittel, forfatter } = props.bok
    return (
        <div>
            <img src={img} alt=''/>
            <p>{tittel}</p>
            <p>{forfatter}</p>
            <Knapp />
        </div>
    )
}

