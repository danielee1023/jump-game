import React, { Component } from 'react';
import { serializeState } from './State';
import { createGame } from './Game';


class HostGame extends Component {
  constructor(props){
    super(props);
    const players = props.players;

    const onUpdateCb = (game) => {
      const gameState = serializeState(game.world);
      players.forEach(({peer}) => {
        peer.send(JSON.stringify(gameState));
      });
    }

    createGame({onUpdateCb: onUpdateCb});
  }

  render() {
    return <div/>
  }
}

export default HostGame;