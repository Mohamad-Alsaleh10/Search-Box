import './App.css';
import { articles } from './articles';
import SearchHighlight from './components/SearchHighlight';

function App() {
    return (
        <div className="App">
            <h1>Search</h1>
            <SearchHighlight articles={articles} />
        </div>
    );
}

export default App;
