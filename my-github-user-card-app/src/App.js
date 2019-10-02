import React from 'react';
import axios from 'axios';
import Card from './Components/Card';
import FollowerCards from './Components/FollowerCards';

class App extends React.Component {
  state = {
    myGithub: {},
    myFollowers: []
  }
  componentDidMount() {
    axios
      .get('https://api.github.com/users/chards79')
      .then(res => {
        console.log(res.data);
        this.setState({
          myGithub: res.data
        });
      })
      .catch(err => console.log('Nope', err));

    axios
      .get('https://api.github.com/users/chards79/followers')
      .then(res => {
        console.log(res);
        this.setState({
          myFollowers: res.data
        });
      })
      .catch(err => console.log('No followers', err));
  }

  render() {
    return (
      <div className="App">
        <h1>Github Profile Cards</h1>
        <Card myGithub={this.state.myGithub} />
        <h2>My Followers</h2>
        <FollowerCards myFollowers={this.state.myFollowers} />
      </div>
    )
  }
}
export default App;
