let h1 = React.createElement("h1", {}, "Heading 1");
let h2 = React.createElement("h1", {}, "Heading 2");

let childDiv1 = React.createElement("div", { id: "child1" }, [h1,h2]);
let childDiv2 = React.createElement("div", { id: "child2" }, [h1,h2]);

let parentDIV = React.createElement("div", { id: "parent" }, [
  childDiv1,
  childDiv2,
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentDIV);
