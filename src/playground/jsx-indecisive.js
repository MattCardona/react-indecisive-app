const app = {
  title: "Indecisive app",
  subtitle: "Indecisive app is the best app",
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option  = e.target.elements.option.value;

  if(option) {
    app.options.push(' ' + option);
    e.target.elements.option.value = '';
    renderForm();
  }
};

const removeAll = () => {
  app.options = [];
  renderForm();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appDiv = document.getElementById("app");

const nums = [55, 101, 1000];

const renderForm = () => {
  const template = (
  <div>
    {app.title && <h1>{app.title}</h1>}
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are you options: " + app.options : "No Options" }</p>
    <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
    <button onClick={removeAll}>Remove All</button>
    <ol>
      {
        app.options.map((op, i) => {
          return <li key={i}>{op}</li>;
        })
      }
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add Option</button>
    </form>
  </div>
);

ReactDOM.render(template, appDiv);
};

renderForm();


