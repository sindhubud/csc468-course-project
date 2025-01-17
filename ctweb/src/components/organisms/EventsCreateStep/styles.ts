import styled from "styled-components";

import * as SC from "../../../styling-config";

export const Wrapper = styled.div`
  position: relative;
  min-height: 100%;
  width: 100%;
`;

export const Actions = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  > * {
    &:nth-child(2) {
      margin-left: 25px;
    }
  }
  @media (max-width: ${SC.STYLING.cutoffSecondary}) {
    width: 100%;
    justify-content: space-between;
    > * {
      &:nth-child(2) {
        margin-left: 0;
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  width: ${SC.STYLING.buttonWidth};
`;