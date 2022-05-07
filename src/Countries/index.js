import './index.css'

const Countries = props => {
  const {countryDetails, clickVisitItem} = props
  const {id, name, isVisited} = countryDetails
  const onClickTabItem = () => {
    clickVisitItem(countryDetails, isVisited, id)
  }

  return (
    <div className="container">
      <p className="para">{name}</p>
      <button
        className={!isVisited ? 'btn' : 'btn-off'}
        type="button"
        onClick={onClickTabItem}
      >
        {isVisited ? 'visited' : 'visit'}
      </button>
    </div>
  )
}

export default Countries
