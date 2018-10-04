import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DistrictRepository from './helper.js';

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schoolName: ''
    }
  }

saveUserInput = (e) => {
  this.setState({
    schoolName: e.target.value
  })
  this.props.filterCards(this.state.schoolName)
}

render() { 
  return (
    <div>
      <form className="search-field">
        <input type="text" 
               onChange={(e) => {this.saveUserInput(e)}
              }
        />
      </form>
    </div>
   )
 }
}

export default SearchForm; 