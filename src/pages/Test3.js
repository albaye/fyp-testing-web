import React from 'react';
import Question from '../components/Question';

const Test3 = () => {
  return (
    <div className='container'>
      <div className="row my-5">
        Please complete this online form.
      </div>

      <form className="border p-3">
        {/* <div className="row">
          <div className="col">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name"></input>
          </div>
          <div className="col">
            <label for="surname" class="form-label">Surname</label>
            <input type="text" class="form-control" id="surname"></input>
          </div>
        </div> */}

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
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Test3;
