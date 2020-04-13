import React, { Component } from "react";
import Header from "./commons/header";
import Sidebar from "./commons/sidebar";
import { Link } from 'react-router-dom';
import EditEmployee from "./modal/edit-employee";
import DeleteEmployee from "./modal/delete-employee";

class Employee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: [
                {
                    id: 1,
                    name: 'Long',
                    phone: '123456',
                    email: 'h@gmail.com',
                    empId: '123',
                    company: 'VNPT',
                    location: 'HN'
                },
                {
                    id: 2,
                    name: 'Long',
                    phone: '123456',
                    email: 'h@gmail.com',
                    empId: '123',
                    company: 'VNPT',
                    location: 'HN'
                },
                {
                    id: 3,
                    name: 'Long',
                    phone: '123456',
                    email: 'h@gmail.com',
                    empId: '123',
                    company: 'VNPT',
                    location: 'HN'
                },
                {
                    id: 4,
                    name: 'Long',
                    phone: '123456',
                    email: 'h@gmail.com',
                    empId: '123',
                    company: 'VNPT',
                    location: 'HN'
                }
            ],
            employee: {},
            editMode: ''
        }
    }
    componentDidMount() {
    
        if (localStorage && localStorage.getItem('listEmp')) {
            const listEmp = localStorage.getItem('listEmp');
            const listParse = JSON.parse(listEmp)
            this.setState({ employees: listParse });
        } else {
            const list = JSON.stringify(this.state.employees)
            localStorage.setItem('listEmp', list);
            //   this.setState(employees);
        }
        
    }
    onReceiveSubmitEdit = (employee) => {
        const { employees } = this.state;
        const index = employees.findIndex(x => x.id === employee.id);
        if (index < 0) return;
        const newList = [...employees];
        newList.splice(index, 1);
        const listFinal = [...newList, employee]
        this.setState({
            employees: listFinal
        })
        const listEmpSave = JSON.stringify(listFinal);
        localStorage.setItem('listEmp', listEmpSave);
        window.location.reload();
    }
    onReceiveSubmitDelete = (employee) => {
        const { employees } = this.state;
        const index = employees.findIndex(x => x.id === employee.id);
        if (index < 0) return;
        const newList = [...employees];
        newList.splice(index, 1);
        const listFinal = [...newList]
        this.setState({
            employees: listFinal
        })
        const listSave = JSON.stringify(listFinal);
        localStorage.setItem('listEmp', listSave);
        window.location.reload();
    }


    showModalDelete = (event) => {
        const id = event.target.value;
        const empList = localStorage.getItem('listEmp');
        const empParse = JSON.parse(empList);
        let employee = empParse.filter(e => {
            return e.id === parseInt(id);
        });
        this.setState({ employee: employee[0] })
    }
  
    handleEditEmp = (event) => {
        const id = event.target.value;
        const empList = this.state.employees;
        let employee = empList.find(e => {
            return e.id === parseInt(id);
        });
        this.setState({
            employee:employee,
            editMode:true
        })
    }

    handleAdd =()=>{
        this.setState({
            editMode:false,
            employee:{}
        })
    }
    onReceiveSubmitAdd = (employee) => {
        const {employees} = this.state;
        const newList = [...employees,employee];
        this.setState({
            employees:newList
        })
        localStorage.setItem('listEmp',JSON.stringify(newList));
        window.location.reload();
    }
    render() {
        var listEmp = this.state.employees.map((e, index) => {
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{e.name}</td>
                <td>{e.phone}</td>
                <td>{e.email}</td>
                <td>{e.empId}</td>
                <td>{e.company}</td>
                <td>{e.location}</td>
                <td className="text-center">

                    <button type="button" className="btn btn-sm btn-primary mr-2" data-toggle="modal" data-target="#editModal" value={e.id} onClick={this.handleEditEmp}>
                        Edit
                    </button>
                    <button type="button" className="btn btn-sm btn-danger mr-2" data-toggle="modal" data-target="#deleteModal" value={e.id} onClick={this.showModalDelete}>
                        Delete
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
                                {/* <li className="ml-auto"><Link to={'add'} >Add Employee</Link></li> */}
                                <li className="ml-auto">
                                    <button type="button" className="btn btn-sm btn-primary mr-2" data-toggle="modal" data-target="#editModal" onClick={this.handleAdd}>Add Employee
                                </button>
                                </li>
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
                            <EditEmployee employee={this.state.employee}
                                onReceiveSubmitEdit={this.onReceiveSubmitEdit}
                                editMode = {this.state.editMode}
                                onReceiveSubmitAdd = {this.onReceiveSubmitAdd}
                            ></EditEmployee>
                            <DeleteEmployee employee={this.state.employee}
                                onReceiveSubmitDelete={this.onReceiveSubmitDelete}
                             
                            ></DeleteEmployee>
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