import React, { Component } from 'react';

import * as WebChat from 'botframework-webchat';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { token: null };
  }

  async componentDidMount() {
    const res = await fetch('https://webchat-mockbot.azurewebsites.net/directline/token', { method: 'POST' });
    const { token } = await res.json();

    this.setState(() => ({ token }));
  }

  render() {
    const {
      state: { token }
    } = this;

    return (
      !!token &&
        <WebChat.Chat
          directLine={{
            token,
            webSocket: false
          }}
          style={{
            height: '100%',
            width: '100%'
          }}
          user={{
            id: 'default-user',
            name: 'John Doe'
          }}
        />
    );
  }
}

export default App;
