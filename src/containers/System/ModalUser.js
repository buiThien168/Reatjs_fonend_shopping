import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
class ModalUser extends Component {
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

  componentDidMount() {}
    toggle=()=>{
        this.props.toggleFromParent();
    }
  handleOnChageInput = (event,id)=>{
    // bad code
      // this.state[id]= event.target.value;
      // this.setState({
      //   ...this.state//... là coppy
      // },()=>{
      //   console.log('goood bad',this.state)
      // })
    // goood code
     let copyState ={...this.setState};
     copyState[id]= event.target.value;
     this.setState({
      ...copyState
     });
  }
  checkValideInput=()=>{
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
  handleAddNewUser=()=>{
    let isValid=  this.checkValideInput();
    if(isValid===true){
      // call api create mode
      this.props.createNewUser(this.state);
    }
    
  }
  render() {
    return (
      <Modal isOpen={this.props.isOpen } toggle={()=>{this.toggle()}} className={'modal-user-container'}  size="lg" >
        <ModalHeader toggle={()=>{this.toggle()}}>Create a new user</ModalHeader>
        <ModalBody>
            <div className="modal-user-body">
                <div className="input-container">
                    <Label>Email</Label>
                    <input type="text" onChange={(event)=>{this.handleOnChageInput(event,"email")}} value={this.state.email}/>
                </div>
                <div className="input-container">
                    <Label>Password</Label>
                    <input type="password" onChange={(event)=>{this.handleOnChageInput(event,"password")}}value={this.state.password}/>
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
          <Button color="primary" className="px-3" onClick={()=>{this.handleAddNewUser()}}>Add new</Button>{" "}
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
