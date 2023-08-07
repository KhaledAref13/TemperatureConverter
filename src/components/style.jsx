import { styled } from "styled-components";

const StyledAppWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const StyledApp = styled.div`
  width: 30%;
  padding: 40px 30px;
  background-color: #fff;
  box-shadow: 0 0 15 0 rgba(82, 63, 105, .05);
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2{
    text-align: center;
    color: #252537;
    margin-bottom: 35px;
  }
  p{
    margin-top: 20px;
    text-align: center;
  }
  @media (max-width: 575.98px){
    width: 90%;
    padding: 30px 10px;
    h2{
      font-size: 1.2rem;
      margin-bottom: 20px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px){
    width: 60%;
    padding: 30px 20px;
    h2{
      font-size: 1.2rem;
      margin-bottom: 20px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px){
    width: 50%;
    padding: 30px 20px;
    h2{
      font-size: 1.3rem;
      margin-bottom: 20px;
    }
  }
`;

const StyledInput = styled.input.attrs({
  type: 'number'
})`
  padding: 10px;
  width: 100%;
  font-family: 'poppins'
`;

const StyledRadioDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  label{
    margin-left: 10px;
  }
`;

export { StyledAppWrapper, StyledApp, StyledInput, StyledRadioDiv }