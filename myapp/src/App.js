import './App.css';
import { Switch , Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Compersation from './Components/Compersation';
import maklat from './Pages/maklat';
import Contact from './Components/Contact';
import Videos from './Pages/Videos';
import Abouts from './Pages/Abouts';
import Inforamtion from './Pages/Inforamtion';

function App() {
  return (
<>


<Header/>
 <Navbar/>
<Switch>
  <Route exact path='/' component={Home}/>
  <Route exact path='/photos' component={Compersation}/>
  <Route exact path='/news' component={maklat}/>
  <Route exact path='/contact' component={Contact}/>
  <Route exact path='/videos' component={Videos}/>
  <Route exact path='/about' component={Abouts}/>
  <Route exact path='/info/:category' component={Inforamtion}/>

  
  
  </Switch> 
 <Footer/>
</>
  );
}

export default App;
