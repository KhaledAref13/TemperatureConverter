import { useState } from "react"
import { StyledApp, StyledAppWrapper, StyledRadioDiv } from "./style"
import Input from "./Input";
import Radio from "./Radio";

const AppWrapper = () => {

  const [temp, setTemp] = useState('');
  const [tempType, setTempType] = useState('celsius');

  const celsiusToFahrenheit = (c) => ((c * 9) / 5 + 32).toFixed(1);
  const fahrenheitToCelsius = (f) => (((f - 32) * 5) / 9).toFixed(1);

  const checkTempState = () => {
    if (temp) {
      const result = tempType === 'celsius' ? `${celsiusToFahrenheit(temp)} Fahrenheit` : `${fahrenheitToCelsius(temp).toString()} Celsius`
      if (result < 0) {
        return `${result}`;
      } else {
        return `${result}`;
      }
    }
  };

  return (
    <StyledAppWrapper>
      <StyledApp>
        <h2>Temperature Converter</h2>
        <StyledRadioDiv>
          <Radio tempType={tempType} setTempType={setTempType} />
        </StyledRadioDiv>
        <Input temp={temp} setTemp={setTemp} tempType={tempType} setTempType={setTempType} />
        {temp ? <p>{checkTempState()}</p> : ''}
      </StyledApp>
    </StyledAppWrapper>
  )
}

export default AppWrapper
