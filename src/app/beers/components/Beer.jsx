'use client';
import { useState } from "react";

import "./beers.css";


export default function Beer({ beer }) {

    const [message, setMessage] = useState("");
    const [quantity, setQuantity] = useState(0);
    const handleBuy = () => {
        if (quantity > 0) {
            setMessage(`has Comprado ${quantity} unidades de ${beer.name}`);
            setTimeout(() => {
                setMessage("");
            }, 3000);
            setQuantity(0);
            return;
        }

        else {
            setMessage("debes seleccionar al menos una unidad");
            setTimeout(() => {
                setMessage("");
            }, 3000);
            return;
        }
    };

    const handlePlus = (handler) => {
        console.log("plus");

        if (handler === "plus") {
            setQuantity(quantity + 1);
        } else if (handler === "minus") {
            if (quantity > 0) {
                setQuantity(quantity - 1);
            }
        }
        console.log(quantity);
    };

    return (
        <div className="beer-card">
            <div className="beer-image-container">
                <img
                    src={beer.label}
                    alt={`Etiqueta de ${beer.name}`}
                    className="beer-image">

                </img>

            </div>
            <div className="beer-info">
                <h3 className="beer-name">{beer.name}</h3>
                <div>
                    <p className="beer-details"><span>tipo</span>: {beer.type}</p>
                    <p className="beer-details"><span>ABV:</span>{beer.abv}%</p>
                </div>
                <div className="quantity-control">
                    <span className="quantity-label">Cantidad:</span>
                    <button onClick={() => handlePlus("minus")} className="quantity-button quantity-button-left">-</button>
                    <span className="quantity-value">{quantity}</span>
                    <button onClick={() => handlePlus("plus")} className="quantity-button quantity-button-right">+</button>
                </div>
                <button onClick={handleBuy} className="buy-button">Comprar</button>

                {/* mensaje de confirmacion */}
                {message &&
                    (<div className="success-message">
                        {message}
                    </div>)}





            </div>

        </div >


    )
}