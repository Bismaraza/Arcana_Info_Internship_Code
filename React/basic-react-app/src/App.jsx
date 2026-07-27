import Day1App from "./components/day1/App";
import PropsApp from "./components/day2/props/App";
import PortfolioApp from "./components/day2/portfolio/App";
import CardApp from "./components/day2/team_members/App";
import MapApp from "./components/day3/map/App";

function App() {
  const activeDay = "StudentCard";

  if (activeDay === "day1") {
    return <Day1App />;
  }

  if (activeDay === "props") {
    return <PropsApp />;
  }

  if (activeDay === "portfolio") {
    return <PortfolioApp />;
  }
  if(activeDay ==="team_members"){
    return <CardApp /> }

    if(activeDay ==="StudentCard"){
    return <MapApp /> }

  return <PortfolioApp />;

}

export default App;