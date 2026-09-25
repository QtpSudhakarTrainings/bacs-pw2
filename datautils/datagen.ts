//generate Random between 1000 and 10000
export function getRandomNumber(nStart: number=10000, nEnd: number=100000) {
    return Math.floor(Math.random() * (nEnd - nStart)) + nStart;
}