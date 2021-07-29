import React from "react";
import styled from "styled-components";

export default function ScrollView({ children }) {
  return (
    <ScrollRoot>
      <Wrapper
        className="scroll_viewer-container"
      >
        {children}
      </Wrapper>
    </ScrollRoot>
  );
}

const ScrollRoot = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    flex: 1;
    position: relative;
    overflow: hidden;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  overflow: auto;

  -ms-overflow-style: none; 
  ::-webkit-scrollbar { 
    display: none; 
}
`;
