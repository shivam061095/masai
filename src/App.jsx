
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Registers from "./components/Register"
import Login from "./components/Login"
import Create from './components/CreatePost';
import Post from './components/Post';



function App() {
  return (
    <div className="App">
    <h1>notes app</h1>
    <Routes>
      <Route path="/register" element={<Registers />}>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/posts" element={<Post/>}></Route>
      

      

    </Routes>
   
    </div>
  );
}

export default App;
