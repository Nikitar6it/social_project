import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Messages from './components/messages/Messages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="wrapper__content">
          <Routes>
            <Route path='/' element={<Profile />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/messages' element={<Messages />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;



