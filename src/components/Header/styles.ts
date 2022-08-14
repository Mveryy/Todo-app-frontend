import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;

  select {
    width: fit-content;
    align-self: center;
    border: none;
    font-size: 18px;
    margin: 20px 0;
    background-color: transparent;
    padding: 3px;

    &:focus {
      outline: none;
    }

    &:hover {
      border-radius: 8px;
      background-color: rgba(255, 255, 255, 0.24);
    }

    option {
      text-align: center;
    }
  }
`

export const InputsHeader = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    div {
      display: flex;
    }
`

export const Input = styled.input`
  width: 100%;
      height: 40px;
      border-radius: 5px;
      margin-bottom: 10px;
      margin-right: 10px;
      font-size: 16px;
      padding-left: 20px;
      padding-right: 20px;
      /* border: 1px solid black; */
      border: none;
      background: rgba(255, 255, 255, 0.24);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);

      &:focus {
        outline: none;
      }

      ::placeholder {
        color: rgb(0, 0, 0, 0.6);
      }
`
