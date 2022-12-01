import Header from './components/Header'
import Main from './components/Main'
import List from './components/List'
import './App.css';
import data from './data'
import {useState} from 'react';

function App() {
    const { players } = data;
    const [viewingPlayers, setViewingPlayers] = useState(players);
    const [cartItems, setCartItems] = useState([]);
    const [isSorted, setSorted] = useState(false);
    const [status, setStatus] = useState(0);
    const [isOld, setIsOld] = useState(0);
    const [isReset, setReset] = useState(false);

    const applyStatusFilter = (num) => {
        if (status === num) {
            setStatus(0);
        }
        else {
            setStatus(num)
        }
        setReset(false)
    }
    const applyAgeFilter = (num) => {
        if (isOld === num) {
            setIsOld(0);
        }
        else {
            setIsOld(num)
        }
        setReset(false)
    }

    const onAdd = (player) => {
        const exist = cartItems.find((current) => current.id === player.id);
        if (!exist) {
            const newCartItems = [...cartItems, { ...player}]
            setCartItems(newCartItems);
        }
    }
    const onRemove = (player) => {
        const exist = cartItems.find((current) => current.id === player.id);
        if (exist) {
            const newCartItems = cartItems.filter((current) => current.id !== player.id);
            setCartItems(newCartItems);
        }
    }

    const onClear = () => {
        const newCartItems = [];
        setCartItems(newCartItems);
    }

    const sortGoals = () => {
        if (isSorted) {
            setSorted(false);
        }
        else {
            const newViewingPlayers = viewingPlayers.sort((a,b) => b.goals - a.goals);
            setViewingPlayers(newViewingPlayers)
            setSorted(true);
        }
        setReset(false)
    }

    const onReset = () => {
        setReset(true);
        setStatus(0);
        setIsOld(0);
        const newViewingPlayers = viewingPlayers.sort((a,b) => a.id - b.id);
        setViewingPlayers(newViewingPlayers);
        setSorted(false);
    }
  return (
    <div className="App">
        <h1>GOALS GOALS GOALS</h1>
      <div className='row'>
          <Main cartItems={cartItems} status={status} isOld={isOld} applyStatusFilter={applyStatusFilter} applyAgeFilter={applyAgeFilter} onAdd={onAdd} onRemove={onRemove} sortGoals={sortGoals} isSorted={isSorted} onReset={onReset} reset={isReset} players={viewingPlayers}/>
          <List cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onClear={onClear}/>
      </div>
    </div>
  );
}

export default App;
