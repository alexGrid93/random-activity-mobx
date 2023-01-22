import { ActivityList } from "./components/ActivityList/ActivityList";
import "./App.css";
import { ActivitySearch } from "./components/ActivitySearch/ActivitySearch";

const App = () => {
  return (
    <div className="App">
      <h1 style={{ alignSelf: "flex-start" }}>Bored todo</h1>
      <ActivitySearch />
      <ActivityList />
    </div>
  );
};

export default App;
