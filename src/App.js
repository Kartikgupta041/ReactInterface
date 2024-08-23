import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import moviedata from './movie';
import Card from './Card';
import Message from './Message';
import Login from './Kartik/Views/Login';
import Movielist from './Kartik/Views/Movielist';
import Useeffect from './Useeffect';
import Quiz from './Quiz';
import RandomUser from './Kartik/Views/RandomUser';
import Menu from './Kartik/Components/Menu';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from './Kartik/Components/Footer';
import Contact from './Kartik/Views/Contact';
import NoRoute from './Kartik/Views/NoRoute';
import UserDetails from './Kartik/Views/UserDetails';
import ProtectedRoute from './Kartik/Components/ProtectedRoute';
import ShopUI from './Kartik/Views/ShopUI';
import Cart from './Kartik/Views/Cart';

function App() {
  // person object
  // let person = {fname:'Peter', 
  // age : 40, location:'USA', 
  // msg : 'Hello world, How are you?'}
  
  
  return (
    <div className="App">
      <header className="App-header">
        {/* Main wrapper for containing all routes */}
        <BrowserRouter>
        {/* Menu */}
        <Menu/>
        {/* Contain configueration of the paths for views */}
    <Routes>
        {/* Configure routes */}
          <Route path = '/about' element={<RandomUser/>}/>
         
          {/* Parent route for LOGIN Page */}
          <Route path = '/user' element={<Login/>}>
            {/* child route for LOAD DATA */}
            <Route path='loadData' element = {<RandomUser/>}/>
          </Route>
          
          {/* Parent route */}
          <Route path = '/contact' element = {<Contact/>}>
            {/* Child route -> /contact/login */}
            <Route path='Movies' element = {<Movielist/>}/>
          </Route>

          {/* Route for component with data */}
          <Route path= '/userDetails' element = {<ProtectedRoute comp={<UserDetails/>}/>}/>

          <Route path = '/shop' element = {<ShopUI/>}/>

          <Route path = '/cart' element = {<Cart/>}/>

          {/* Default route  */}
          <Route path='/' element={<Contact/>}/>
          {/* Wild Card, for all routes with no path */}
          <Route path='*' element={<NoRoute/>}/>
    </Routes>
        {/* footer component after routes */}
        <Footer/>
        </BrowserRouter>

        {/* create Card component for each object */}
        {/* iteration for array of object}
        {
          moviedata.map((m, i)=>(
            <Card key={m.title} title={m.title} img={m.imgSrc} text={m.text} />
          ))
        }
        {/* 2nd Option
            <Card movie = {moviedata} />

      }
        {/* call components in React */}
        {/*<Greet personInfo = {person} /> */}
       {/*<Greet name='John' age = {50} location='India'/>*/}

      {/* Message.js example*/}
      </header>
    </div>
  );
}

export default App
