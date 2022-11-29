export default function List(props) {
    const { cartItems, onRemove, onClear } = props;
    const totalGoals = cartItems.reduce((a, c) => a + c.goals, 0);
    const totalAge = cartItems.reduce((a, c) => (a + c.age) ,0);
    const averageAge = (totalAge/cartItems.length).toFixed(2)
    return <aside className='block col-1'>
        <h2>List</h2>
        <div>
            {cartItems.length === 0 && <div id='name'>Cart is Empty</div>}
            {cartItems.map((item) => (
                <div key={item.id} className='row'>
                    <div className='col-1' id='name'>{item.name}</div>
                    <div className='col-1'>
                        <button onClick={() => onRemove(item)} className='remove'>Remove</button>
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                <hr/>
                <div className='row'>
                    <div className='col-2' id='name'>Total Goals</div>
                    <div className='col-1 text-right' id='name'>{totalGoals} goals</div>
                </div>
                <div className='row'>
                    <div className='col-2' id='name'>Average Age</div>
                    <div className='col-1' id='name'>{averageAge} years</div>
                </div>
                    <button onClick={() => onClear()} className='clear'>Clear Cart</button>
                </>
            )}
        </div>
    </aside>

}