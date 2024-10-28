import '../styles/ResultModal.css'

export default function ResultModal({onMenuButtonClick}) {
    return (
    <div className="result-modal">
        <div className="result-modal__body">
            <h1>Все плитки перевёрнуты!</h1>
            <button className="result-modal__button" onClick={onMenuButtonClick}>Выйти</button>
        </div>
    </div>
    )
}