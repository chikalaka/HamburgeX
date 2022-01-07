import React, { useState } from "react"
import HamburgeX from "./HamburgeX"
import { trigger } from "./utils"

const HamburgeXpress = ({ onClick, ...props }) => {
    const [isOpen, setIsOpen] = useState(true)
    const innerOnClick = isOpen => {
        setIsOpen(!isOpen)
        trigger(onClick, isOpen)
    }

    return <HamburgeX isOpen={isOpen} onClick={innerOnClick} {...props} />
}

export default HamburgeXpress
