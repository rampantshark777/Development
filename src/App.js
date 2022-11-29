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
    const [isRetiredFilter, setRetiredFilter] = useState(false);
    const [isActiveFilter, setActiveFilter] = useState(false);
    const [isOldFilter, setOldFilter] = useState(false);
    const [isYoungFilter, setYoungFilter] = useState(false);
    const [isSorted, setSorted] = useState(false);
    const onAdd = (player) => {
        const exist = cartItems.find((current) => current.id === player.id);
        if (!exist) {
            const newCartItems = [...cartItems, { ...player}]
            setCartItems(newCartItems);
            console.log(newCartItems)
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

    const retiredFilter = () => {
        if (isRetiredFilter) {
            setRetiredFilter(false);
            setViewingPlayers(players);
        } else {
            if (isActiveFilter) {
                setActiveFilter(false);
            }
            const newViewingPlayers = players.filter((current) => current.retired === true)
            setRetiredFilter(true);
            setViewingPlayers(newViewingPlayers);
        }

    }
    const activeFilter = () => {
        if (isActiveFilter) {
            setActiveFilter(false);
            setViewingPlayers(players);
        } else {
            if (isRetiredFilter) {
                setRetiredFilter(false);
            }
            const newViewingPlayers = players.filter((current) => current.retired === false)
            setActiveFilter(true);
            setViewingPlayers(newViewingPlayers);
        }
    }

    const oldFilter = () => {
        if (isOldFilter) {
            setOldFilter(false);
            setViewingPlayers(players);
        } else {
            if (isYoungFilter) {
                setYoungFilter(false);
            }
            const newViewingPlayers = players.filter((current) => current.age >= 31)
            setOldFilter(true);
            setViewingPlayers(newViewingPlayers);
        }

    }
    const youngFilter = () => {
        if (isYoungFilter) {
            setYoungFilter(false);
            setViewingPlayers(players);
        } else {
            if (isOldFilter) {
                setOldFilter(false);
            }
            const newViewingPlayers = players.filter((current) => current.age <= 30)
            setYoungFilter(true);
            setViewingPlayers(newViewingPlayers);
        }
    }

    const sortGoals = () => {
        if (isSorted) {
            setViewingPlayers(players);
            setSorted(false);
        }
        else {
            const newViewingPlayers = viewingPlayers.sort((a,b) => b.goals - a.goals);
            setViewingPlayers(newViewingPlayers);
            setSorted(true);
        }
    }
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}/>
      <div className='row'>
          <Main cartItems={cartItems} isActive={isActiveFilter} isRetired={isRetiredFilter} onAdd={onAdd} onRemove={onRemove} retiredFilter={retiredFilter} activeFilter={activeFilter} oldFilter={oldFilter} youngFilter={youngFilter} isYoung={isYoungFilter} isOld={isOldFilter} sortGoals={sortGoals} isSorted={isSorted} players={viewingPlayers}/>
          <List cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onClear={onClear}/>
      </div>
    </div>
  );
}

export default App;
