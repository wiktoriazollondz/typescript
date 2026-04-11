import React from "react";

interface Employee {
    id: number;
    name: string;
    position: string;
    isOnline: boolean;
}

interface EmployeesListProps {
    employees: Employee[]
}

export default function EmployeeList( { employees }: EmployeesListProps ): React.ReactElement {
    const onlineEmployees = employees.filter(e => e.isOnline);
    return (
        <div>
            <ul>{onlineEmployees.map(e => <li key={e.id}>{e.name} is online</li>)}</ul>
        </div>
    )
}