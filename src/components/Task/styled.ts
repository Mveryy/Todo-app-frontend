import styled from 'styled-components';
import { ITodos } from "../../context/TodoContext"

type SingleTaskProps = {
  task: ITodos
}

export const SingleTask = styled.div(({task}: SingleTaskProps) => (
  `
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  padding: 0 10px;
  border-radius: 5px;
  background: ${task.done ? "rgba(150, 255, 255, 0.70)" : "rgba(255, 255, 255, 0.70)"};
  
  .activeLabel {
    height: fit-content;
    overflow-wrap: break-word;
  }

  label {
    padding: 15px 0;
    width: 100%;
    overflow: auto;
    display: flex;
    justify-content: space-between;
    
    p {
      flex: 1;
      margin-right: 5px;
      overflow-x: hidden;
    }
  }
  
  input {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 100px;
    cursor: pointer;
  }
  
  input:checked + label {
    text-decoration: ${task.done ? "line-through" : "initial"};
  }

  `
  ));
  