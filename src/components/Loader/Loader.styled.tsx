import styled from 'styled-components';

type LoaderWrapperType = {
    disable: boolean
}

export const LoaderWrapper = styled.div<LoaderWrapperType>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  display: ${props => props.disable === true ? 'flex' : 'none'};
`