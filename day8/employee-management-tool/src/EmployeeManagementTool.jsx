import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

export default function EmployeeManagementTool() {
  const [employees, setEmployees] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [command, setCommand] = useState("");
  const [searchName, setSearchName] = useState("");
  const [filterDept, setFilterDept] = useState("");
  const [newEmp, setNewEmp] = useState({ name: "", department: "", role: "" });
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    setLoading(true);
    import("./data.json")
      .then((module) => module.default)
      .then((data) => {
        const localData = JSON.parse(localStorage.getItem("employees"));
        const dataToLoad = localData || data;
        setEmployees(dataToLoad);
        setDisplayed(dataToLoad);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading data.json:", error);
        setLoading(false);
      });
  }, []);

  const handleCommand = () => {
    switch (command) {
      case "List":
        setDisplayed(employees);
        setCurrentPage(1);
        break;
      case "Sort":
        const sorted = [...employees].sort((a, b) => a.name.localeCompare(b.name));
        setDisplayed(sorted);
        setCurrentPage(1);
        break;
      case "Search":
        const found = employees.find((emp) =>
          emp.name.toLowerCase() === searchName.toLowerCase()
        );
        setDisplayed(found ? [found] : []);
        setCurrentPage(1);
        break;
      case "Filter by Department":
        const filtered = employees.filter((emp) =>
          emp.department.toLowerCase() === filterDept.toLowerCase()
        );
        setDisplayed(filtered);
        setCurrentPage(1);
        break;
      default:
        alert("Unknown command");
    }
  };

  const handleClearFilter = () => {
    setDisplayed(employees);
    setSearchName("");
    setFilterDept("");
    setCommand("");
    setCurrentPage(1);
  };

  const handleAddEmployee = () => {
    if (!newEmp.name || !newEmp.department) {
      alert("Name and Department are required!");
      return;
    }
    const updated = [...employees, newEmp];
    setEmployees(updated);
    setDisplayed(updated);
    localStorage.setItem("employees", JSON.stringify(updated));
    setNewEmp({ name: "", department: "", role: "" });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = displayed.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-4">Employee Management Tool</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <select
          className="border p-2 rounded bg-white text-black"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        >
          <option value="">Select Command</option>
          <option value="List">List</option>
          <option value="Sort">Sort</option>
          <option value="Search">Search</option>
          <option value="Filter by Department">Filter by Department</option>
        </select>
        <Button onClick={handleCommand}>Execute</Button>

        {command === "Search" && (
          <Input
            placeholder="Enter employee name to search"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        )}

        {command === "Filter by Department" && (
          <Input
            placeholder="Enter department name to filter"
            value={filterDept}
            onChange={(e) => setFilterDept(e.target.value)}
          />
        )}

        <Button onClick={handleClearFilter} variant="outline">Clear Filter</Button>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl mb-2">Add New Employee</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
          <Input
            placeholder="Name"
            value={newEmp.name}
            onChange={(e) => setNewEmp({ ...newEmp, name: e.target.value })}
          />
          <Input
            placeholder="Department"
            value={newEmp.department}
            onChange={(e) => setNewEmp({ ...newEmp, department: e.target.value })}
          />
          <Input
            placeholder="Role"
            value={newEmp.role}
            onChange={(e) => setNewEmp({ ...newEmp, role: e.target.value })}
          />
        </div>
        <Button onClick={handleAddEmployee}>Add Employee</Button>
      </div>

      {loading ? (
        <p>Loading employee data...</p>
      ) : (
        <div>
          <h2 className="text-xl mb-4">Employee List (Page {currentPage})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentItems.length > 0 ? (
              currentItems.map((emp, idx) => (
                <Card key={idx}>
                  <CardContent className="p-4">
                    <p>
                      <strong>Name:</strong> {emp.name}
                    </p>
                    <p>
                      <strong>Department:</strong> {emp.department}
                    </p>
                    <p>
                      <strong>Role:</strong> {emp.role}
                    </p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p>No match found.</p>
            )}
          </div>

          <div className="flex gap-4 mt-4">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button
              onClick={() =>
                setCurrentPage((prev) =>
                  indexOfLastItem < displayed.length ? prev + 1 : prev
                )
              }
              disabled={indexOfLastItem >= displayed.length}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
