import React, { Component } from 'react';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import './App.css';



// Use arrow functions on any class methods we define
// and aren't part of React built-in function
class App extends Component
{
    // Constructor
    constructor()
    {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        };
    }


    // Fetch the data when the page first gets rendered
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }


    // Function for Search by Name
    // Arrow function automatically calls built-in "bind" function on "this"
    // - to set the correct scope of "this".
    // In this case - "this" represents App class
    onSearchChange = event => {
        this.setState({ searchField: event.target.value });
    }


    // Rendering
    render()
    {
        // State destructing
        const { monsters, searchField } = this.state;

        // Use monsters and searchField defined above
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className='App'>
                <h1>Monsters Rolodex</h1>
                <SearchBox onSearchChange={this.onSearchChange} />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}


export default App;