import React from "react"
import { trigger } from "./utils"

const getStyles = ({ color, size }) => {
    return {
        line: {
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            background: "black" || color,
            height: 5,
            width: 50,
            borderRadius: 100,
            margin: "10px 0"
        },
        top: {
            transform: "translate(0, 15px) rotate(135deg)"
        },
        mid: {
            transform: "rotate(-405deg)"
        },
        bottom: {
            transform: "translate(0, -15px) rotate(-135deg)"
        }
    }
}

// classes = {topLine, midLine, bottomLine}
// size = 'small' | 'medium' | 'large' | number

// lineType = top, mid, bottom
const Line = ({ isOpen, lineType, color, size, classes }) => {
    const styles = getStyles({ color, size })
    let lineStyles = styles.line
    if (!isOpen) lineStyles = { ...lineStyles, ...styles[lineType] }

    return <div style={lineStyles} />
}

const getLineComp =
    ({ ...firstProps }) =>
    ({ ...secondProps }) =>
        <Line {...firstProps} {...secondProps} />

const HamburgeX = ({
    onClick,
    onClose,
    onOpen,
    isOpen,
    size,
    classes,
    className,
    color
}) => {
    const clickHandler = () => {
        isOpen ? trigger(onClose) : trigger(onOpen)
        trigger(onClick, isOpen)
    }

    const lineProps = { isOpen, color, size, classes }

    return (
        <div onClick={clickHandler} className={className}>
            <Line {...lineProps} lineType={"top"} />
            <Line {...lineProps} lineType={"mid"} />
            <Line {...lineProps} lineType={"bottom"} />
        </div>
    )
}

export default HamburgeX
