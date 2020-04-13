
import React, { Component } from 'react';




export default class DeleteEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: {},

        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.employee.id !== nextProps.employee.id) {
            this.setState({employee:nextProps.employee});
        }
        return true;}
    handleSubmit=()=>{
        
            this.props.onReceiveSubmitDelete(this.state.employee)
    }



    render() {
        return (
            <div>

                <div className="modal" id="deleteModal" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Delete employee</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Arr you sure</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Yes</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
