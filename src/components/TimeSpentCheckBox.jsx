function TimeSpentCheckBox({ answers, handleFeaturesValues }) {
  return (
    <ul>
      <li>
        <label>
          <input
            name="timeSpent"
            type="checkbox"
            value="swimming"
            checked={answers.timeSpent.includes("swimming")}
            onChange={handleFeaturesValues}
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
            checked={answers.timeSpent.includes("bathing")}
            onChange={handleFeaturesValues}
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
            checked={answers.timeSpent.includes("chatting")}
            onChange={handleFeaturesValues}
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
            checked={answers.timeSpent.includes("timespent")}
            onChange={handleFeaturesValues}
          />
          I don't like to spend time with it
        </label>
      </li>
    </ul>
  );
}

export default TimeSpentCheckBox;
