import React, { Component } from 'react'
import { CardList } from './components/card-list/cardlist.component'
import { SearchBox } from './components/search-box/searchBox'
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        }

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users}))
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        const { monsters, searchField } = this.state;
        let filteredMonsters;
        if (monsters.length) {
            filteredMonsters = monsters.filter(monster =>
                monster.name.toLowerCase().includes(searchField.toLowerCase())
            )
        }
 
        return (
            <div className="App">
                <h1> Monsters Rolodex </h1>
                <SearchBox
                    placeholder='Search monsters...'
                    handleChange={ this.handleChange }
                />
                <CardList monsters={filteredMonsters || this.state.monsters} />
            </div>
        );
    }

}

export default App;
