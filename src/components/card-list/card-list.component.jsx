import React from "react";
import { Cart } from "../card/card.component";
import './card-list.styles.css'



export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Cart key={monster.id} monster={monster} />
        ))}
    </div>
);