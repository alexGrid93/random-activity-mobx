import { ActivityList } from "./components/ActivityList/ActivityList";
import "./App.css";
import { ActivitySearch } from "./components/ActivitySearch/ActivitySearch";

const App = () => {
  return (
    <div className="App">
      <ActivitySearch />
      <ActivityList />
    </div>
  );
};

export default App;
