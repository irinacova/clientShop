import { useEffect, useState } from 'react';
import Home from '../Home/Home';
import './App.css';
import PageInfoShop from '../PageInfoShop/PageInfoShop';
import { Link, Route, Routes } from 'react-router-dom';


function App() {
    const [name, setName] = useState([]);
    // const [count, setCount] = useState(0)

    useEffect(() => {
        fetch(`http://localhost:3000/shops`)
            .then(res => res.json())
            .then(data => {
                const newName = data.shops;
                setName(newName);
            });
    }, []);

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/home'>Главная</Link>
                    </li>
                  
                </ul>
            </nav>
      
            <Routes>
                <Route path='/'>
                    <Route path='shops/:id' element={<PageInfoShop />} />
                    <Route path='home' element={<Home />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
