import { useState } from 'react';
import './App.css';
import List from './components/List/List';
import { Routes, Route } from 'react-router-dom';
import FavList from './components/List/FavList';
import RatedList from './components/List/RatedList';
import SideNav from './components/SideNav/SideNav';

function App() {
    const [position, setPosition] = useState<number>(window.innerHeight / 2);

    window.addEventListener('scroll', () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        setPosition(winScroll);
    });

    return (
        <div className="App">
            <div className="App-header">
                <div
                    style={{
                        position: 'absolute',
                        left: '0px',
                        top: position + 400,
                    }}
                >
                    <SideNav />
                </div>
                <div style={{ width: '90%', margin: '20px' }}>
                    <Routes>
                        <Route path="/" element={<List />} />
                        <Route path="/favorite" element={<FavList />} />
                        <Route path="/rated" element={<RatedList />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
