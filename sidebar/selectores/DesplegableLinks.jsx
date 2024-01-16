import { Icon } from "@iconify/react";
import styled from "styled-components";
import { useAuthStore } from "../../../../store/AuthStore";
export function DesplegableLinks({ state, data ,SetstateDesplegableLinks}) {
  const { signout } = useAuthStore();
  const funcion =(tipo)=>{
    if(tipo==="cerrarsesion"){
      signout();
    }
    SetstateDesplegableLinks()
  }
  return (
    <Container $isopen={state.toString()}>
      {data.map((item, index) => {
        return (
          <section className="link" onClick={()=>funcion(item.tipo)}>
            <Icon
              color="#CE82FF"
              className="icono"
              icon="heroicons:ellipsis-horizontal-circle-solid"
            />
            <span className={state ? "label_ver" : "label_oculto"}>{item.text}</span>
          </section>
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.bgtotal};
  width: 350px;
  z-index: 100; 
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.color2};
  z-index: 12;
  left: 85px;
  margin-top: -60px;
  padding: 8px;
  transform: ${({ $isopen }) =>
    $isopen === "true" ? `translateX(167px)` : `initial`};

  .link {
    margin:8px 0;
    border-radius: 15px;
    padding: 8px;
    display: flex;
    justify-content: start;
    gap: 8px;
    align-items: center;
    cursor: pointer;
    .icono {
      font-size: 25px;
    }

    &:hover {
      background-color: ${({ theme }) => theme.color2};
    }
  }
`;
