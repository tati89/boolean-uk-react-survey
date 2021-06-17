function Colour({ handleChange }) {
  return (
    <ul>
      <li>
        <input
          id="colour1"
          type="radio"
          name="colour"
          value="1"
          onChange={handleChange}
        />
        <label for="colour1">1</label>
      </li>
      <li>
        <input
          id="colour2"
          type="radio"
          name="colour"
          value="2"
          onChange={handleChange}
        />
        <label for="colour2">2</label>
      </li>
      <li>
        <input
          id="colour3"
          type="radio"
          name="colour"
          value="3"
          onChange={handleChange}
        />
        <label for="colour3">3</label>
      </li>
      <li>
        <input
          id="colour4"
          type="radio"
          name="colour"
          value="4"
          onChange={handleChange}
        />
        <label for="colour4">4</label>
      </li>
    </ul>
  );
}

export default Colour;
