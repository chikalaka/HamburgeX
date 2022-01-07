const trigger = (func, ...params) =>
    typeof func === "function" && func(...params)

export { trigger }
