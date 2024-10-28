import "../styles/Menu.css";
import {useState} from 'react';

export default function Menu (props) {

    return (
        <div className="menu">
            <h1 className="menu__title">Добро пожаловать в Memo!</h1>
            <div className="menu__settings settings">
                <h2 className="settings__title">Выберите количество плиток</h2>
                <div className="settings__list">
                    <input id="radio12" type="radio" name="numberOfTiles" value="12" defaultChecked={props.checkedOption === 12} onChange={props.onRadioChange} /> 
                    <label htmlFor="radio12">12</label> 

                    <input id="radio16" type="radio" name="numberOfTiles" value="16" defaultChecked={props.checkedOption === 16} onChange={props.onRadioChange} /> 
                    <label htmlFor="radio16">16</label>

                    <input id="radio32" type="radio" name="numberOfTiles" value="32" defaultChecked={props.checkedOption === 32} onChange={props.onRadioChange} /> 
                    <label htmlFor="radio32">32</label>
                </div>
            </div>
            <button className="menu__start-button" onClick={props.onClickStart}>Начать игру</button>
        </div>
    )
}