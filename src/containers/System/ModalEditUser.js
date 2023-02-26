import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
import {emitter} from '../../utils/emitter';
import _ from 'lodash';
class ModalEditUser extends Component {
    constructor(props){
        super(props);
        this.state={
          email:'',
          password:'',
          firstName:'',
          lastName:'',
          address:'',
          phonenumber:'',
        }
    }
  componentDidMount() {
    let user = this.props.currentUser;
    if(user && !_.isEmpty(user)){
        this.setState({
            id:user.id,
            email:user.email,
            password:'123456',
            firstName:user.firstName,
            lastName:user.lastName,
            address:user.address,
            phonenumber:user.phonenumber,
        })
    }
    console.log('mouting modal',this.props.currentUser)
  }
    toggle=()=>{
        this.props.toggleFromParent();
    }
  handleOnChageInput = (event,id)=>{
     let copyState ={...this.setState};
     copyState[id]= event.target.value;
     this.setState({
      ...copyState
     });
  }
  checkValidateInput=()=>{
    let isValid=true;
    let arrInput =['email','password','firstName','lastName','address','phonenumber'];
    for(let i=0;i<arrInput.length;i++){
      if(!this.state[arrInput[i]]){
        isValid=false;
        alert('Missing parameter: '+arrInput[i]);
        break;

      }
    }
    return isValid;
  }
  handleSaveUser=()=>{
    let isValid=  this.checkValidateInput();
    if(isValid===true){
      // call api edit user
      this.props.editUser(this.state);
    }
    
  }
  render() {
    // console.log('check porp',this.props)
    return (
      <Modal isOpen={this.props.isOpen } toggle={()=>{this.toggle()}} className={'modal-user-container'}  size="lg" >
        <ModalHeader toggle={()=>{this.toggle()}}>Edit a new user</ModalHeader>
        <ModalBody>
            <div className="modal-user-body">
                <div className="input-container">
                    <Label>Email</Label>
                    <input type="text" onChange={(event)=>{this.handleOnChageInput(event,"email")}} value={this.state.email} disabled/>
                </div>
                <div className="input-container">
                    <Label>Password</Label>
                    <input type="password" onChange={(event)=>{this.handleOnChageInput(event,"password")}}value={this.state.password} disabled/>
                </div>
                <div className="input-container">
                    <Label>First name</Label>
                    <input type="text" onChange={(event)=>{this.handleOnChageInput(event,"firstName")}}value={this.state.firstName}/>
                </div>
                <div className="input-container">
                    <Label>Last name</Label>
                    <input type="text" onChange={(event)=>{this.handleOnChageInput(event,"lastName")}}value={this.state.lastName}/>
                </div>
                <div className="input-container max-width-input">
                    <Label>Address</Label>
                    <input type="text" onChange={(event)=>{this.handleOnChageInput(event,"address")}}value={this.state.address}/>
                </div>
                <div className="input-container max-width-input">
                    <Label>Phone Number</Label>
                    <input type="text" onChange={(event)=>{this.handleOnChageInput(event,"phonenumber")}}value={this.state.phonenumber}/>
                </div>
            </div>

                
        </ModalBody>
        <ModalFooter>
          <Button color="primary" className="px-3" onClick={()=>{this.handleSaveUser()}}>Save changes</Button>{" "}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
