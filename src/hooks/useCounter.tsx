import { useState } from "react"

export const useCounter = (initalVAlue:number=1) => {
  
const [counter, setcounter] = useState(initalVAlue)

    const Increment = () => {
    setcounter(counter +1)
    }
    const Decrement = () => {
    if(counter <= 1) return ;
    setcounter(counter -1)
}

    return {
        counter,
        Increment,
        Decrement
    }
}
