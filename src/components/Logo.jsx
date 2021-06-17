function Logo({ handleChange }) {
  return (
    <ul>
      <li>
        <input
          id="logo1"
          type="radio"
          name="logo"
          value="1"
          onChange={handleChange}
        />
        <label for="logo1">1</label>
      </li>
      <li>
        <input
          id="logo2"
          type="radio"
          name="logo"
          value="2"
          onChange={handleChange}
        />
        <label for="logo2">2</label>
      </li>
      <li>
        <input
          id="logo3"
          type="radio"
          name="logo"
          value="3"
          onChange={handleChange}
        />
        <label for="logo3">3</label>
      </li>
      <li>
        <input
          id="logo4"
          type="radio"
          name="logo"
          value="4"
          onChange={handleChange}
        />
        <label for="logo4">4</label>
      </li>
    </ul>
  );
}

export default Logo;
