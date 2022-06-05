import React, { useEffect } from 'react';
import Question from '../components/Question';
const positions = ['Event name,x,y,timestamp']
const Test3 = () => {
  useEffect(() => {
    const root = document.getElementById('root')
    root.className += 'hide'
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (e) => {
    positions.push(`scroll,,,${e.timeStamp}\n`)
  }


  const submitHandler = (e) => {
    e.preventDefault()

    console.log('unmounting')
    const element = document.createElement("a");
    const file = new Blob(positions, { type: 'text/csv' });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.csv";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }
  return (
    <div className='container' id='test3'
      onMouseMove={(e) => {
        // console.log('mouse move x ', e.pageX, ' y ', e.pageY, e);
        positions.push(`mouse move,${e.pageX},${e.pageY},${e.timeStamp}\n`)
      }}
      onClick={(e) => {
        // console.log('mouse clicked', e);
        positions.push(`click,${e.pageX},${e.pageY},${e.timeStamp}\n`)
      }}
    >
      <div className="row py-5">
        Please complete this online form.
      </div>

      <form className="border p-3" onSubmit={submitHandler}>
        {/* Q1. */}

        <div className="row my-2">
          <div className="col">
            <Question
              question="Q1. Where do you prefer to watch films?"
              options={['Cinema', 'Online']}
              qid='q1'
              instruction="If you have chosen cinema go to question 3, otherwise go to question 4."
            />

            <Question
              question="Q2. How important is the soundtrack to you in a film?"
              options={['Very Important', 'Important', 'Unimportant', 'Not important at all']}
              qid='q2'
              instruction="Please submit the form"
            />
            <Question
              question="Q3. How often do you go to the cinema?"
              options={['Weekly', 'Monthly', 'Once a year']}
              qid='q3'
              instruction="Go to question 6"
            />
            <Question
              question="Q4. What do you use to watch films?"
              options={['Netflix', 'Prime Video']}
              qid='q4'
              instruction="Go to question 6"
            />

            <Question
              question="Q5. What makes you choose a film?"
              options={['Trailer', 'Adverts', 'Reviews', 'Actors', 'Word of mouth']}
              qid='q5'
              instruction="Please go to question 9"
            />
          </div>

          {/* second column */}
          <div className="col">
            <Question
              question={`Q6. Do you prefer Empire Strikes or Titanic?`}
              options={['Empire Strikes', 'Titanic']}
              qid='q6'
              instruction='If you have chosen Empire Strikes please go to Q7. Otherwise, go to Q10.'
            />
            <Question
              question='Q7. Which of these Star Wars movie is your favourite?'
              options={['Episode I - The Phantom Menace',
                'Episode VI - Return of the Jedi',
                'Episode VII - The Force Awakens',
                'Episode IX - The Rise of Skywalker'
              ]}
              qid='q7'
              instruction='Please go to Q8.'
            />

            <Question
              question='Q8. Do you prefer a male or female lead?'
              options={['Male', 'Female', "Don't mind"]}
              qid='q8'
              instruction="Please go to Q5"
            />

            <Question
              question='Q9. Do you generally prefer Drama or Science Fiction Movies?'
              options={['Drama', 'Science Fiction']}
              qid='q9'
              instruction='Go to question 2.'
            />

            <Question
              question='Q10. What was your favourite thing about Titanic?'
              options={['The characters', 'Disaster Drama', 'Special Effects', 'Historical basis']}
              qid='q10'
              instruction='Please go to Q8.'
            />

          </div>
        </div>
        <p type="submit" className="btn btn-primary">Submit</p>
      </form>
    </div>
  )
}

export default Test3;
