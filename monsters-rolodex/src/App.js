import React from 'react';
import './App.css';

import { CardList } from "./components/card-list/CardListComponent";
import { SearchBox } from "./components/search-box/SearcBoxComponent";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: ""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({monsters: users}));
    }

    render() {
        const  { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster => {
            return monster.name.toLowerCase().includes(searchField.toLowerCase())
        });
        return (
            <div className="App">
                <SearchBox
                    placeholder="search monsters"
                    handleChange={e => this.setState({searchField: e.target.value})}
                />
                <CardList monsters={filteredMonsters}>
                </CardList>
            </div>
        )
    }
}

export default App;
