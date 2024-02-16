import styled from "styled-components";
export function Checkbox1({isChecked,onChange}) {
  
  return (
    <Container>
      <input checked={isChecked} onChange={onChange}  type="checkbox" />
      <div class="checkmark"></div>
    </Container>
  );
}
const Container = styled.label`
  --input-focus: #2d8cf0;
  --input-out-of-focus: #ccc;
  --bg-color: #fff;
  --bg-color-alt: #666;
  --main-color: #323232;
  position: relative;
  cursor: pointer;

  input {
    position: absolute;
    opacity: 0;
  }

  .checkmark {
    width: 30px;
    height: 30px;
    position: relative;
    top: 0;
    left: 0;
    border: 2px solid var(--main-color);
    border-radius: 5px;
    box-shadow: 4px 4px var(--main-color);
    background-color: var(--input-out-of-focus);
    transition: all 0.3s;
  }

   input:checked ~ .checkmark {
    background-color: var(--input-focus);
  }

  .checkmark:after {
    content: "";
    width: 7px;
    height: 15px;
    position: absolute;
    top: 2px;
    left: 8px;
    display: none;
    border: solid var(--bg-color);
    border-width: 0 2.5px 2.5px 0;
    transform: rotate(45deg);
  }

  input:checked ~ .checkmark:after {
    display: block;
  }
`;
