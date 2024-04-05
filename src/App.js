import './App.css';
import Home from './Modules/Home';
import {Route, Routes} from 'react-router-dom';
import SignIn from './Modules/SignIn';

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/login" element={<SignIn/>} />
    </Routes>
  );
}

export default App;
