const dist = (x1, y1, x2, y2) => {
    let a = x1 - x2
    let b = y1 - y2

    return Math.sqrt( a*a + b*b )
}

const collideCircle = (x1, y1, d1, x2, y2, d2) => {
    if( dist(x1, y1, x2, y2) <= ( (d1/2) + (d2/2) ) ){
        return true
    }

    return false
}

export default collideCircle