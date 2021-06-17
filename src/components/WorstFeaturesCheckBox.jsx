function WorstFeaturesCheckBox({ answers, handleChange }) {
  return (
    <ul>
      <li>
        <label>
          <input
            name="worstFeatures"
            type="checkbox"
            value="colour"
            checked={answers.worstFeatures.includes("colour")}
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
          />
          I don't like to spend time with it
        </label>
      </li>
    </ul>
  );
}

export default WorstFeaturesCheckBox;
