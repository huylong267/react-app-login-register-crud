import React, { Component } from "react";
import Header from "./commons/header";
import Sidebar from "./commons/sidebar";
import { Link } from 'react-router-dom';
import EditEmployee from "./modal/edit-employee";
class Employee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: [],
            idEdit:-1,

        }
    }
    componentDidMount() {
        const employees = localStorage.getItem('listEmp');
        const parseList = JSON.parse(employees);
        this.setState({ employees: parseList });

    }
    handleEditPassId =(event) =>{
      this.setState({idEdit: event.target.value})  
    }
    render() {
        var listEmp = this.state.employees.map((e, index) => {
            return <tr key={e.id}>
                <td>{index + 1}</td>
                <td>{e.name}</td>
                <td>{e.phone}</td>
                <td>{e.email}</td>
                <td>{e.empId}</td>
                <td>{e.company}</td>
                <td>{e.location}</td>
                <td className="text-center">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#editEmpId" value={e.id} onClick={this.handleEditPassId}>
                        Edit
                </button>
                </td>
            </tr>
        });

        return (
            <div>
                <Header></Header>
                <div id="wrapper">
                    <Sidebar></Sidebar>
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={'/dashboard'} >Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">CRUD App</li>
                                <li className="ml-auto"><Link to={'add'}>Add Employee</Link></li>
                            </ol>
                            <div className="card mb-3">
                                <div className="card-header"><i className="fas fa-table"></i>
                                    &nbsp;&nbsp;Employees List
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>Name</th>
                                                <th>Phone No</th>
                                                <th>Email ID</th>
                                                <th>Emp ID</th>
                                                <th>Company</th>
                                                <th>Location</th>
                                                <th className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listEmp}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                            </div>
                            <EditEmployee empId ={ this.state.idEdit }></EditEmployee>
                            <footer className="sticky-footer">
                                <div className="container my-auto">
                                    <div className="copyright text-center my-auto">
                                        <span>Copyright © Your Website 2019</span>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Employee;