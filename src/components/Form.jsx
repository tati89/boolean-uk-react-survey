import BestFeaturesCheckBox from "./BestFeaturesCheckBox";
import WorstFeaturesCheckBox from "./WorstFeaturesCheckBox";
import TimeSpentCheckBox from "./TimeSpentCheckBox";
import RadioButtons from "./RadioButtons";
import { useState } from "react";

const initialAnswers = {
  bestFeatures: "",
  worstFeatures: "",
  consistency: "",
  colour: "",
  logo: "",
  timeSpent: "",
  review: "",
  username: "",
  email: "",
};

function Form() {
  const [answers, setAnswers] = useState([]);

  function handleChange(event) {
    setAnswers({ ...answers, [event.target.name]: event.target.value });
  }
  return (
    <form class="form">
      <h2>Tell us what you think about your rubber duck!</h2>
      <div class="form__group">
        <h3>
          What would you say that are the best features of your rubber duck?
        </h3>
        <BestFeaturesCheckBox handleChange={handleChange} answers={answers} />
      </div>
      <div class="form__group">
        <h3>What would you say that are the worst bits of your rubber duck?</h3>
        <WorstFeaturesCheckBox handleChange={handleChange} answers={answers} />
      </div>
      <div class="form__group radio">
        <h3>How do you rate your rubber duck consistency?</h3>
        <RadioButtons handleChange={handleChange} answers={answers} />
      </div>
      <div class="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioButtons handleChange={handleChange} answers={answers} />
      </div>
      <div class="form__group radio">
        <h3>How do you rate your rubber duck logo?</h3>
        <RadioButtons handleChange={handleChange} answers={answers} />
      </div>
      <div class="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <TimeSpentCheckBox handleChange={handleChange} answers={answers} />
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea name="review" cols="30" rows="10"></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" value="" />
      </label>
      <label>
        Leave us your email pretty please??
        <input type="email" name="email" value="" />
      </label>
      <input class="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

export default Form;
