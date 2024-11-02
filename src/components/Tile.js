import "../styles/Tile.css"

export default function Tile (props) {
    const {onClick, tileId, status, image, numberOfTiles} = props;
    return (
        <div className={`tile ${status} tile${numberOfTiles}`} 
            onClick={() => onClick(tileId)} 
            onDragStart={(e) => e.preventDefault()}>
            <div className="front">
            </div>
            <div className="back">
                <img className="tile__image" src={image} alt="Tile" />
            </div>
        </div>
    )
}