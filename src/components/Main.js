import Player from './Player';

export default function Main(props) {
    const {players, onAdd, onRemove, cartItems, isOld, status, sortGoals, isSorted, applyStatusFilter, applyAgeFilter, onReset, reset} = props;

    return <div className='block col-2'>
        <h2>Players</h2>
        <button style={{backgroundColor: status===1 ? "black" : undefined, color: status===1 ? "white" : undefined}} onClick={() => applyStatusFilter(1)} className='filter'>Retired</button>
        <button style={{backgroundColor: status===2 ? "black" : undefined, color: status===2 ? "white" : undefined}} onClick={() => applyStatusFilter(2)} className='filter' id='leftFilter'>Active</button>
        <button style={{backgroundColor: isOld===1 ? "black" : undefined, color: isOld===1 ? "white" : undefined}} onClick={() => applyAgeFilter(1)} className='filter'>Over 30</button>
        <button style={{backgroundColor: isOld===2 ? "black" : undefined, color: isOld===2 ? "white" : undefined}} onClick={() => applyAgeFilter(2)} className='filter'>30 and Under</button>
        <button style={{backgroundColor: isSorted ? "black" : undefined, color: isSorted ? "white" : undefined}} onClick={() => sortGoals()} className='filter'>Sort By Goals Scored</button>
        <button onClick={() => onReset()} className='filter'>Reset Filters and Sorting</button>
        <div className='row'>
            {players.map((player) => {
                let show = true;
                if (status === 2 && player.retired) {
                    show = false;
                }

                if (status === 1 && !player.retired) {
                    show = false;
                }

                if (isOld === 1 && player.age < 31) {
                    show = false;
                }

                if (isOld === 2 && player.age > 30) {
                    show = false;
                }

                if(reset) {
                    show = true;
                }

                if (show) return (<Player
                    key={player.id}
                    player={player}
                    onAdd={onAdd}
                    onremove={onRemove}
                    item={cartItems.find((current) => current.id === player.id)}
                />)
                else return null
            })}
        </div>
    </div>;
}