import React, { Component } from 'react';
import './App.css';
import HostName from './host/HostName';
import Player from './player/Player';
import Guest from './guest/Guest';
import AppBar from 'material-ui/AppBar';
import Peer from 'simple-peer';
import Paper from 'material-ui/Paper';

class App extends Component {
  constructor(){
    super();
    if(Peer.WEBRTC_SUPPORT){ // test for webrtc support
      this.state = {
        role: 'visitor'
      };
    } else {
      this.state = {
        role: 'unsupported'
      };
    }
  }

  getRoleContent = (role) => {
    if(this.state.role === 'host') {
      return <HostName/>;
    } else if (this.state.role === 'player') {
      return <Player/>;
    } else if (this.state.role === 'unsupported') {
      return (
        <div>
          Your browser does not support WebRTC Data Channel
        </div>
      );
    } else {
      return <Guest 
        becomeHost={() => this.setState({role: 'host'})}
        becomePlayer={() => this.setState({role: 'player'})}
        />;
    } 
  }

  render() {
    return (
      <div>
        <AppBar
          title="Jump Game"
          titleStyle={{textAlign: "center"}}
          showMenuIconButton={false}
        />
        <div id={'gameDiv'} style={{margin: 'auto', width: '800px'}}/>
        <Paper
          style={{
            height: 800,
            width: 600,
            margin: 'auto',
            marginTop: 25,
            padding: 20,
            textAlign: 'center'
        }}>
          {this.getRoleContent(this.state.role)}
        </Paper>
      </div>
    )
  }
}

export default App;
