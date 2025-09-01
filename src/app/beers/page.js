import BeerList from "./components/BeerList";
import { beers } from "../data/mocs";

export default function BeersPage() {
    // TODO: Llamar a la API: https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/src/data/Beers.json

    return (

        <BeerList beers={beers} />

    );
}