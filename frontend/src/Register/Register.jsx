import React from 'react'
import {
  LoginBox,
  Title,
  InputGroup,
  Label,
  Input,
  Button,
  ErrorMessage,
  Container,
  LeftSection,
  Logo,
  LogoImage,
  Text,
  Subtitulo
} from '../Styles/Login.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from "../Auth/AuthContext";

const Register = () => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [nome, setNome] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('');
  const { handleCadastro } = useAuth()
  const navigate = useNavigate()

  const handleAll = async () => {
    await handleCadastro(nome, email, senha)
    setEmail("")
    setSenha("")
    navigate("/")
  };

  return (
    <Container>
      <LoginBox>
        <Title>Cadastro</Title>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <InputGroup>
          <Label htmlFor="nome">Nome:</Label>
          <Input
            type="nome"
            placeholder="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">Senha:</Label>
          <Input

            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </InputGroup>
        <Button type="submit" onClick={handleAll}>REGISTRAR</Button>
      </LoginBox>
    </Container>
  )
}

export default Register