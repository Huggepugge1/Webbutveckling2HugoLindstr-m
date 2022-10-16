function CardContainer({ id }) {
    return (
      <div className="card-container" id={id}>
        <form>
          <input placeholder="Your next big project" />
          <input type="submit" value="Add Card" />
        </form>
      </div>
    )
}

export default CardContainer;