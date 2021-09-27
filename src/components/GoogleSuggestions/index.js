// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchString: '',
  }

  updateSuggestions = event => {
    const updatedSearchInput = event.target.value
    this.setState({
      searchString: updatedSearchInput,
    })
  }

  goToSuggestion = suggestion => {
    this.setState({
      searchString: suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchString} = this.state
    const updatedSuggestionsList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchString.toLowerCase()),
    )
    return (
      <div className="background-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-icon"
        />
        <div className="search-container">
          <div className="search-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="input-box"
              value={searchString}
              placeholder="Search Google"
              onChange={this.updateSuggestions}
            />
          </div>
          <ul className="list-container">
            {updatedSuggestionsList.map(eachSuggestion => (
              <SuggestionItem
                key={eachSuggestion.id}
                suggestedListItem={eachSuggestion}
                goToSearch={this.goToSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
