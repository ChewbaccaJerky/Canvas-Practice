
// random position
export const randomPosition = () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    return {x: x, y: y};
};

// random color
export const randomColor = (COLOR_ARRAY) => {
    const idx = Math.floor(Math.random() * COLOR_ARRAY.length);
    return COLOR_ARRAY[idx];
};

// random number by range
export const randomIntFromRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}