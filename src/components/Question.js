const Question = ({ question, options, qid, instruction }) => {
  const renderOptions = () => {
    return options.map((item, index) => (
      <div className="form-check m-2" key={JSON.stringify(item)}>
        <input className="form-check-input" type="radio" name={qid} id={`${qid}-${index}`}></input>
        <label className="form-check-label w-100" aria-label={item} htmlFor={`${qid}-${index}`}>
          <p className="w-100">{item}</p>
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
