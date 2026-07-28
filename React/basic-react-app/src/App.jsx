import Day1App from "./components/day1/App";
import PropsApp from "./components/day2/props/App";
import PortfolioApp from "./components/day2/portfolio/App";
import CardApp from "./components/day2/team_members/App";
import ConditionalApp from "./components/day3/conditional/App";
import FormStyling from "./components/day3/form/FormStyling";
import MapApp from "./components/day4/map/App";
import StatusApp from "./components/day4/badges/StatusApp";
import StudentList from "./components/day4/student/StudentList";
import StudentCard from "./components/day4/student/StudentCard";
import LivePreview from "./components/day3/form/LivePreview";
import ToggleTheme from "./components/day3/form/Changemode";
import LoginForm from "./components/day3/form/LoginForm";
import EmployeeDirectory from "./components/day4/directory/EmployeeDirectory";
import StudentDashboard from "./components/day5/StudentDashboard"

function App() {
  const activeDay = "StudentDashboard";

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

  if (activeDay === "StudentList") {
    return <StudentList />;
  }

  if (activeDay === "StudentCard") {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Student Card</h1>
        <div className="max-w-md mx-auto">
          <StudentCard
            name="Bisma Raza"
            department="Computer Science"
            GPA={3.9}
          />
        </div>
      </div>
    );
  }

  if (activeDay === "LivePreview") {
    return <LivePreview />;
  }

  if (activeDay === "ToggleTheme") {
    return <ToggleTheme />;
  }

  if (activeDay === "StatusApp") {
    return <StatusApp />;
  }

  if (activeDay === "LoginForm") {
    return <LoginForm />;
  }

    if (activeDay === "EmployeeDirectory") {
    return <EmployeeDirectory />;
  }

      if (activeDay === "StudentDashboard") {
    return <StudentDashboard />;
  }

  return <PortfolioApp />;
}

export default App;