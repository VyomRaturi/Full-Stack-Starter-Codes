import "./App.css";

function App() {
  const familyInfo = {
    familyName: "The Griffins",

    onlyForParents: () => {
      console.log("Info for Parents");
    },

    onlyForGrandChildren: () => {
      console.log("Info for GrandChildren");
    },
  };

  return (
    <div className="App">
      <Family />
    </div>
  );
}

export default App;
