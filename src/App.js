import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import ListItem from "./ListItem";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faTrash);
library.add(faCheck);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }

  deleteAll() {
    this.setState({
      items: [],
    });
  }

  updateItem(key, value) {
    const updatedItems = this.state.items;
    updatedItems.map((item) => {
      if (item.key === key) {
        item.text = value;
        return item;
      }
    });
    this.setState({
      items: updatedItems,
    });
  }
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="TO DO"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            ></input>
            <button type="submit">Add</button>
          </form>
        </header>
        <div className="deleteAll">
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={this.deleteAll}
            ></FontAwesomeIcon>
          </span>{" "}
          All
        </div>
        <ListItem
          items={this.state.items}
          deleteItem={this.deleteItem}
          updateItem={this.updateItem}
        ></ListItem>
      </div>
    );
  }
}

export default App;
