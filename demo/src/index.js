import React from "react"
import { render } from "react-dom"

import { HamburgeXpress } from "../../src"

const Demo = () => {

    return (
        <div>
            hi all
            <HamburgeXpress />
        </div>
    )
}

export default Demo

render(<Demo />, document.querySelector("#demo"))
