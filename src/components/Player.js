export default function Player(props) {
    const { player, onAdd, onRemove, item, cartItems } = props;

    const includesPlayer = () => {
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === player.id) return true;
        }
        return false;
    }


    return (
        <div className='card'>
            <img className='small' src={player.image} alt={player.name} />
            <h3>{player.name}</h3>
            <div>Age: {player.age}</div>
            <div>Goals: {player.goals}</div>
            <div>
                <div>
                    {includesPlayer() ? <button style={{backgroundColor: "red"}}onClick={() => onRemove(player)}>Remove</button> : <button onClick={() => onAdd(player)}>Add to List</button>}
                </div>
            </div>
        </div>
    );
}