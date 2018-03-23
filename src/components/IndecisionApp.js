import React from 'react';

import {Action} from './Action.js';
import {AddOption} from './AddOption.js';
import {Header} from './Header.js';
import {Options} from './Options.js';
import {OptionModal} from './OptionModal.js';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }
  handleDeleteOptions = () => {
    this.setState(() => ({options: []}));
  }
  handleDeleteOption = (option) => {

    this.setState((prevState) => ({
      options: prevState.options.filter((op) => op !== option)
    }));
  }
  handleClearSelectedOption = () => {
    this.setState((prevState) => ({
      selectedOption: undefined
    }))
  }
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    this.setState((prevState) => ({
      selectedOption: this.state.options[randomNum]
    }))
  }
  handleAddOption = (option) => {
    if(!option){
      return 'Enter valid value to add item';
    }else if(this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    }

    this.setState((prevState) => ({options: prevState.options.concat([option])}));
  }
  componentDidMount() {
    try{
      if(JSON.parse(localStorage.getItem("options"))){
        this.setState(() => ({options: JSON.parse(localStorage.getItem("options"))}));
      }
    }catch(error){
      //Do Nothing
    }
  }
  componentDidUpdate(prevProp, prevState) {
    if(prevState.options.length !== this.state.options.length){
      localStorage.setItem("options", JSON.stringify(this.state.options));
      console.log('Saving data');
    }

  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const subTitle = 'Put your decision in the hands of a Mac.';

    return (
        <div>
          <Header subTitle={subTitle}/>
            <div className="container">
              <Action
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />
              <div className="widget">
                <Options
                  handleDeleteOptions={this.handleDeleteOptions}
                  handleDeleteOption={this.handleDeleteOption}
                  options={this.state.options}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
              </div>
            </div>
          <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}/>
        </div>
      );
  }
}

export {IndecisionApp};