import styled from "styled-components";
import { useState } from "react";
import {
  LinksArray,
  SecondarylinksArray,
  ToggleTema,
} from "../../../index";
import { v } from "../../../styles/variables";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
export const MenuMovil = ({ setState }) => {
  const [state, setstate] = useState(true);

  return (
    <Container>
        
      <Main $isopen={state.toString()}>
        <Container $isopen={state.toString()} className={state ? "active" : ""}>
          <div className="Logocontent">
            <div className="imgcontent">
              <img src={v.logo} />
            </div>
            <h2>Ada369 3.0</h2>
          </div>
          {LinksArray.map(({ icon, label, to }) => (
            <div
              onClick={setState}
              className={state ? "LinkContainer active" : "LinkContainer"}
              key={label}
            >
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `Links${isActive ? ` active` : ``}`
                }
              >
                <section className={state ? "content open" : "content"}>
                  <Icon className="Linkicon" icon={icon} />
                  <span className={state ? "label_ver" : "label_oculto"}>
                    {label}
                  </span>
                </section>
              </NavLink>
            </div>
          ))}
          <Divider />
          {SecondarylinksArray.map(({ icon, label, to, color }) => (
            <div
              className={state ? "LinkContainer active" : "LinkContainer"}
              key={label}
              onClick={setState}
            >
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `Links${isActive ? ` active` : ``}`
                }
              >
                <section className={state ? "content open" : "content"}>
                  <Icon color={color} className="Linkicon" icon={icon} />
                  <span className={state ? "label_ver" : "label_oculto"}>
                    {label}
                  </span>
                </section>
              </NavLink>
            </div>
          ))}
          <div className={state ? "LinkContainer active" : "LinkContainer"}>
            <div
              className="Links"
              onClick={() => SetstateDesplegableLinks(!stateDesplegableLinks)}
            >
              <section className={state ? "content open" : "content"}>
                <Icon
                  color="#CE82FF"
                  className="Linkicon"
                  icon="heroicons:ellipsis-horizontal-circle-solid"
                />
                <span className={state ? "label_ver" : "label_oculto"}>
                  MÁS
                </span>
              </section>
            </div>
          </div>

          <ToggleTema />
        </Container>
      </Main>
    </Container>
  );
};
const Container = styled.div`
  background: ${({ theme }) => theme.bgtotal};
  color: ${(props) => props.theme.text};
  position: fixed;

  z-index: 100;
  height: 100%;
  width: 100%;
  transition: 0.1s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;
  border-right: 2px solid ${({ theme }) => theme.color2};

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colorScroll};
    border-radius: 10px;
  }

  .Logocontent {
    display: flex;
    justify-content: center;
    align-items: center;

    .imgcontent {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      cursor: pointer;
      transition: 0.3s ease;
      transform: ${({ $isopen }) =>
          $isopen === "true" ? `scale(0.7)` : `scale(1.5)`}
        rotate(${({ theme }) => theme.logorotate});
      img {
        width: 100%;
        animation: flotar 1.7s ease-in-out infinite alternate;
      }
    }
    h2 {
      color: #f88533;
      display: ${({ $isopen }) => ($isopen === "true" ? `block` : `none`)};
    }
  }
  .LinkContainer {
    margin: 9px 0;
    margin-right: 10px;
    margin-left: 8px;
    transition: all 0.3s ease-in-out;
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
  }

  .Links {
    border-radius: 12px;
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 100%;
    color: ${(props) => props.theme.text};
    height: 60px;
    position: relative;
    .content {
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
      .Linkicon {
        display: flex;
        font-size: 33px;

        svg {
          font-size: 25px;
        }
      }

      .label_ver {
        transition: 0.3s ease-in-out;
        opacity: 1;
        display: initial;
      }
      .label_oculto {
        opacity: 0;
        display: none;
      }

      &.open {
        justify-content: start;
        gap: 20px;
        padding: 20px;
      }
    }

    &:hover {
      background: ${(props) => props.theme.bgAlpha};
    }

    &.active {
      background: ${(props) => props.theme.bg6};
      border: 2px solid ${(props) => props.theme.bg5};
      color: ${(props) => props.theme.color1};
      font-weight: 600;
    }
  }
`;
const Main = styled.div`
  .Sidebarbutton {
    position: fixed;
    top: 70px;
    left: 68px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3},
      0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 3;
    transform: ${({ $isopen }) =>
      $isopen === "true" ? `translateX(173px) rotate(3.142rad)` : `initial`};
    color: ${(props) => props.theme.text};
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${() => v.lgSpacing} 0;
`;
