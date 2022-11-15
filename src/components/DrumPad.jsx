import { useState } from "react"
// import { Audio } from "./Audio"

export const DrumPad = ({id, children}) => {
    const [activePad, setActivePad] = useState()
    
    const handleClick = (e) => {
        setActivePad(id)
        const audio = e.target.children[0]
        audio.play()
        console.log(id)
    }
    
    return (
        <div className="drum-pad" id={id} onClick={handleClick} key={id}>
            {children}
        </div>
    )
}