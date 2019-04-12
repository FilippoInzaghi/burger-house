import React, { Component, useState } from "react";
import "./App.css";
import Person from "./components/Person";
import UserOutput from "./components/UserOutput";
import UserInput from "./components/UserInput";
import ValidationComponent from "./components/ValidationComponent";
import CharComponent from "./components/CharComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          name: "Filip",
          age: 25
        },
        {
          name: "Izabela",
          age: 24
        },
        {
          name: "Zbynio",
          age: "10 months"
        }
      ],
      active: true,
      API_array: [
        {
          id: 1,
          name: "Filip"
        },
        {
          id: 2,
          name: "Marek"
        },
        {
          id: 3,
          name: "Mateusz"
        },
        {
          id: 4,
          name: "Mateusz"
        },
        {
          id: 5,
          name: "Mateusz"
        }
      ],
      inputWord: ""
    };
    this.changeChildNameHandler = this.changeChildNameHandler.bind(this);
  }

  changeChildNameHandler(e) {
    const persons = this.state.persons.map((item, index) => {
      if (index === 1) {
        item.name = e.target.value;
      }
      return item;
    });
    this.setState({
      persons
    });
  }

  changeActiveHandler = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  };

  // changeNameHandle = e => {
  //   let chosenPersons = this.state.API_array.map(item =>{
  //     if(item.id === e.target.id){
  //       item.name = e.target.value
  //     };
  //     return item
  //   });
  //   this.setState({
  //     API_array: chosenPersons
  //   })
  // };
  deletePerson = index => {
    console.log("Kliknąłeś w diva numer " + index);
    const API_array = this.state.API_array.filter(item => item.id !== index);
    this.setState(prevState => ({
      API_array
    }));
  };

  inputChangeHandler = (event, id) => {
    const API_array = [...this.state.API_array];
    API_array.map(person => {
      if (id === person.id) {
        person.name = event.target.value;
      }
      return person;
    });
    this.setState({
      API_array
    });
  };

  inputWordHandler = e => {
    this.setState({
      inputWord: e.target.value
    });
  };

  deleteCharComponent = index => {
    const inputWord =
      this.state.inputWord.slice(0, index) +
      this.state.inputWord.slice(index + 1);
    console.log(inputWord);
    this.setState(prevState => ({
        inputWord
    }))
  };

  render() {
    const API_names = this.state.API_array.map((item, index) => (
      <Person
        key={index}
        id={item.id}
        name={item.name}
        deletePerson={this.deletePerson}
        inputChangeHandler={this.inputChangeHandler}
      />
    ));

    let persons = null;
    if (this.state.active) {
      persons = (
        <>
          <UserInput
            personsName={this.state.persons[1].name}
            changeChildName={this.changeChildNameHandler}
          />
          {this.state.persons.map((item, index) => (
            <UserOutput key={index} name={item.name} age={item.age} />
          ))}
        </>
      );
    }

    const letters = this.state.inputWord
      .split("")
      .map((letter, index) => (
        <CharComponent
          key={index}
          id={index}
          letter={letter}
          deleteCharComponent={this.deleteCharComponent}
        />
      ));

    return (
      <div className="App">
        <button onClick={this.changeActiveHandler}>
          {this.state.active ? "Ukryj formularz" : "Pokaż formularz"}
        </button>
        <div className="columns">
          <h1>Hi, I am Filip</h1>
          {API_names}
        </div>
        <div className="columns">{persons}</div>
        <div className="column">
          <ValidationComponent inputLength={this.state.inputWord.length} />
          <input
            type="text"
            value={this.state.inputWord}
            onChange={this.inputWordHandler}
          />
          <p>Długość tekstu: {this.state.inputWord.length}</p>
        </div>
        <div className="column">{letters}</div>
      </div>
    );
  }
}

export default App;
