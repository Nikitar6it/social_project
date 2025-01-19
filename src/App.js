import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Messages from './components/messages/Messages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App(props) {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="wrapper__content">
          <Routes>
            <Route path='/' element={<Profile profilePage={props.state.profilePage} />} />
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage} />} />
            <Route path='/messages' element={<Messages messagePage={props.state.messagePage}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;



