import React, { Component } from "react";
import { connect } from "react-redux";

class UserList extends Component {
  render() {
    // Bóc tách những giá trị của props
    const { users, onDeleteUser, onSelectUser } = this.props;

    return (
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>User ID</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.userID}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => onSelectUser(user)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // rootState.reducerName.stateName
    users: state.user.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteUser: (userId) => {
      const action = { type: "DELETE_USER", userId };
      dispatch(action);
    },
    onSelectUser: (user) => {
      const action = { type: "SELECT_USER", user };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
