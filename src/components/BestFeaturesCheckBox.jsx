function BestFeaturesCheckBox({ answers, handleChange }) {
  return (
    <ul>
      <li>
        <label>
          <input
            name="bestFeatures"
            type="checkbox"
            value="colour"
            checked={answers.bestFeatures.includes("colour")}
          />
          It's yellow!
        </label>
      </li>
      <li>
        <label>
          <input
            name="bestFeatures"
            type="checkbox"
            value="sound"
            checked={answers.bestFeatures.includes("sound")}
          />
          It squeaks!
        </label>
      </li>
      <li>
        <label>
          <input
            name="bestFeatures"
            type="checkbox"
            value="logo"
            checked={answers.bestFeatures.includes("logo")}
          />
          It has a logo!
        </label>
      </li>
      <li>
        <label>
          <input
            name="bestFeatures"
            type="checkbox"
            value="size"
            checked={answers.bestFeatures.includes("size")}
          />
          Its big!
        </label>
      </li>
    </ul>
  );
}

export default BestFeaturesCheckBox;
