function WorstFeaturesCheckBox({ answers, handleFeaturesValues }) {
  return (
    <ul>
      <li>
        <label>
          <input
            name="worstFeatures"
            type="checkbox"
            value="colour"
            checked={answers.worstFeatures.includes("colour")}
            onChange={handleFeaturesValues}
          />
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input
            name="worstFeatures"
            type="checkbox"
            value="sound"
            checked={answers.worstFeatures.includes("sound")}
            onChange={handleFeaturesValues}
          />
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input
            name="worstFeatures"
            type="checkbox"
            value="logo"
            checked={answers.worstFeatures.includes("logo")}
            onChange={handleFeaturesValues}
          />
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input
            name="worstFeatures"
            type="checkbox"
            value="size"
            checked={answers.worstFeatures.includes("size")}
            onChange={handleFeaturesValues}
          />
          I don't like to spend time with it
        </label>
      </li>
    </ul>
  );
}

export default WorstFeaturesCheckBox;
