import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  width: 100%;
  overflow: auto;
  padding: 20px 0;

`

export const Footer = styled.footer`
  color: rgb(0, 0, 0, 1);
  text-align: center;
  font-size: 14px;

  h3 {
    margin-top: 70px;
    ;
  }

  a {
    all: unset;
    cursor: pointer;
  }
  
`