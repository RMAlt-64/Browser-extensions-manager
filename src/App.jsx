

import { CardsContainer } from "./components/CardsContainer"
import { Filters } from "./components/Filters"
import {Header} from "./components/Header"



function App() {
  

  return ( 
    
      <main className="light-gradient dark:dark-gradient min-h-screen flex flex-col items-center">
        <section className="w-[343px] my-6 md:w-[632px] xl:w-[1170px]">
          <Header/>
          <Filters/>
          <CardsContainer/>
        </section>
      </main>
   
  )
}

export default App
