//Create an element using React similar to document.createElement in vanilla JS
//1st argument is the type of element we want to create
//2nd argument is the attributes of that element in form of object
//3rd argument is the content inside that element
const header = React.createElement("h1", {id:"demo1"}, "Hello World from React");
//finds the root element in the index.html and renders the header element inside it
const root = ReactDOM.createRoot(document.getElementById("root"));
//in the root element render the header element
root.render(header);
