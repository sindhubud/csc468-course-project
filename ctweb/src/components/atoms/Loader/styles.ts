import styled from "styled-components";

import {loaderKeyFrame} from "../../../animations";

export const Container = styled.div`
  height: 100px;
  width: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

export const Blade = styled.div`
  background-color: ${props => props.theme.colors.loader.primary};
  position: absolute;
  left: 0.4629em;
  bottom: 0;
  width: 0.0725em;
  height: 0.2777em;
  border-radius: 0.0em;
  transform-origin: center -0.2222em;
  -webkit-animation: ${loaderKeyFrame} 0.750s linear infinite;
  animation: ${loaderKeyFrame} 0.750s linear infinite;
`;

export const Spinner = styled.div`
    font-size: 27.5px;
    position: relative;
    display: inline-block;
    width: 1em;
    height: 1em;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    & ${Blade}:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -0.6875s;
    }
    & ${Blade}:nth-child(2) {
      transform: rotate(30deg);
      animation-delay: -0.625s;
    }
    & ${Blade}:nth-child(3) {
      transform: rotate(60deg);
      animation-delay: -0.5625s;
    }
    & ${Blade}:nth-child(4) {
      transform: rotate(90deg);
      animation-delay: -0.5s;
    }
    & ${Blade}:nth-child(5) {
      transform: rotate(120deg);
      animation-delay: -0.4375s;
    }
    & ${Blade}:nth-child(6) {
      transform: rotate(150deg);
      animation-delay: -0.375s;
    }
    & ${Blade}:nth-child(7) {
      transform: rotate(180deg);
      animation-delay: -0.3125s;
    }
    & ${Blade}:nth-child(8) {
      transform: rotate(210deg);
      animation-delay: -0.250s;
    }
    & ${Blade}:nth-child(9) {
      transform: rotate(240deg);
      animation-delay: -0.1875s;
    }
    & ${Blade}:nth-child(10) {
      transform: rotate(270deg);
      animation-delay: -0.125s;
    }
    & ${Blade}:nth-child(11) {
      transform: rotate(300deg);
      animation-delay: -0.0625s;
    }
    & ${Blade}:nth-child(12) {
      transform: rotate(330deg);
      animation-delay: 0.0s;
    }
`;