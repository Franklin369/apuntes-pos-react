import styled from "styled-components";
import { Device} from "../../index";
export function ListaDesplegable({ data, setState, funcion, scroll,top,state }) {
  if(!state) return;
  function seleccionar(p) {
    funcion(p);
    setState();
  }
  return (
    <Container scroll={scroll} $top={top}>
      <section className="contentClose" onClick={setState}>
       x
      </section>
      <section className="contentItems">
        {data?.map((item, index) => {
          return (
            <ItemContainer  key={index} onClick={() => seleccionar(item)}>
              <span>🌫️</span>
              <span>{item?.nombre}</span>
            </ItemContainer>
          );
        })}
      </section>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  position: absolute;
  margin-bottom: 15px;
  top: ${(props)=>props.$top};
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  z-index: 3;
  height:230px;
  @media ${() => Device.tablet} {

  }
  .contentClose{
    font-weight:700;
    cursor: pointer;
    font-size:20px;
  }
  .contentItems {
    overflow-y: ${(props) => props.scroll};
  }
`;
const ItemContainer = styled.div`
  gap: 10px;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.bgtotal};
  }
`;
