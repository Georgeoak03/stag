import React from 'react';
import './App.css';
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>S<span className="highlight">tag</span></h1>
                <div className="App">
                     <SearchBar />
                    <div className="App-playlist">
                        <SearchResults />
                        <Playlist />
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
