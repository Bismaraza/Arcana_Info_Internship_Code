import { useState } from "react";
import EmployeeCard from "./EmployeeCard";
import SearchBar from "./SearchBar";

function EmployeeDirectory() {

  const [search, setSearch] = useState("");

  const employees = [
    { id: 1, name: "Bisma Raza", department: "Frontend Developer" },
    { id: 2, name: "Ali Khan", department: "Backend Developer" },
    { id: 3, name: "Sara Ahmed", department: "UI/UX Designer" },
    { id: 4, name: "Ahmed Ali", department: "QA Engineer" }
  ];

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-center mb-8">
        Employee Directory
      </h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredEmployees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            name={employee.name}
            department={employee.department}
          />
        ))}

      </div>

    </div>
  );
}

export default EmployeeDirectory;