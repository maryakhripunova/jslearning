exports.profit = (bToC, C2D, D2B) => {
    let C = bToC - C2D;
    //доход компании В
    let B = 0.25 * C - bToC + D2B;
    let A = 0.5 * B + 0.5 * C;
    return A
}