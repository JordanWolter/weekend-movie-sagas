import {HashRouter as Router, Route, useHistory} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import MovieForm from '../MovieForm/MovieForm';
import '@fontsource/roboto/400.css';

function App() {

  return (
    <div className="App">
      <h1 id='head'>The Movies Saga!</h1>
      
      <Router>        
        <Route exact path="/">
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route exact path="/details">
          <Details />
        </Route>

        {/* Add Movie page */}
        <Route exact path= "/form">
          <MovieForm />
        </Route>
      </Router>
    </div>
  );
}


export default App;
