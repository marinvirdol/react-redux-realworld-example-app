import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import agent from './agent';

const mapStateToProps = state => ({
  appName: state.common.appName,
  redirectTo: state.common.redirectTo,
  currentUser: state.common.currentUser,
});

const mapDispatchToProps = dispatch => ({
  onRedirect: () => ({type: 'REDIRECT'}),
  onLoad: (payload, token) => ({type: 'APP_LOAD', payload: token})
})

class App extends React.Component {
  componentDidMount() {
    const token = window.localStorage.getItem('jwt');

    if (token) {
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      this.context.router.replace(nextProps.redirectTo);
      this.props.onRedirect();
    }
  }

  render() {
    return (
      <div>
        <Header appName={this.props.appName} currentUser={this.props.currentUser}/>
        {this.props.children}
      </div>
    );
  }
}

App.contextType = {
  router: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
