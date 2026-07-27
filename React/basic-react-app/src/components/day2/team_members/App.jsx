import TeamCard from "./Teamcard";

function CardApp() {
  return (
    <div className="min-h-screen p-10 bg-gray-100 text-gray-900">
      <div className="flex flex-wrap justify-center gap-6">
        <TeamCard name="Bisma Raza" fathername="Raza Muhammad" GPA="Dell" />
      </div>
    </div>
  );
}

export default CardApp;
