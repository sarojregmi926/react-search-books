import logo from './logo.svg';
// import './App.css';
import APPNavigation from "./navigation/AppNavigation";
import BookContextProvider from './useReducer/BookContextProvider';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <APPNavigation />
      </BookContextProvider>
    </div>
  );
}

export default App;
