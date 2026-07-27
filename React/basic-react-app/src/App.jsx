import Day1App from "./components/day1/App";
import Day2App from "./components/day2/App";
import PropsApp from "./components/day2/props/App";

function App() {
  const activeDay = "props";

  if (activeDay === "day1") {
    return <Day1App />;
  }

  if (activeDay === "props") {
    return <PropsApp />;
  }

  return <Day2App />;
}

export default App;