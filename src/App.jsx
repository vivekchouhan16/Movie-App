import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';
import Home from './pages/home/Home';
import Movie from './pages/Home/Moviedetail/Movie';
import Movielist from './components/Movielist/Movielist';



function App() {
  return (
    <div className="App">
        <Router>
         <Header/>
            <Routes>
                <Route index element={<Home/>}></Route>
                <Route path="movie/:id" element={<Movie/>}></Route>
                <Route path="movies/:type" element={<Movielist />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;