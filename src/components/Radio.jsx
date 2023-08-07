const Radio = ({ tempType, setTempType }) => {
  return (
    <>
      <div>
        <input type="radio" id="celsius" name="temp" value='celsius' checked={tempType === 'celsius'} onChange={(e) => setTempType(e.target.value)} />
        <label htmlFor="celsius">Celsius</label>
      </div>
      <div>
        <input type="radio" id="fahrenheit" name="temp" value='fahrenheit' checked={tempType === 'fahrenheit'} onChange={(e) => setTempType(e.target.value)} />
        <label htmlFor="fahrenheit">Fahrenheit</label>
      </div>
    </>
  )
}

export default Radio
