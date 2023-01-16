import FormUnit from "./components/FormUnit";
import Button from "./components/Button";
function App(props) {
  const unitList = props.unitDatas.map((unitData) => (
    <FormUnit
      id={unitData.id}
      labelText={unitData.labelText}
      type={unitData.type}
      key={unitData.id}
    />
  ));

  return (
    <div className="App">
      <h1>Transaction Form</h1>
      <form>
        {unitList}
        <Button />
      </form>
    </div>
  );
}

export default App;
