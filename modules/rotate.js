// https://jsfiddle.net/skibulk/uhs4e04v/ 
export function rotate(t, a, n, r, h) { var o = Math.PI / 180 * h, M = Math.cos(o), c = Math.sin(o), e = n - t, i = r - a; return { x: M * e + c * i + t, y: M * i - c * e + a } }