import React from 'react'
import Employee from './employee';
import employees from '../employees.json';
import Search from './search';

class TableData extends React.Component {
    state = {
        employees,
        lastName: '',
        sort: ''
    };
    //employees name to search
    handleEmployee = (event) => {

        let value = event.target.value;
        console.log(value)
        let newList = employees.filter((emp) => {
            return emp.name.first.toLowerCase().includes(value.toLowerCase());
        });


        this.setState({
            employees: newList,
        });
    };
    //search button
    handleSearch = (event) => {
        event.preventDefault();
        
        let empSearch = employees.filter((emp) => {
            if (emp.name.first.toLowerCase().substr(0, this.state.firstName.length) === this.state.firstName.toLowerCase().substr(0, this.state.firstName.length)) {

                return true;
            } else {
                return false
            }

        });
        this.setState({ employees: empSearch });
    };
    //sorts last name
    handleNameSort = () => {
        let newList = this.state.employees

        if (this.state.sort === "ASC") {
            let sortList = newList.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1)
            this.setState({
                employees: sortList,
                sort: "DSC"
            })
        } else {
            let sortList = newList.sort((a, b) => (a.name.last > b.name.last) ? -1 : 1)

            this.setState({
                employees: sortList,
                sort: "ASC"
            })
        }
    }
    //render results  
    render() {
        const employees = this.state.employees;
        return (
            <>
                <Search
                    handleEmployee={this.handleEmployee}
                    handleSearch={this.handleSearch} />

                <table className='table table-striped m-4'>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope='col'>Photo</th>
                            <th scope='col'
                                onClick={this.handleNameSort}>Name </th>
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