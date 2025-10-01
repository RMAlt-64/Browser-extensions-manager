import logoLight from "../assets/images/logoLight.svg"
import logoDark from "../assets/images/logoDark.svg"
import themeNight from "../assets/images/icon-moon.svg"
import themeLight from "../assets/images/icon-sun.svg"
import { useState } from "react"

export const Header = () => {
  const savedTheme = localStorage.getItem('theme');
  
  if (JSON.parse(savedTheme)) {
    document.documentElement.classList.add('dark')
  }
 
  const [isThemeDark, setIsThemeDark] = useState (JSON.parse(savedTheme));
    
  const handleClick = ()=>{
    
    const isChangetoDarkMode = document.documentElement.classList.toggle('dark');
    setIsThemeDark(isChangetoDarkMode);
    localStorage.setItem('theme', isChangetoDarkMode );
    

  }
  return (
    <div className='bg-Neutral-0 dark:bg-Neutral-700 flex justify-between h-[66px] px-3 py-2 rounded-[10px] items-center mb-6'>
        <img src={isThemeDark ? logoDark : logoLight } alt="Logo"/>
        <button className="
        bg-Neutral-200 size-[50px] 
        flex p-3 
        rounded-lg
        cursor-pointer
        hover:bg-Neutral-300
        dark:bg-Neutral-600
        dark:hover:bg-amber-400"><img src={isThemeDark ?  themeLight : themeNight} alt="Theme Light" onClick={handleClick} /> </button>
    </div>
  )
}
