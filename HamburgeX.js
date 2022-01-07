const trigger = (func, ...params) =>
    typeof func === "function" && func(...params)

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

// types: all the regular props except for the isOpen
const HamburgeXpress = ({ onClick, ...props }) => {
    const [isOpen, setIsOpen] = useState()
    const innerOnClick = isOpen => {
        setIsOpen(!isOpen)
        trigger(onClick, isOpen)
    }

    return <HamburgeX isOpen={isOpen} onClick={innerOnClick} {...props} />
}

// lineType = top, mid, bottom
const Line = ({ isOpen, lineType, color, size, classes }) => {
    const styles = getStyles({ color, size })
    const lineStyles = styles.line
    if(isOpen) lineStyles = {...lineStyles, ...styles[lineType]}

    return <div styles={lineStyles} />
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

    // const LineComp = getLineComp({ isOpen, color, size, classes })

    return (
        <div onClick={clickHandler} className={className}>
            {/* <LineComp lineType={"top"} /> */}
            <Line isOpen={isOpen} lineType={"top"} color={color} />
            <Line isOpen={isOpen} lineType={"mid"} color={color} />
            <Line isOpen={isOpen} lineType={"bootom"} color={color} />
        </div>
    )
}
