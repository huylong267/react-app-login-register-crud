
import React, { Component } from 'react';




export default class EditEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: {},
                nameEdit:'',
                phoneEdit:'',
                emailEdit:'',
                empIdEdit:'',
                companyEdit:'',
                addressEdit:''
        }
    }


    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.employee.id !== nextProps.employee.id) {
            this.setState({employee:nextProps.employee});
        }
        return true;}
    handleChangeInput=(e)=>{
       var target =e.target;
       var name = target.name;
       var value = target.value;
       this.setState({
           [name] : value
       })

    }

    render() {
        return (
            <div>

                <div className="modal fade" id="editEmpId" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Sửa thông tin  nhân viên</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="form-group">
                                        <label htmlFor="nameEdit" className="col-form-label">Tên:</label>
                                        <input type="text" className="form-control" name="nameEdit" id="nameEdit" onChange={this.handleChangeInput} value={this.state.employee.name}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phoneEdit" className="col-form-label">Số điện thoại:</label>
                                        <input type="text" className="form-control" id="phoneEdit" name="phone" onChange={this.handleChangeInput} value={this.state.employee.phone}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="emailEdit" className="col-form-label">Email:</label>
                                        <input type="text" className="form-control" id="emailEdit" name="email" value={this.state.employee.email}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="empIdEdit" className="col-form-label">Mã nhân viên:</label>
                                        <input type="text" className="form-control" id="empIdEdit" name="empId" value={this.state.employee.empId}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="companyEdit" className="col-form-label">Tên Công ty:</label>
                                        <input type="text" className="form-control" id="companyEdit" name="company" value={this.state.employee.company}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="addressEdit" className="col-form-label">Địa chỉ:</label>
                                        <input type="text" className="form-control" id="addressEdit" name="location" value={this.state.employee.location}/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
