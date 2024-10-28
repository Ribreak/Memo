export default function generateTiles (numOfTiles) {
    let generatedTiles = [];
    let arrOfImages = spreadImages(numOfTiles);
    let currentPair = 0;
    for (let i = 0; i < numOfTiles; i++) {
        if (i % 2 === 0) {
            currentPair++;
        }
        generatedTiles.push({
            id: i, 
            pair: currentPair, 
            isFlipped: false,
            image: `/images/${arrOfImages[currentPair - 1]}.jpg`
        });
    }
    generatedTiles = generatedTiles.sort(() => Math.random() - 0.5);
    for (let i = 0; i < generatedTiles.length; i++) console.log(generatedTiles[i].pair);
    return generatedTiles;
}

function spreadImages (numOfTiles) {
    const numOfPairs =  numOfTiles / 2; 
    let arrOfImages = [...Array(16).keys().map(i => i + 1)];
    arrOfImages = arrOfImages.sort(() => Math.random() - 0.5);
    let newarr = arrOfImages.slice(0, numOfPairs);
    console.log(newarr);
    return newarr;
}
