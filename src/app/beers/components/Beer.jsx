import "./beers.css";

export default function Beer({ beer }) {
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

            </div>

        </div>


    )
}