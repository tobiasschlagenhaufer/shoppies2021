import './App.scss';
import { Provider } from 'react-redux';

import store from './store';
import NavBar from './components/NavBar';
import MovieSearch from './components/MovieSearch';
import MovieResults from './components/MovieResults';
import MovieNominations from './components/MovieNominations';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <MovieSearch />
        <MovieResults />
        <MovieNominations />
      </div>
    </Provider>
  );
}

export default App;
