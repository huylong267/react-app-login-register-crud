
import React, { Component } from 'react';




export default class EditEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: {},

        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.employee.id !== nextProps.employee.id) {
            this.setState({ employee: nextProps.employee });
        }
        return true;
    }

    handleChangeInput = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState(prevState => ({
            employee: {
                ...prevState.employee, [name]: value
            }

        }))
    }

    onReceiveSubmitEdit = (e) => {
        e.preventDefault();
        this.props.onReceiveSubmitEdit(this.state.employee);
       
    }
    onAddSubmit = (e) =>{
        e.preventDefault();
        this.props.onReceiveSubmitAdd(this.state.employee);
    }
    render() {
        return (
            <div>    
                <div className="modal fade" id="editModal" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit infomation</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form action="" onSubmit={this.props.editMode === true ? this.onReceiveSubmitEdit : this.onAddSubmit}>
                                <div className="modal-body">
                                    <div className="container-fluid">

                                        <div className="form-group">
                                            <label htmlFor="nameEdit" className="col-form-label">Name:</label>
                                            <input type="text" className="form-control" name="name" id="nameEdit" onChange={this.handleChangeInput} value={this.state.employee.name || ''} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phoneEdit" className="col-form-label">Phone No:</label>
                                            <input type="text" className="form-control" id="phoneEdit" name="phone" onChange={this.handleChangeInput} value={this.state.employee.phone || ''} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="emailEdit" className="col-form-label">Email:</label>
                                            <input type="text" className="form-control" id="emailEdit" name="email" onChange={this.handleChangeInput} value={this.state.employee.email || ''} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="empIdEdit" className="col-form-label">Emp Id:</label>
                                            <input type="text" className="form-control" id="empIdEdit" name="empId" onChange={this.handleChangeInput} value={this.state.employee.empId || ''} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="companyEdit" className="col-form-label">Company:</label>
                                            <input type="text" className="form-control" id="companyEdit" name="company" onChange={this.handleChangeInput} value={this.state.employee.company || ''} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="addressEdit" className="col-form-label">Location:</label>
                                            <input type="text" className="form-control" id="addressEdit" name="location" onChange={this.handleChangeInput} value={this.state.employee.location || ''} />
                                        </div>

                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
