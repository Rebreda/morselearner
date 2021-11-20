export function transformData(data) {
    let transformedData = {}
    Object.entries(data).forEach(d => {
        const letter = d[0] //e.g. "A"
        const vals = d[1] // e.g. {type:"letter", ...}
        vals.value = letter
        transformedData[letter] = vals
    })
    return transformedData
}