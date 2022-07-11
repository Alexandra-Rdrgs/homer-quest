import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.updateEmailField = this.updateEmailField.bind(this);
    this.state = {
      email: "",
    };
  }

  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <>
        <h1>{this.state.email}</h1>
        <input onChange={this.updateEmailField} type="email" name="email" />
      </>
    );
  }
}

export default SignUp;
