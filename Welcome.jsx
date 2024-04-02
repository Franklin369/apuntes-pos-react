import styled from "styled-components";

import { useAuthStore } from "../../index";
export function Welcome() {
  const { cerrarSesion } = useAuthStore();
  function cerrar(){
    cerrarSesion()
   
  }
  return (
    <Container>
      <section class="home">
        <div class="description">
          <h1 class="title">
            <span class="gradient-text">BIENVENIDO AL</span> POS VENTAS CON
            REACT.JS
          </h1>
          <p class="paragraph">
            Este proyecto-curso esta en construcción, pueder probar la
            configuración y VENTAS por ahora. Si desean ser parte del proyecto
            pueden inscribirse en el botón INSCRIBIRSE:
          </p>
          <ContainerBtn>
            <a
              target="_blank"
              href="https://www.udemy.com/course/punto-de-venta-con-react-full-stack/?couponCode=SOYINVISIBLE"
              class="btn"
              aria-label="submit"
            >
              <span>Inscribirse</span>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </a>
            <a
             class="btn"
              onClick={cerrar}
              aria-label="submit"
            >
              <span>Cerrar sesión</span>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </a>
          </ContainerBtn>
        </div>

        <div class="users-color-container">
          <span class="item"></span>
          <img
            class="item"
            src="https://img.freepik.com/fotos-premium/cerdo-fondo-rosa-palabra-cerdo_593294-5557.jpg"
            alt=""
          />
          <span class="item"></span>
          <img
            class="item"
            src="https://img.freepik.com/fotos-premium/cerdo-gafas-sol-sienta-sobre-fondo-rosa_832479-1269.jpg?w=360"
            alt=""
          />

          <img
            class="item"
            src="https://img.freepik.com/fotos-premium/cerdo-fondo-rosa_832479-1261.jpg"
            alt=""
          />
          <span class="item"></span>
          <img
            class="item"
            src="https://img.freepik.com/fotos-premium/lindo-cerdo-sobre-fondo-amarillo_917664-12900.jpg"
            alt=""
          />
          <span class="item"></span>

          <span class="item"></span>
          <img
            class="item"
            src="https://png.pngtree.com/thumb_back/fw800/background/20230818/pngtree-a-pink-pig-with-pigshaped-bag-image_13062633.jpg"
            alt=""
          />
          <span class="item"></span>
          <img
            class="item"
            src="https://img.freepik.com/fotos-premium/cerdo-fondo-rojo-camiseta-que-dice-soy-cerdo_919652-1544.jpg"
            alt=""
          />
        </div>
      </section>
    </Container>
  );
}
const Container = styled.div`
  height: 100%;
  display: flex;
  overflow: hidden;

  img {
    width: 100%;
    pointer-events: none;
    user-select: none;
    object-fit: cover;
  }

  .home {
    display: grid;
    grid-template-columns: 45% 50%;
    place-items: center;
    gap: 50px;
    background: ${({ theme }) => theme.bgtotal};
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.rgbafondoanimado} 3%,
      ${({ theme }) => theme.bgtotal} 60%
    );
    overflow: hidden;
    padding: 130px 80px;
  }

  .description {
    color: ${({ theme }) => theme.text};
    padding: 0 50px;
  }

  .description > h1 {
    font-family: "Tilt Neon", sans-serif;
    font-size: clamp(2.3rem, 5vw, 4rem);
    line-height: 1.1;
    margin-bottom: 30px;
  }

  .gradient-text {
    font-family: "Tilt Neon", sans-serif;
    background-image: linear-gradient(
      90deg,
      rgb(245, 79, 7) 0%,
      rgb(243, 157, 10) 40%,
      rgb(213, 194, 21) 50%,
      rgb(243, 110, 219) 70%,
      rgb(224, 40, 55) 100%
    );
    color: transparent;
    background-size: contain;
    background-clip: text;
    -webkit-background-clip: text;
  }

  .description > p {
    font-family: "Nunito", sans-serif;
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  .btn {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    font-weight: 700;
    max-width: max-content;
    background: linear-gradient(
      90deg,
      rgb(142, 69, 247) 0%,
      rgb(142, 69, 247) 40%,
      rgb(142, 69, 247) 50%,
      rgb(142, 69, 247) 70%,
      rgb(142, 69, 247) 100%
    );
    background-size: 200%;
    background-position: left;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    border: 0;
    padding: 12px 16px;
    border-radius: 5px;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.25),
      inset 0px 2px 2px rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transition: all 0.3s ease-in;
  }

  .users-color-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;
  }

  .item {
    max-width: 200px;
    aspect-ratio: 1/1;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.5),
      inset 0px 2px 2px rgba(255, 255, 255, 0.2);
    animation: fadeIn 0.5s linear 1 forwards;
    animation-delay: calc(0.2s * var(--i));
    opacity: 0;
  }

  .item:nth-child(1) {
    background-color: #67d7e1;
    border-radius: 50% 50% 0 50%;
  }

  .item:nth-child(2) {
    border-radius: 50% 50% 0 0;
  }

  .item:nth-child(3) {
    background-color: #6cc164;
    border-radius: 50%;
  }

  .item:nth-child(4) {
    border-radius: 0 0 0 50%;
  }

  .item:nth-child(5) {
    border-radius: 0 50% 50% 0;
  }

  .item:nth-child(6) {
    background-color: #8071a8;
    border-radius: 0 50% 50% 50%;
  }

  .item:nth-child(7) {
    border-radius: 50% 50% 0 50%;
  }

  .item:nth-child(8) {
    background-color: #fe7519;
    border-radius: 50% 0 0 50%;
  }

  .item:nth-child(9) {
    background-color: #f5bec3;
    border-radius: 0 50% 50% 0;
  }

  .item:nth-child(10) {
    border-radius: 50%;
  }

  .item:nth-child(11) {
    background-color: #fcd659;
    border-radius: 50% 0 50% 50%;
  }

  .item:nth-child(12) {
    border-radius: 50% 0 0 0;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 100%;
    min-height: 100vh;
    background: rgb(67, 69, 112);
    background: radial-gradient(
      circle,
      rgba(67, 69, 112, 1) 3%,
      rgba(35, 36, 57, 1) 60%
    );
    overflow: hidden;
    padding: 90px 50px;
  }

  .card {
    max-width: 300px;
    aspect-ratio: 3/5;
    border-radius: 15px;
    margin: 20px;
    overflow: hidden;
    border-top: 1px solid rgba(255, 255, 255, 0.7);
    border-left: 1px solid rgba(255, 255, 255, 0.7);
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.5),
      inset 0px 2px 2px rgba(255, 255, 255, 0.2);
    cursor: grab;
  }

  .content {
    position: relative;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, 1fr);
    padding: 20px;
    background: rgba(104, 104, 104, 0.5);
    user-select: none;
  }

  .content::before,
  .content::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: inherit;
    background: conic-gradient(
      from var(--gradient-angle),
      rgb(109, 186, 22),
      rgb(30, 119, 95),
      rgb(55, 141, 167),
      rgb(59, 91, 174),
      rgb(144, 118, 236),
      rgb(59, 91, 174),
      rgb(55, 141, 167),
      rgb(30, 119, 95),
      rgb(109, 186, 22)
    );
    animation: rotation 8s linear infinite;
  }

  .content::after {
    filter: blur(30px);
  }

  @keyframes rotation {
    0% {
      --gradient-angle: 0deg;
    }
    100% {
      --gradient-angle: 360deg;
    }
  }

  .content img {
    aspect-ratio: 3/2;
    border-radius: 10px;
    grid-row: 1 / 5;
    margin-bottom: 20px;
    user-select: none;
    object-fit: cover;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
  }

  .content h1 {
    font-size: 1.2rem;
    color: #fff;
    text-align: center;
    grid-row: 5 / 6;
  }

  .content p {
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
    grid-row: 6 / 9;
  }

  .btn-grad {
    background-image: linear-gradient(
      to right,
      #ece9e6 0%,
      #ffffff 51%,
      #ece9e6 100%
    );
    padding: 10px 16px;
    color: #000;
    box-shadow: 0 0 5px #eee;
    outline: 0;
    font-size: 1rem;
    font-weight: 400;
    grid-row: 9 / 10;
    cursor: pointer;
    transition: all 0.5s ease-in;
  }

  .btn-grad:is(:hover, :focus-visible) {
    text-decoration: none;
  }

  .control {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 14px;
  }

  @media (max-width: 1215px) {
    .description > p {
      font-size: 1rem;
    }

    .btn {
      font-size: 1rem;
    }
  }

  @media (max-width: 1015px) {
    .home {
      grid-template-columns: 45% 50%;
      gap: 50px;
      padding: 140px 50px;
    }

    .description > p {
      font-size: 1rem;
    }

    .btn {
      padding: 8px 12px;
    }

    .btn-grad {
      padding: 8px 12px;
    }
  }

  @media (max-width: 865px) {
    .home {
      grid-template-columns: 45% 50%;
      gap: 60px;
      padding: 130px 70px;
    }
  }

  @media (max-width: 815px) {
    .home {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "userscolorcontainer"
        "description";
      gap: 30px;
      padding: 90px 80px 70px;
    }

    .users-color-container {
      grid-area: userscolorcontainer;
    }

    .description {
      grid-area: description;
      padding: 0;
      text-align: center;
    }

    .description > p {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 815px) {
    .description > p {
      font-size: 1rem;
    }
  }

  @media (max-width: 460px) {
    .home {
      gap: 0;
      padding: 30px 40px;
    }
  }
`;
const ContainerBtn = styled.div`
  display:flex;
  gap:10px;
`
