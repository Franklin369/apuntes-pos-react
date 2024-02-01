import styled from "styled-components";
import { AccionTabla } from "../../../index";
import { v } from "../../../styles/variables";
import { Icon } from "@iconify/react";
export function ContentAccionesTabla({funcionEditar, funcionEliminar}) {
  return (
    <Container>
      <AccionTabla funcion = {funcionEditar} fontSize="18px" color="#7d7d7d" icono={<v.iconeditarTabla/>} />
      <AccionTabla funcion={funcionEliminar} fontSize="20px" color="#f76e8e" icono={<Icon icon="fluent-emoji-high-contrast:skull" />} />
    </Container>
  );
}
const Container = styled.div`
 display: flex;
  flex-wrap: wrap;
  justify-content:center;
  gap:10px;
  @media (max-width: 48em) {
    justify-content:end;
  }
`;
