import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUsers } from "../../services/userService";
import { bind } from "lodash";
import ModalUser from './ModalUser';
class UserManage extends Component {
  constructor(props) {
    // khởi tạo biến muốn dùng với class này
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUser:false,
    };
  }
  state = {};

  async componentDidMount() {
    let response = await getAllUsers("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  }

  handleAddNewUser =()=>{
    this.setState({
      isOpenModalUser:true,
    })
  }

  toggleUserModal =()=>{
    this.setState({
      isOpenModalUser:!this.state.isOpenModalUser,
    })
  }
  // life cycle
  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <div className="users-container">
        <ModalUser
            isOpen = {this.state.isOpenModalUser}
            toggleFromParent ={this.toggleUserModal}
            test={'acb'}
           
        />
        <div className="title text-center">Manage users with BT</div>
        <div className="mx-1">
          <button className="btn btn-primary px-3" onClick={()=>this.handleAddNewUser()}>
            
            <i className ="fas fa-plus"> </i> Add new users</button>
        </div>
        <div className="users-table mt-3 mx-1">
          <table id="customers">
            <tr>
              <th>Email</th>
              <th>firstName</th>
              <th>LastName</th>
              <th>Address</th>
              <th>PhoneNumber</th>
              <th>Action</th>
            </tr>
           
              {arrUsers &&
                arrUsers.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>{item.phonenumber}</td>
                      <td>
                        <button className="btn-edit"><i className="fas fa-pencil-alt"></i></button>
                        <button className="btn-delete"><i className="fas fa-trash"></i></button>
                      </td>
                    </tr>
                  );
                })}
            
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
