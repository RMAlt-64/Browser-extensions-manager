import {Buttons} from "../components/Buttons";
import 'rsuite/Toggle/styles/index.css';
import { Toggle } from 'rsuite';


export const Cards = ({logo, name, description, isActive}) => {
  return (
    <div className="bg-Neutral-0 rounded-[13px] p-4 shadow-sm dark:bg-Neutral-800 dark:border border-Neutral-600">
        
        <div className="flex mb-15 items-start gap-4 h-[68px]">
            <img src={logo} alt="Logo" className="" />
        
            <div>
                <h2 className="font-bold text-[1.25rem] mb-2 dark:text-Neutral-100">{name}</h2>
                <p className="text-neutral-600 text-[15px] w-auto dark:text-Neutral-300">{description}</p>  
            </div>
        </div>
        <div className="flex justify-between items-center">
            <Buttons textSmall>Remove</Buttons>
            <Toggle color="red" checked={isActive}/>
        </div>
       
    </div>
  )
}
