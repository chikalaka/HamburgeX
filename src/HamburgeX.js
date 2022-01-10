import React from "react"
import { trigger, areSameParity, match } from "./utils"

const ULTIMATE_WIDTH_HEIGHT_RATIO = 0.71

const getSizes = size => {
    const width = 15 + 5 * size
    const lineHeight = Math.round(width / 7)

    const calcDependOnWidthAndLineHeight = width - 2 * lineHeight

    const height = areSameParity(lineHeight, calcDependOnWidthAndLineHeight)
        ? calcDependOnWidthAndLineHeight
        : (() => {
              const heightWidthRatio = calcDependOnWidthAndLineHeight / width
              const addition =
                  heightWidthRatio > ULTIMATE_WIDTH_HEIGHT_RATIO ? -1 : 1
              return calcDependOnWidthAndLineHeight + addition
          })()

    return {
        width,
        height,
        lineHeight
    }
}

const getStyles = ({ color, size = "medium", styles }) => {
    const _size = match(size, {
        small: 2,
        medium: 4,
        large: 6,
        default: size
    })

    const { width, height, lineHeight } = getSizes(_size)
    const translateY = Math.round((height - lineHeight) / 2)

    return {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            cursor: "pointer",
            width: width,
            height: height,
            padding: 5,
            ...styles?.container
        },
        line: {
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            background: color || "black",
            height: lineHeight,
            borderRadius: 100,
            ...styles?.line
        },
        top: {
            close: {
                transform: `translate(0, ${translateY}px) rotate(135deg)`,
                ...styles?.top?.close
            },
            open: { ...styles?.top?.open }
        },
        mid: {
            close: {
                transform: `rotate(-405deg)`,
                ...styles?.mid?.close
            },
            open: { ...styles?.mid?.open }
        },
        bottom: {
            close: {
                transform: `translate(0, ${-1 * translateY}px) rotate(-135deg)`,
                ...styles?.bottom?.close
            },
            open: { ...styles?.bottom?.open }
        }
    }
}

const Line = ({ isOpen, lineType, color, size, classes, styles }) => {
    const _styles = getStyles({ color, size, styles })
    let lineStyle = _styles.line
    const typeStyle = isOpen
        ? { ..._styles[lineType].open }
        : { ..._styles[lineType].close }
    const style = { ...lineStyle, ...typeStyle }

    return <div style={style} />
}

const HamburgeX = ({
    onClick,
    onClose,
    onOpen,
    isOpen,
    size,
    classes,
    styles,
    className,
    color
}) => {
    const clickHandler = () => {
        isOpen ? trigger(onClose) : trigger(onOpen)
        trigger(onClick, isOpen)
    }

    const lineProps = { isOpen, color, size, classes, styles }

    const containerStyle = getStyles({ size, styles }).container

    return (
        <div
            onClick={clickHandler}
            style={containerStyle}
            className={className}
        >
            <Line {...lineProps} lineType={"top"} />
            <Line {...lineProps} lineType={"mid"} />
            <Line {...lineProps} lineType={"bottom"} />
        </div>
    )
}

export default HamburgeX
