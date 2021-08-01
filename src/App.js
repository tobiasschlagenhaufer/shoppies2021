import './App.css';
import { Provider } from 'react-redux';

import store from './store';
import NavBar from './components/NavBar';
import Searchbar from './components/SearchBar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Searchbar />
      </div>
    </Provider>
  );
}

export default App;
