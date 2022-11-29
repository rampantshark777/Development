export default function Player(props) {
    const { player, onAdd, onRemove, item } = props;
    return (
        <div className='card'>
            <img className='small' src={player.image} alt={player.name} />
            <h3>{player.name}</h3>
            <div>Age: {player.age}</div>
            <div>Goals: {player.goals}</div>
            <div>
                <div>
                    <button onClick={() => onAdd(player)}>Add to List</button>
                </div>
            </div>
        </div>
    );
}