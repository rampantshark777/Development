import Player from './Player';

export default function Main(props) {
    const {players, onAdd, onRemove, cartItems, retiredFilter, activeFilter, isActive, isRetired, oldFilter, youngFilter, isOld, isYoung, sortGoals, isSorted} = props;
    // const filter = document.getElementsByClassName('filter');
    // filter.addEventListener('click', function onClick() {
    //     filter.style.backgroundColor = 'black';
    //     filter.style.color= 'white';
    // });
    return <div className='block col-2'>
        <h2>Players</h2>
        <button style={{backgroundColor: isRetired ? "black" : undefined, color: isRetired ? "white" : undefined}} onClick={() => retiredFilter()} className='filter'>Retired</button>
        <button style={{backgroundColor: isActive ? "black" : undefined, color: isActive ? "white" : undefined}} onClick={() => activeFilter()} className='filter' id='leftFilter'>Active</button>
        <button style={{backgroundColor: isOld ? "black" : undefined, color: isOld ? "white" : undefined}} onClick={() => oldFilter()} className='filter'>Over 30</button>
        <button style={{backgroundColor: isYoung ? "black" : undefined, color: isYoung ? "white" : undefined}} onClick={() => youngFilter()} className='filter'>Under 31</button>
        <button style={{backgroundColor: isSorted ? "black" : undefined, color: isSorted ? "white" : undefined}} onClick={() => sortGoals()} className='filter'>Sort By Goals Scored</button>
        <div className='row'>
            {players.map((player) => (
                <Player
                key={player.id}
                player={player}
                onAdd={onAdd}
                onremove={onRemove}
                item={cartItems.find((current) => current.id === player.id)}
                />
                ))}
        </div>
    </div>;
}