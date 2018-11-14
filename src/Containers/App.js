import React, { Component } from 'react';
import CardArray from '../Components/CardArray'
import SearchBox from '../Components/SearchBox'
import AddUser from '../Components/addUser'
import './App.css'
import Scroll from '../Components/Scroll'

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots : [],
            searchfield: '',
            ID: '',
            name: '',
            userName: '',
            email: ''
        }
       
    }

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=>{this.setState({robots : users})})
    }
     onSearchChange = (event) =>{
         this.setState({ searchfield:event.target.value })
          }    
    
    handleChange = (evt)  =>{
        this.setState({ [evt.target.id]: evt.target.value })
    }

    
    clearFiled = () =>{
        document.querySelector("#name").value="";
        document.querySelector("#email").value="";
        document.querySelector("#userName").value="";
}
    
    AddUser = (event) =>{
        const idc = this.state.robots.length+1;
            this.state.robots.push({
            id: idc,
            name: this.state.name,
            username: this.state.username,
            email: this.state.email
            
        });
        
        this.setState(this.state);
        this.clearFiled();
    }

   

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
            
        })
       return !robots.length ?
            <div className='centerh'>
               <h1 className='tc f1'>Loading</h1>
               
           </div> : 
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardArray robots={filteredRobots}/>
                    </Scroll>
                    <AddUser handler={this.handleChange} add={this.AddUser} />
                </div>
                
            );
            
    }
}

export default App;