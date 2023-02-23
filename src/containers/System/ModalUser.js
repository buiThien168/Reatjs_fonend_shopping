import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
class ModalUser extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

  componentDidMount() {}
    toggle=()=>{
        this.props.toggleFromParent();
    }
  render() {
    console.log('check child props',this.props);
    console.log('check child  open props',this.props.isOpen);
    return (
      <Modal isOpen={this.props.isOpen } toggle={()=>{this.toggle()}} className={'modal-user-container'}  size="lg" >
        <ModalHeader toggle={()=>{this.toggle()}}>Create a new user</ModalHeader>
        <ModalBody>
            <div className="modal-user-body">
                <div className="input-container">
                    <Label>Email</Label>
                    <input type="text"/>
                </div>
                <div className="input-container">
                    <Label>Password</Label>
                    <input type="password"/>
                </div>
                <div className="input-container">
                    <Label>First name</Label>
                    <input type="text"/>
                </div>
                <div className="input-container">
                    <Label>Last name</Label>
                    <input type="text"/>
                </div>
                <div className="input-container max-width-input">
                    <Label>Address</Label>
                    <input type="text"/>
                </div>
            </div>

                
        </ModalBody>
        <ModalFooter>
          <Button color="primary" className="px-3" onClick={()=>{this.toggle()}}>Save</Button>{" "}
          <Button color="secondary" className="px-3" onClick={()=>{this.toggle()}}>Close</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
