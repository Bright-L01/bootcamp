import React from 'react';
import './CardEditor.css';
import { Link } from 'react-router-dom';

class CardEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { front: '', back: ''};
  }

  addCard = () => {
    this.props.addCard(this.state);
    this.setState({ front: '', back: '' });
  };

  deleteCard = index => this.props.deleteCard(index);

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    console.log(this.props.cards)
    const cards = this.props.cards.map((card, index) => (
      <tr key={index}>
        <td>{this.state.isFront ? card.front : card.back}</td>
        <td>{card.back}</td>
        <td>
          <button onClick={() => this.deleteCard(index)}>Delete card</button>
        </td>
      </tr>
    ));

    return (
      <div>
        <h2>Card Editor</h2>
        <table>
          <thead>
            <tr>
              <th>Front</th>
              <th>Back</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{cards}</tbody>
        </table>
        <br />
        <input
          name="front"
          onChange={this.handleChange}
          placeholder="Front of card"
          value={this.state.front}
        />
        <input
          name="back"
          onChange={this.handleChange}
          placeholder="Back of card"
          value={this.state.back}
        />
        <button onClick={this.addCard}>Add card</button>
        <hr />
        <button onClick={() => this.setState(prevState => ({ isFront: !prevState.isFront }))}>
          Flip Card
        </button>
        <Link to="/viewer">Go to card viewer</Link>
      </div>
    );
  }
}

export default CardEditor;