import React, { Component } from 'react';
import Entry from './components/Entry'

import './App.css';

const data = [
  {
    title:'uno',
    date: '29/jul/19',
    body: 'soy el body :D'
  },
  {
    title:'dos',
    date: '28/jul/19',
    body: 'soy el body :D x2'
  },
  {
    title:'tres',
    date: '27/jul/19',
    body: 'soy el body :D x3'
  },
  {
    title:'cuatro',
    date: '26/jul/19',
    body: 'soy el body :D x4'
  }
]

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      entries: []
    }
  }

  componentDidMount () {
    console.log('hola')
    fetch('http://localhost:8080/entries')
      .then(response => response.json())
      .then(data => {
        console.log('data: ', data)
        this.setState({
          entries: data.data.entries
        })
      })
      .catch(error => {
        console.error('Error: ', error)
      })
  } 

  render() {
    return (
      <>
        <header> Mi blog</header>
        <main>
          {/* lista de articulos */}
          {
            this.state.entries.map(entry => 
            <Entry  
              title={entry.title}
              date={entry.date}
              body={entry.body}
              key={entry.title}
            />)
          }
        </main>
      </>
    )
  }
}

export default App;
