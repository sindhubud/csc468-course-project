import {keyframes} from "styled-components";

export const openLeft = keyframes`
    from {
        left: -100rem;
    }
    to {
        left: 0;
    }
`

export const loaderKeyFrame = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const fadeIn = "225ms cubic-bezier(0, 0, 0.2, 1) 0ms";