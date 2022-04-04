import { createContext } from "react"

export const AboutContext= createContext();

function AboutContextProvider({children}){
const about= {
    Name:"Yahaya Abdul Raqeeb",
    Bio:"Young creative and innovative minded guy",
    Hobbies:["Video games", "Cartoons","Football", "Disturbing"]
}



return(


    <AboutContext.Provider value={{about}}>
    {children}
    </AboutContext.Provider>
  )
}

export default AboutContextProvider