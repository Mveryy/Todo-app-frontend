import styled from "styled-components";

export const ToDo = styled.div`
  height: 600px;
  width: 60%;
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  /* overflow: auto; */
  background: rgba(255, 255, 255, 0.24);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const SingleTask = styled.div`
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0;
  }

  
  h3 {
    margin-top: 150px;
    color: rgb(0, 0, 0, 0.8);
    text-align: center;
    font-size: 18px;
  }
`