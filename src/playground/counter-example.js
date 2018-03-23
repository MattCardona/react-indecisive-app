class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    const count = JSON.parse(localStorage.getItem("count"));
    console.log(typeof count);
    this.setState(() => ({count}));
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count){
      localStorage.setItem("count", JSON.stringify(this.state.count));
    }
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>Add +1</button>
        <button onClick={this.handleMinusOne}>Minus -1</button>
        <button onClick={this.handleReset}>Reset Counter</button>
      </div>
      );
  }
}


const app = document.getElementById('app');

ReactDOM.render(<Counter />, app);


// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
//   console.log("Add One");
// };

// const minusOne = () => {
//   count--;
//   renderCounterApp();
//   console.log("Minus One");
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
//   console.log("Reset Counter Dawg");
// };


// const renderCounterApp = () => {
//   const templateTwo = (
//    <div>
//      <h1>Count: {count}</h1>
//      <button onClick={addOne}>Add +1</button>
//      <button onClick={minusOne}>Minus -1</button>
//      <button onClick={reset}>Reset Counter</button>
//    </div>
//   );

//   ReactDOM.render(templateTwo, appDiv);
// };

// renderCounterApp();