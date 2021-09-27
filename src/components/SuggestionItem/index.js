// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestedListItem, goToSearch} = props
  const selectSuggestion = () => {
    goToSearch(suggestedListItem.suggestion)
  }
  return (
    <li className="search-item">
      <p className="search-title">{suggestedListItem.suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        onClick={selectSuggestion}
        alt="arrow"
        className="goto-icon"
      />
    </li>
  )
}

export default SuggestionItem
