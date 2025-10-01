
import { Cards } from "./Cards"
import data from "../data/data.json"

import { useAppContext } from "../context/AppContext"


export const CardsContainer = () => {
  
  const { filter } = useAppContext();
  const { extensions, setExtensions } = useAppContext();
  
  const filteredData =
    (filter === "All"
      ? extensions
      : extensions.filter((item) => item.isActive.toString() === (filter === "Active" ? "true" : "false")));
  

  return (
   
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
          {
              filteredData.map(element => (
              <Cards
                key={element.name}
                {...element}
              />))
              
          }
      </div>
   
  )
}
