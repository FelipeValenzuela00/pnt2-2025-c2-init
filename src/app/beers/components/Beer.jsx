'use client';
import { useState } from "react";
import "./beers.css";

export default function Beer({ beer }) {
    const [quantity, setQuantity] = useState(0);
    const [message, setMessage] = useState("");

    const handlerPlus = () => {
        setQuantity(quantity + 1);
    }

    // TODO implementar handlerMinus
    // implementarlo con un solo handler
    // validar que no pueda comprar 0 unidades.
    // mejorar la leyenda de Has comprado.... con una unidad

    const handleBuy = () => {
        setMessage(`Has comprado ${quantity} unidades de ${beer.name}`);
        setTimeout(() => setMessage(''), 3000);
    }

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
                {/* Control de cantidad */}
                <div className="quantity-control">
                    <span className="quantity-label">Cantidad:</span>
                    <button className="quantity-button quantity-button-left">-</button>
                    <span className="quantity-display">{quantity}</span>
                    <button onClick={handlerPlus} className="quantity-button quantity-button-right">+</button>
                </div>

                {/* botón de compra */}
                <button onClick={handleBuy} className="buy-button">Comprar</button>

                {/* Mensaje de confirmación  */}
                {
                    message &&
                    (<div className="success-message">
                        {message}
                    </div>)
                }
            </div>

        </div >


    )
}