import React, {Component} from 'react'
import { CardList } from './components/card-list/card-list.component'
import './App.css'
import {SearchBox} from './components/search-box/search-box.component'
class App extends Component {
  constructor() {
    super();
    this.state = {
      mosters: [],
      searchField: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({mosters: users}))
}
  handleChange = e => {
    this.setState({searchField:e.target.value})
  }


  render () {
    const { mosters,searchField } = this.state;
    const   filteredMonsters = mosters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

   return(
    <div className="App" >
      <h1 style={{ 'text-align' : 'center'}}>Monters Rolodex</h1>
      <div className="search-box">
      <SearchBox 
      type='search'
      
      placeholder='search monsterts'
      handleChange={this.handleChange}
      />
      </div>
     
      <CardList mosters={filteredMonsters}>
     
        </CardList>
      
  </div>
   ) 
  };
}

export default App;
