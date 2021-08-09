import React from "react";
import "./App.css";
import ListItems from "./ListItems";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
        type: ""
      }
    };
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: "",
          type: ""
        }
      });
    }
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
        type: e.target.value
      }
    });
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems
    });
  }
  setUpdate(text, key) {
    console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        console.log(item.key + "    " + key);
        item.text = text;
      }
    });
    this.setState({
      items: items
    });
  }
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter task"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            ></input>
            <label>
              <select
                value={this.state.currentItem.type}
                onChange={this.handleChange}
              >
                <option value="personal">Personal</option>
                <option value="office">Office</option>
                <option value="shopping">Shopping</option>
              </select>
            </label>

            <button type="submit">Add</button>
          </form>
          <p>
            {this.state.items.text} {this.state.items.type}{" "}
          </p>

          <ListItems
            items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
          />
        </header>
      </div>
    );
  }
}

export default App;

/*import React from 'react';

import "./styles.css";
import ListItems from "./ListItems";
class App extends React.Component{
  constructor(props){
  super(props);
  this.state={
    item:[],
    currentItem:{
      text:' ',
      key:' ',
      category:' '
      }
    }
    this.addItem=this.addItem.bind(this);
    this.handleInput=this.handleInput.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.setUpdate=this.setUpdate.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const newItem=this.state.currentItem;
    if(newItem.text!==""){
      const items=[...this.state.items,newItem];
      this.setState({
        items:items,
        currentItem:{
          text:" ",
          key:" ",
          category:" "
        }
      })
    }
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }
  deleteItem(key){
    const filteredItems=this.state.items.filter(item=>item.key!==key);
    this.setState({
      items:filteredItems
    })
  }
  setUpdate(text,key){
    const items=this.state.items;
    items.map(item=>{
      if(item.key===key){
        item.text=text;
      }
    })
    this.setState({items:items})
  }
  render(){
    return(
      <>
        <form id="to-do-form" onSubmit={this.addItem}>
        <input type="text" placeholder="Enter Task" value={this.state.currentItem.text} onChange={this.handleInput}></input>
        <button type="submit">Add</button>
        </form>
        <p>{this.state.item.text}</p>
        <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>

      </>
    );
  }
}
export default App;
*/
