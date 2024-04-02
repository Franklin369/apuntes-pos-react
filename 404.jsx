import styled from "styled-components";

export function PageNot() {
  return (
    <Container>
      <section className="home">
        <div className="home__container container">
          <div className="home__data">
            <span className="home__subtitle">página en </span>
            <h1 className="home__title">Construcción</h1>
            <p className="home__description">
              Esta página se encuentra en <br /> construcción, pequeño
              cerdecillo.
            </p>
            <a href="/" className="home__button">
              VOLVER A HOME
            </a>
          </div>

          <div className="home__img">
            <img src="https://i.ibb.co/J3ScNtK/roshi.png" alt="" />
          </div>
        </div>
      </section>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  --first-color: hsl(0, 0%, 7.0588235294117645%);
  --text-color: hsl(0, 0%, 20%);

  --body-font: "Space Grotesk", sans-serif;
  --biggest-font-size: 2.375rem;
  --normal-font-size: 0.938rem;
  --smaller-font-size: 0.75rem;

  @media screen and (min-width: 1024px) {
    --biggest-font-size: 5rem;
    --normal-font-size: 1rem;
    --smaller-font-size: 0.813rem;
  }

  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  font-weight: 500;
  color: var(--text-color);

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  .main {
    overflow: hidden;
  }

  .header {
    position: fixed;
    width: 100%;
    background-color: transparent;
    top: 0;
    left: 0;
    z-index: 100;
  }

  background-color: var(--first-color);

  display: grid;

  .home__container {
    display: grid;
    align-content: center;
    row-gap: 2.5rem;
  }

  .home__data {
    text-align: center;
  }

  .home__title {
    font-size: var(--biggest-font-size);
    margin: 0.75rem 0;
  }

  .home__button {
    margin-top: 2rem;
    display: inline-block;
    background-color: #8f45f7;
    color: #fff;
    padding: 0.8rem 1.5rem;
    border-radius: 3rem;
    transition: 0.4s;
    font-weight: 700;
  }

  .home__button:hover {
    box-shadow: 0 4px 12px hsla(38, 69%, 8%, 0.2);
  }

  .home__img img {
    width: 230px;
    animation: floaty 1.8s infinite alternate;
  }

  .home__img {
    justify-self: center;
  }

  .home__shadow {
    width: 130px;
    height: 24px;
    background-color: hsla(38, 21%, 19%, 0.16);
    margin: 0 auto;
    border-radius: 50%;
    filter: blur(7px);
    animation: shadow 1.8s infinite alternate;
  }

  .home__footer {
    display: flex;
    justify-content: center;
    column-gap: 0.5rem;
    font-size: var(--smaller-font-size);
    align-self: flex-end;
  }

  @keyframes floaty {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(15px);
    }
  }

  @keyframes shadow {
    0% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(0.85, 0.85);
    }
  }

  @media screen and (max-width: 320px) {
    .home {
      padding-top: 7rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .home__container {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      column-gap: 2rem;
    }
    .home__data {
      text-align: initial;
    }
    .home__img img {
      width: 400px;
    }
    .home__shadow {
      width: 250px;
      height: 40px;
    }
  }

  @media screen and (min-width: 1048px) {
    .container {
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media screen and (min-width: 2048px) {
    zoom: 1.7;

    .home {
      height: initial;
      row-gap: 4rem;
    }
  }

  @media screen and (min-width: 3840px) {
    zoom: 3.1;
  }
`;
