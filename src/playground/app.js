class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    }
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
  handleDeleteOptions() {
    this.setState(() => ({options: []}));
  }
  handleDeleteOption(option) {
    this.setState((prevState) => ({
      options: prevState.options.filter((op) => op !== option)
    }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
  }
  handleAddOption(option) {
    if(!option){
      return 'Enter valid value to add item';
    }else if(this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    }

    this.setState((prevState) => ({options: prevState.options.concat([option])}));
  }
  render() {
    const subTitle = 'Put your decision in the hands of a Mac.';

    return (
        <div>
          <Header subTitle={subTitle}/>
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            />
          <Options
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            options={this.state.options}
          />
          <AddOption handleAddOption={this.handleAddOption}/>
        </div>
      );
  }
}

const Header = (props) => {
  return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subTitle}</h2>}
      </div>
      );
}
Header.defaultProps = {
  title: 'Indecisive App'
}
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subTitle}</h2>
//       </div>
//       );
//   }
// }

const Action = (props) => {
  return (
      <div>
        <button
          hidden={!props.hasOptions}
          onClick={props.handlePick}
        >
          What should I do next?
        </button>
      </div>
      );
}
// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           hidden={!this.props.hasOptions}
//           onClick={this.props.handlePick}
//         >
//           What should I do next?
//         </button>
//       </div>
//       );
//   }
// }

const Options = (props) => {
  return (
      <div>
        <button
          hidden={props.options.length <= 0}
          onClick={props.handleDeleteOptions}
        >Remove All
        </button>
        {props.options.length === 0 && <p>Please add a option to get started!</p>}
        {
          props.options.map((op) =>
            <Option
              handleDeleteOption={props.handleDeleteOption}
              key={op}
              optionText={op}
            />)
        }
      </div>
      );
};

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           hidden={this.props.options.length <= 0}
//           onClick={this.props.handleDeleteOptions}
//         >Remove All
//         </button>
//         {
//           this.props.options.map((op) => <Option opkey={op} optionText={op}/>)
//         }
//       </div>
//       );
//   }
// }

const Option = (props) => {
  return (
      <div>
        {props.optionText}<button onClick={(e) => {
          props.handleDeleteOption(props.optionText)
        }}>Remove</button>
      </div>
      );
}
// class Option extends React.Component {

//   render() {
//     return (
//       <div>
//         <p key={this.props.opkey}>This is a option: {this.props.optionText}</p>
//       </div>
//       );
//   }
// }

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({error: error}));
    if(!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
      {this.state.error  && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option'></input>
          <button>Add Option</button>
        </form>
      </div>
      );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, app);