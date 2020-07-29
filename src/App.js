import React, { Component } from 'react';
import './App.css';



class App extends Component
{
    // Constructor
    constructor()
    {
        super();

        this.state = {
            monsters: []
        };
    }


    // Fetch the data when the page first gets rendered
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }


    // Rendering
    render()
    {
        return (
            <div className='App'>
                {this.state.monsters.map(monster => (
                    <h1>{monster.name}</h1>
                ))}
            </div>
        );
    }
}


export default App;