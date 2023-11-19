import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  padding: 20px;
  border-radius: 15px;
`;

export const NameInput = styled.label`
  margin: 5px;
  padding: 0px;
  font-size: 20px;
`;

export const InputData = styled.input`
  margin: 5px;
  border: 1px solid gray;
  border-radius: 15px;
  padding-left: 10px;
`;

export const ButtonForm = styled.button`
  margin: 5px;
  border-radius: 15px;
  color: blue;
`;
