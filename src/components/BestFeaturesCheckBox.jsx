function BestFeaturesCheckBox({ answers, handleFeaturesValues }) {
  return (
    <ul>
      <li>
        <label>
          <input
            name="bestFeatures"
            type="checkbox"
            value="color"
            checked={answers.bestFeatures.includes("color")}
            onChange={handleFeaturesValues}
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
            onChange={handleFeaturesValues}
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
            onChange={handleFeaturesValues}
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
            onChange={handleFeaturesValues}
          />
          Its big!
        </label>
      </li>
    </ul>
  );
}

export default BestFeaturesCheckBox;
