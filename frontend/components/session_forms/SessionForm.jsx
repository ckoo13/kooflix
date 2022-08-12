import React from 'react'

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }
  
    render() {
        return (
        <div>
            <h3>{this.props.formType}</h3>
            <form onSubmit={this.handleSubmit}>
                <label>Email
                    <input type="text" value={this.state.email} onChange={this.update('email')} />
                </label>
                <label>Password
                    <input type="text" value={this.state.password} onChange={this.update('password')} />
                </label>
                <input type="submit" value={this.props.formType} />
                <br/>

                {this.props.navLink}
            </form>
        </div>
    )
  }
}
