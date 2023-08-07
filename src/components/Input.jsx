import { StyledInput } from "./style"

const Input = ({ temp, setTemp }) => {
  return (
    <StyledInput placeholder="Enter the temperature" value={temp} onChange={(e) => setTemp(e.target.value)} />
  )
}

export default Input
