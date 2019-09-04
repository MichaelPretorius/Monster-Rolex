import React, { Component } from 'react';
import axios from 'axios';
import './app.css';

import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

class App extends Component {
    state = {
        monsters: [],
        searchField: ''
    };

    async componentDidMount() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');

        this.setState({ monsters: res.data })
    }

    onChange = e => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="container">
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder="search monsters" onChange={this.onChange} />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
