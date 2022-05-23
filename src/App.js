
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardList from './components/CardList/CardList'
import SnackBar from './components/SnackBar/SnackBar'

function App() {
  return (
    <div className="App">
      
      <NavBar />
     
     <div className = 'general-container'> 
      <CardList title = {'Destacados'} /> 
     </div>
     
    </div>
 
  );
}

export default App;
