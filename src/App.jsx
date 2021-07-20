import { Typography } from "@material-ui/core";
import "./App.css";
import DropDownMenu from "./Components/DropDownMenu";
import { platforms, regions } from "./Constants/constants";

const App = () => {
  return (
    <div className="App">
      <Typography>Overwatch Rank Looker Upper</Typography>
      <DropDownMenu title="Platform" data={platforms} />
      <DropDownMenu title="Region" data={regions} />
    </div>
  );
};

export default App;
