const heading = React.createElement(
  "h1",
  { id: "heading1" },
  "Hello World from React using createElement"
);
const heading2 = React.createElement(
  "h1",
  { id: "heading2" },
  "Hello World from React using children 2"
);
const div2 = React.createElement("div", { id: "child" }, [heading,heading2]);
const div1 = React.createElement("div", { id: "parent" }, div2);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div1);

//above code makes the same structure as below
{
  /* <div id="root">
  <div id="parent">
    <div id="child">
      <h1 id="heading">Hello World from React using createElement</h1>
    </div>
  </div>
</div>; */
}
