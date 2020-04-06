
import React, { Component } from 'react';




export default class EditEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: {},
        }
    }
    componentDidMount() {
        const empList = localStorage.getItem('listEmp');
        const empParse = JSON.parse(empList);
        const id = this.props.empId;
        let emp = empParse.filter(e => {
            return e.id === parseInt(id);
        });
        let employee = emp[0];
        this.setState({ employee });
    }
    handleChangeInput=(e)=>{
        let name= e.target.nameEdit;
        this.setState({employee.name:name})
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
                                        <input type="text" className="form-control" name="nameEdit" id="nameEdit" value={this.state.employee.name} onChange={this.handleChangeInput}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phoneEdit" className="col-form-label">Số điện thoại:</label>
                                        <input type="text" className="form-control" id="phoneEdit" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="emailEdit" className="col-form-label">Email:</label>
                                        <input type="text" className="form-control" id="emailEdit" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="empIdEdit" className="col-form-label">Mã nhân viên:</label>
                                        <input type="text" className="form-control" id="empIdEdit" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="companyEdit" className="col-form-label">Tên Công ty:</label>
                                        <input type="text" className="form-control" id="companyEdit" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="addressEdit" className="col-form-label">Địa chỉ:</label>
                                        <input type="text" className="form-control" id="addressEdit" />
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
