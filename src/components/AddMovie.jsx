import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GenericInput from './GenericInput';
import fields from './AddMovieFields';

export default class AddMovie extends Component {
  constructor() {
    super();
    // Set state
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action',
    };
    this.initialState = this.state; // Store initial state
    // Bind methods
    this.handleChanges = this.handleChanges.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChanges({ target }) {
    const { name, value } = target;
    const convertedValue = name === 'rating' ? value - 0 : value;
    this.setState({ [name]: convertedValue });
  }

  submitForm(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick({ ...this.state, bookmarked: false });
    this.setState(this.initialState);
  }

  render() {
    const { genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        {
          fields.map(({ id, label, name, type }) => {
            const { [name]: value } = this.state;
            return (
              <GenericInput
                key={ id }
                id={ id }
                label={ label }
                name={ name }
                type={ type }
                value={ value }
                onChangeCallback={ this.handleChanges }
              />
            );
          })
        }
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            onChange={ this.handleChanges }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={ this.submitForm }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: (value) => value,
};
