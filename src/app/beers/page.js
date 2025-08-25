import BeerList from "./components/BeerList";
import { beers } from "../data/mocs";

export default function BeersPage() {
    //TODO : obtener las cervezas desde un API
    return (

        <BeerList beers={beers} />

    );
}