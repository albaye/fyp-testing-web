const Question = ({ question, options, qid, instruction }) => {
  const renderOptions = () => {
    return options.map((item, index) => (
      <div class="form-check m-2">
        <input class="form-check-input" type="radio" name={qid} id={`${qid}-${index}`}></input>
        <label class="form-check-label" for={`${qid}-${index}`}>
          {item}
        </label>
      </div>
    ))
  }

  return (
    <div className="row py-4">
      <span>{question}</span>
      {renderOptions()}
      <div className="form-text">{instruction}</div>
    </div>
  )
}

export default Question;
