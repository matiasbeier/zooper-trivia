import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import EditProfile from './components/HOME/editProfile';
import GameListRoom from './components/GAME-LIST-ROOM/gameListRoom';
import FormAddQuestions from './components/HOME/FormAddQuestions/form';
import Home from './components/HOME/home';
import PlayStore from './components/PLAYSTORE/playstore';
import PreGameRoom from './components/PRE-GAMEROOM/preGameRoom';
import { config } from './utils/Firebase';
import { initializeApp } from 'firebase/app';
import initialPage from './components/INICIO/initialPage';
import signUpFirebase from './components/INICIO/SIGNUP/signUpFirebase';
import LandingPage from './components/LANDINGPAGE/landingPage';
import GameRoom from './components/GAMEROOM/gameRoom';
import RecuperarContrasena from './components/INICIO/RECUPERARCONTRASENA/recuperarContrasena';
import Footer from './components/FOOTER/footer';
import loginAdmin from './components/ADMIN/login';
import AdminHome from './components/ADMIN/adminHome';
import AdminUsers from './components/ADMIN/adminUsers';
import AdminQuestions from './components/ADMIN/adminQuestions';
import CurrentQuestions from './components/ADMIN/currentQuestions';
import JoinWithLink from './components/JOINWITHLINK/joinWithLink';
import Privacidad from './components/PRIVACIDAD/privacidad';
import Ranking from './components/RANKING/Ranking';
import About from './components/ABOUT/about';



initializeApp(config);

function App() {
  return (
    <div className='App'>      
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/' component={Footer} />
      <Route path='/home' component={Home} />
      <Route path='/home' component={Footer} />
      <Route path='/login' component={initialPage} />
      <Route path='/signup' component={signUpFirebase} />
      <Route path='/recuperarcontrasena' component={RecuperarContrasena} />
      <Route path='/editProfile' component={EditProfile} />
      <Route path='/room/:idUser' component={PreGameRoom} />
      <Route path='/invitationRoom/:idRoom' component={JoinWithLink} />
      <Route path='/partidasDisponibles' component={GameListRoom} />
      <Route path='/tienda' component={PlayStore} />
      <Route path='/añadirPregunta' component={FormAddQuestions} />
      <Route path='/partida' component={GameRoom} />
      <Route path='/politica-de-privacidad' component={Privacidad} />
      <Route exact path="/ranking" component={Ranking} />
      <Route exact path="/about" component={About} />

        {/* ///////   Secciones de Administrador //////// */}
        <Route path="/administrador" component={loginAdmin} />
        <Route path="/adminHome" component={AdminHome} />        
        <Route path="/adminQuestions" component={AdminQuestions} />
        <Route path="/adminCurrentQuestions" component={CurrentQuestions} />
        <Route path="/adminUsers" component={AdminUsers} />
    </div>
  );
}

export default App;
