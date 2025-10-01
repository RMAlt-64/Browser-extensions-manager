
import { Buttons } from "./Buttons"



export const Filters = () => {
  
  
  return (
    <div className="mb-6 md:flex justify-between">
      <h2 className="dark:text-Neutral-0 text-center text-[34px] font-bold mb-4">Extensions List</h2>
      <div className="flex flex-row justify-center">
        <Buttons>All</Buttons>
        <Buttons>Active</Buttons>
        <Buttons>Inactive</Buttons>
      </div>
    </div>
  )
}