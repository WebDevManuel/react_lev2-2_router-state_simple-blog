import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

import Blog from './pages/Blog'
import Home from './pages/Home'



function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blog' element={<Blog />} />
            </Routes>
            <NavBar />
            {/* <Blog /> */}
        </div>
    );
};

export default App;
