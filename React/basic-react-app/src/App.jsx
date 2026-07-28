import Day1App from "./components/day1/App";
import PropsApp from "./components/day2/props/App";
import PortfolioApp from "./components/day2/portfolio/App";
import CardApp from "./components/day2/team_members/App";
import ConditionalApp from "./components/day3/conditional/App";
import FormStyling from "./components/day3/form/FormStyling";
import MapApp from "./components/day4/map/App";
import LivePreview from "./components/day3/form/LivePreview";
import ToggleTheme from "./components/day3/form/Changemode";
import LoginForm from "./components/day3/form/LoginForm"
function App() {
  const activeDay = "LoginForm";

  if (activeDay === "day1") {
    return <Day1App />;
  }

  if (activeDay === "props") {
    return <PropsApp />;
  }

  if (activeDay === "portfolio") {
    return <PortfolioApp />;
  }

  if (activeDay === "team_members") {
    return <CardApp />;
  }

  if (activeDay === "conditional") {
    return <ConditionalApp />;
  }

  if (activeDay === "form") {
    return <FormStyling />;
  }

  if (activeDay === "map") {
    return <MapApp />;
  }

  if (activeDay === "LivePreview") {
    return <LivePreview />;
  }

  if (activeDay === "ToggleTheme") {
    return <ToggleTheme />;
  }

  if (activeDay === "LoginForm") {
    return <LoginForm />;
  }

  return <PortfolioApp />;
}

export default App;