import TeamCard from "./TeamCard";

function CardApp() {
  return (
    <div className="min-h-screen p-10 bg-gray-100 text-gray-900">
      <div className="flex flex-wrap justify-center gap-6">

        <TeamCard
          name="Bisma Raza"
          fathername="Raza Muhammad"
          GPA={3.9}
        />

        <TeamCard
          name="Ali Khan"
          fathername="Muhammad Khan"
          GPA={3.6}
        />

        <TeamCard
          name="Sara Ahmed"
          fathername="Ahmed Ali"
          GPA={3.8}
        />

      </div>
    </div>
  );
}

export default CardApp;