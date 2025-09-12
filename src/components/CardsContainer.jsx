import { Cards } from "./Cards"
import data from "../data/data.json"

export const CardsContainer = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
        {
            data.map(element => (
            <Cards
             key={element.name}
             {...element}
            />))
            
        }
    </div>
  )
}
