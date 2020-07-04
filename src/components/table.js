import React from 'react'
import Employee from './employee';
import employees from '../employees.json';
import Search from './search';

class TableData extends React.Component {
    state = {
        employees,
        firstName: '',
        sort: ''
    }
    render() {
        const employees = this.state.employees;
        return (
            <>
                <Search/>

                <table className='table table-striped m-4'>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope='col'>Photo</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Phone</th>
                            <th scope='col'>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...employees].map((employee) => (
                            <Employee
                                key={employee.id.value}
                                picture={employee.picture.medium}
                                firstName={employee.name.first}
                                lastName={employee.name.last}
                                phone={employee.phone}
                                email={employee.email}
                            />
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
}

export default TableData;