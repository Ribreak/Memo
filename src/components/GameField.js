import {useState, useEffect, useCallback} from 'react';
import Tile from './Tile.js'
import Timer from './Timer.js'
import "../styles/GameField.css"
import ResultModal from './ResultModal';

export default function GameField ({generatedTiles, onClickEnd}) {
    const [firstTile, setFirstTile] = useState(null);
    const [secondTile, setSecondTile] = useState(null);
    const [tiles, setTiles] = useState(generatedTiles);
    const [flippedPairs, setFlippedPairs] = useState(0);
    const [wait, setWait] = useState(false);
    const [timeStarted, setTimeStarted] = useState(true);
    const [gameFinished, setGameFinished] = useState(false);

    useEffect(() => {
        if (flippedPairs === generatedTiles.length / 2) {
            console.log("Win-win");
            setTimeStarted(false);
            setGameFinished(true);
        }
    }, [flippedPairs, generatedTiles.length])

    function handleTileClick(tileId) {
        if (wait) return;
        else if (firstTile) {
            setFlippedStatus(tileId);
            setSecondTile(tiles.find(tile => tile.id === tileId));
        } else {
            setFirstTile(tiles.find(tile => tile.id === tileId));
            setFlippedStatus(tileId);
        }
    }

    const compareTiles = useCallback(() => {
        if (firstTile.pair === secondTile.pair) {
            setFlippedPairs(flippedPairs + 1);
            setFirstTile(null);
            setSecondTile(null);
        } else {
            setWait(true);
            setTimeout(() => {
                setTiles(tiles.map(tile => {
                    if (tile.id === firstTile.id || tile.id === secondTile.id) {
                        return {
                            ...tile,
                            isFlipped: !tile.isFlipped
                        }
                    }
                    else return tile;
                }))
                setFirstTile(null);
                setSecondTile(null);
                setWait(false);
            }, 1000)
        }
    }, [firstTile, secondTile, tiles, flippedPairs])

    function setFlippedStatus (tileToFlip) {
        console.log("Setting tile: ", tileToFlip);
        setTiles(tiles.map(tile => {
            if (tile.id === tileToFlip) {
                return {
                    ...tile,
                    isFlipped: !tile.isFlipped
                }
            }
            else return tile;
        }))
    } 

    useEffect(() => {
        if (secondTile) compareTiles();
    }, [secondTile, compareTiles]);

    const tileList = tiles.map((tile) => {
        return (
            <Tile key={tile.id} tileId={tile.id} image={tile.image} onClick={handleTileClick} status={tile.isFlipped ? "flipped" : "unflipped"} numberOfTiles={generatedTiles.length} />
        );
    })

    return (
        <>
            {gameFinished && <ResultModal onMenuButtonClick={onClickEnd} />}
            <div className="game-field">
                <header className="game-field__header">
                    <Timer className="game-field__timer" isRunning={timeStarted} />
                    <button className='game-field__button-end' onClick={onClickEnd}>Выйти</button>
                </header>
                <div className={`game-field__tile-grid ${generatedTiles.length === 32 ? "big-grid" : ""}`}>{tileList}</div>
            </div>
        </>
    )
}
