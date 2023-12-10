import React from 'react';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';
import Homepage from './Homepage';
// import PageRegister from './PageRegister';
// import PageLogin from './PageLogin';

import { Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
// import { connect } from 'react-redux';
// import { isLoaded } from 'react-redux-firebase';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards:[
        {front: 'front1', back: 'back1'},
        {front: 'front2', back: 'back2'},
      ]
    };
  }


  addCard = card => {
      const cards = this.state.cards.slice().concat(card);
      this.setState({ cards });
  }

  deleteCard = index => { 
      const cards = this.state.cards.slice();
      cards.splice(index, 1);
      this.setState({ cards });
  }

  render () { 
      return (
          <Routes>

              <Route exact path="/" component={Homepage} /> 
              <Route exact path ="/editor" element = {<CardEditor cards={this.state.cards} addCard={this.addCard} deleteCard={this.deleteCard} />} />

              <Route exact path ="/viewer" element = {<CardViewer cards={this.state.cards} />} />
          </Routes>
      );
  } 

}

export default App;
