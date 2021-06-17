import { useState } from "react";

import BestFeaturesCheckBox from "./BestFeaturesCheckBox";
import WorstFeaturesCheckBox from "./WorstFeaturesCheckBox";
import TimeSpentCheckBox from "./TimeSpentCheckBox";
import Consistency from "./Consistency";
import Colour from "./Colour";
import Logo from "./Logo";

const initialAnswers = {
  bestFeatures: [],
  worstFeatures: [],
  consistency: "",
  colour: "",
  logo: "",
  timeSpent: [],
  review: "",
  username: "",
  email: "",
};

function Form({ answer }) {
  const [answers, setAnswers] = useState(initialAnswers);

  //TODO submission is not finished
  function handleSubmit(event) {
    event.preventDefault();

    alert("You are submitting ");
    setAnswers(initialAnswers);
  }

  function handleFeaturesValues(event) {
    const key = event.target.name;
    const value = event.target.value;

    setAnswers({
      ...answers,
      [key]: answers[key].includes(value)
        ? answers[key].filter((answer) => {
            return answer !== value;
          })
        : [...answers[key], value],
    });
  }

  function handleChange(event) {
    setAnswers({
      ...answers,
      [event.target.name]:
        event.target.type === "checked"
          ? event.target.checked
          : event.target.value,
    });
  }
  return (
    <form class="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div class="form__group">
        <h3>
          What would you say that are the best features of your rubber duck?
        </h3>
        <BestFeaturesCheckBox
          handleFeaturesValues={handleFeaturesValues}
          answers={answers}
        />
      </div>
      <div class="form__group">
        <h3>What would you say that are the worst bits of your rubber duck?</h3>
        <WorstFeaturesCheckBox
          handleFeaturesValues={handleFeaturesValues}
          answers={answers}
        />
      </div>
      <div class="form__group radio">
        <h3>How do you rate your rubber duck consistency?</h3>
        <Consistency handleChange={handleChange} answers={answers} />
      </div>
      <div class="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <Colour handleChange={handleChange} answers={answers} />
      </div>
      <div class="form__group radio">
        <h3>How do you rate your rubber duck logo?</h3>
        <Logo handleChange={handleChange} answers={answers} />
      </div>
      <div class="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <TimeSpentCheckBox
          handleFeaturesValues={handleFeaturesValues}
          answers={answers}
        />
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          value={answers.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input
          type="email"
          name="email"
          value={answers.email}
          onChange={handleChange}
        />
      </label>
      <input class="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

export default Form;
