
import { useAppContext } from "../context/AppContext";



export const Buttons = ({ children, textSmall}) => {
   
    const { setFilter } = useAppContext();
    return (
            <div>
                <button onClick={() => setFilter(children)} className={`border-1
                px-5
                py-2
                bg-Neutral-0
                rounded-full 
                border-Neutral-300 
                hover:bg-Neutral-600 
                cursor-pointer 
                hover:text-Neutral-100
                dark:text-Neutral-0
                dark:bg-Neutral-800
                dark:hover:bg-Red-500
                mr-3
                ${textSmall ? "text-base" : "text-[1.25rem]" }`}>{children}</button>
            </div>
    )
}
