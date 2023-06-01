import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Outlet} from "react-router-dom"
import { Link } from 'react-router-dom'

const Cadastrar = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');

  const limparCampos = () => {
    setNome('');
    setCpf('');
    setEmail('');
  };

  const InserirNaAPI = async () => {
    try {
      const url = 'http://127.0.0.1:8000/alunos/';
      const data = {
        nome: nome,
        email: email,
        cpf: cpf,
      };
      const response = await axios.post(url, data);
      console.log(response.data);
      limparCampos(); 

    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
    <div style={styles.container}>
        <h1 style={styles.title}>Cadastrar</h1>
        Nome<br></br>
        <input style={styles.input} type="text" value={nome} onChange={(e) => setNome(e.target.value)}/><br></br>
        Email<br></br>
        <input style={styles.input} type="text" value={email} onChange={(e) => setEmail(e.target.value)}/><br></br>
        Cpf<br></br>
        <input style={styles.input}  type="number" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
        <br></br>
          <button onClick={InserirNaAPI}>
            Cadastrar
          </button>
        <Link to="/Home">
          <br></br>
          <button>
            Voltar
          </button>
        </Link>
        </div>
        </>
  )
}

export default Cadastrar


const styles = {
  container: {
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
    padding: '20px',
    left:'220%',
  },
  input: {
    width: '200px',
    height: '30px',
    fontSize: '16px',
    marginBottom: '10px',
  },
  title: {
    fontFamily: 'Myriad Pro Regular',
  },
};
