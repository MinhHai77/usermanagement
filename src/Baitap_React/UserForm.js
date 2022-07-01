import React, { Component } from "react";
import { connect } from "react-redux";

class UserForm extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      // object values dùng để lưu trữ các giá trị của inputs
      values: {
        Name: "",
        email: "",
        Phone: "",
        UserID: "",
      },
    };
  }

  handleChange = (evt) => {
    const { value, name } = evt.target;

    this.setState((state) => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }));
  };

  handleSubmit = (evt) => {
    // Ngăn chặn hành vi reload form
    evt.preventDefault();

    if (this.props.user.id) {
      // Cập nhật
      this.props.onUpdateUser(this.props.user.id, this.state.values);
    } else {
      // Tạo mới
      const id = Math.floor(Math.random() * 100);
      const user = { ...this.state.values, id };
      this.props.onCreateUser(user);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    // Kiểm tra nếu props user thay đổi sẽ set state lại cho object values
    if (prevProps.user.id !== this.props.user.id) {
      this.setState({ values: { ...this.props.user } });
    }
  }

  render() {
    const { values } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                 Name
              </label>
              <input
                type="text"
                id="Name"
                className="form-control"
                name="Name"
                value={values.Name}
                onChange={this.handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
                value={values.email}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="col-sm-6">
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="form-control"
                name="phone"
                value={values.phone}
                onChange={this.handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="userID" className="form-label">
                User ID
              </label>
              <input
                type="text"
                id="userID"
                className="form-control"
                name="userID"
                value={values.userID}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <button className="btn btn-success">ADD </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.selectedUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateUser: (user) => {
      const action = { type: "CREATE_USER", user };
      dispatch(action);
    },

    onUpdateUser: (userId, user) => {
      const action = { type: "UPDATE_USER", userId, user };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
