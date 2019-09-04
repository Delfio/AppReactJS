import React from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa'

import { Container, SubmitButton, Form } from './styles';

function Main(){
  return(
    <>
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form onSubmit={ ()=>{} }>
        <input
          type="text"
          placeholder="Adicionar repositório"
        />
      <SubmitButton disable>
        <FaPlus color="#ffff" size={14} />
      </SubmitButton>
      </Form>
    </Container>
    </>
  );
}
export default Main;
