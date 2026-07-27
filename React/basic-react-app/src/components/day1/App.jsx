import Heading from "./Heading";
import Button from "./Button";
import Card from "./Card";
import Profile from "./Profile";

function Day1App() {
  return (
    <div className="min-h-screen p-10 text-gray-900 bg-white">
      <Heading />

      <div className="mt-10">
        <Button />
      </div>

      <div className="flex justify-center mt-10">
        <Card />
      </div>

      <div className="flex justify-center mt-10">
        <Profile />
      </div>
    </div>
  );
}

export default Day1App;