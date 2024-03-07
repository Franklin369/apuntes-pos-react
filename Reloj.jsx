import { useEffect, useState } from "react";
import styled from "styled-components";
export function Reloj() {
  const [hora, setHora] = useState("");
  const [fecha, setFecha] = useState("");
  useEffect(() => {
    const mostrarReloj = () => {
      const fechaActual = new Date();
      const horaActual = fechaActual.getHours();
      const minutosActual = fechaActual.getMinutes();
      const segundosActual = fechaActual.getSeconds();
      const mesActual = fechaActual.getMonth();
      const diaActual = fechaActual.getDate();
      const añoActual = fechaActual.getFullYear();

      const dias = [
        "domingo",
        "lunes",
        "martes",
        "miércoles",
        "jueves",
        "viernes",
        "sábado",
      ];
      const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "noviembre",
        "diciembre",
      ];

      const mes = meses[mesActual];
      const hr = horaActual > 12 ? horaActual - 12 : horaActual;
      const am = horaActual < 12 ? "AM" : "PM";

      const formattedHora = horaActual < 10 ? "0" + horaActual : horaActual;
      const formattedMinutos =
        minutosActual < 10 ? "0" + minutosActual : minutosActual;
      const formattedSegundos =
        segundosActual < 10 ? "0" + segundosActual : segundosActual;

      setHora(`${hr}:${formattedMinutos}:${formattedSegundos}:${am}`);
      setFecha(
        `${dias[fechaActual.getDay()]} ${diaActual} ${mes} del ${añoActual}`
      );
    };

    const intervalId = setInterval(mostrarReloj, 1000);

    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []); // El segundo argumento [] indica que este efecto se ejecuta solo al montar el componente

  return (
    <Container>
      <div class="cont-reloj">
        <div class="reloj" id="reloj">
          {hora}
        </div>
        <div class="datos">
          <span id="fec_Datos">{fecha}</span>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .cont-reloj {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: bold;
  }
  .reloj {
    font-size: 1em;
  }
  .datos {
    font-size: 1em;
   
  }
`;
