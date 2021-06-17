function TimeSpentCheckBox({ answers, handleChange }) {
  return (
    <ul>
      <li>
        <label>
          <input
            name="timeSpent"
            type="checkbox"
            value="swimming"
            checked={answers.worstFeatures.includes("swimming")}
          />
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input
            name="timeSpent"
            type="checkbox"
            value="bathing"
            checked={answers.worstFeatures.includes("bathing")}
          />
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input
            name="timeSpent"
            type="checkbox"
            value="chatting"
            checked={answers.worstFeatures.includes("chatting")}
          />
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input
            name="timeSpent"
            type="checkbox"
            value="timespent"
            checked={answers.worstFeatures.includes("timespent")}
          />
          I don't like to spend time with it
        </label>
      </li>
    </ul>
  );
}

export default TimeSpentCheckBox;
