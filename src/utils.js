export const trigger = (func, ...args) =>
    isFunction(func) ? func(...args) : func

export const areSameParity = (n1, n2) => !((n1 + n2) % 2)

export const match = (v, switchObject) => {
    if (switchObject[v]) return switchObject[v]
    return switchObject["default"]
}

export const identity = v => v

const isTypeof = type => v => typeof v === type

const isString = isTypeof("string")
const isFunction = isTypeof("function")

export const cn = (...classes) =>
    classes.filter(identity).filter(isString).join(" ")
