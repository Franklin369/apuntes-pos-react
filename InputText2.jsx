import styled from "styled-components";

export function InputText2({ children }) {
  return (
    <Container>
      <div className="form__group field">{children}</div>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;

  .form__group {
    position: relative;
    width: 100%;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: ${(props) => props.theme.text};
    transition: background-color 5000s ease-in-out 0s;
  }
  .form__field {
    border: 2px solid ${({ theme }) => theme.color2};
    border-radius: 15px;
    font-family: inherit;
    outline: 0;
    font-size: 17px;
    color: ${(props) => props.theme.text};
    padding: 12px;
    background: inherit;
    transition: border-color 0.2s;
    width: 94%;
    &.disabled {
      color: #696969;
      background: #2d2d2d;
      border-radius: 8px;
      margin-top: 8px;
      border-bottom: 1px dashed #656565;
    }
  }
  .form__field:placeholder-shown ~ .form__label {
    font-size: 17px;
    cursor: text;
  }

  .form__field:focus {
    font-weight: 700;
    border-image-slice: 1;
    border: 2px solid #1cb0f6;
  }
  /* reset input */
  .form__field:required,
  .form__field:invalid {
    box-shadow: none;
  }
`;
