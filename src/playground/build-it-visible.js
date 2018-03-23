class Visibilty extends React.Component {
  constructor(props) {
    super(props);
    this.showHidden = this.showHidden.bind(this);
    this.state = {
      flag: false,
      text: "This is the hidden features they suck right now."
    }
  }
  showHidden() {
    this.setState((prevState) => {
      return {
        flag: !prevState.flag
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Visibilty Toggle</h1>
        <button hidden={this.state.flag} onClick={this.showHidden}>Show Hidden</button>
        <button hidden={!this.state.flag} onClick={this.showHidden}>Hide</button>
        <h2 hidden={!this.state.flag}>{this.state.text}</h2>
      </div>
      );
  }
}
const app = document.getElementById('app');
ReactDOM.render(<Visibilty />, app);



// let flag = false;
// let flagTwo = true;
// const details = "This is the hidden features they suck right now.";
// const showHide = () => {
//   flag = !flag;
//   flagTwo = !flagTwo;
//   render();
// };

// const app = document.getElementById('app');

// const render = () => {
//   const temp = (
//   <div>
//     <h1>Visibilty Toggle</h1>
//     <button hidden={flag} onClick={showHide}>Show Hidden</button>
//     <button hidden={flagTwo} onClick={showHide}>Hide</button>
//     <h2 hidden={flagTwo}>{details}</h2>
//   </div>
//   );
//   ReactDOM.render(temp, app);
// };

// render();




