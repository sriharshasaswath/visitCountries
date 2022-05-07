import './index.css'

const Countries = props => {
  const {flagDetails, clickRemoveItem} = props
  const {name, imageUrl, id} = flagDetails
  const onClickRemove = () => {
    clickRemoveItem(id)
  }
  return (
    <div className="flag-container">
      <img src={imageUrl} alt="img" className="img" />
      <span className="remove-container">
        <p className="para">{name}</p>
        <button className="remove-btn" type="button" onClick={onClickRemove}>
          Remove
        </button>
      </span>
    </div>
  )
}

export default Countries
