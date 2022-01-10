import React, { useState } from "react"
import HamburgeX from "./HamburgeX"
import { trigger } from "./utils"

const HamburgeXpress = ({ onClick, ...props }) => {
    const [isOpen, setIsOpen] = useState(true)
    const _onClick = isOpen => {
        setIsOpen(!isOpen)
        trigger(onClick, isOpen)
    }

    return <HamburgeX isOpen={isOpen} onClick={_onClick} {...props} />
}

export default HamburgeXpress
