import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const Home = () => {
  const  [dados, setDados] = useState([]);

    useEffect(() => {
      const mostraDados = async () => {
        try{
          const response = await axios.get('http://127.0.0.1:8000/alunos/');
          setDados(response.data)
        }catch (error){
          console.error(error)
        }
      };

      mostraDados();
    },[]);

    const botaoExcluir = async (id) => {
      try {
        await axios.delete(`http://127.0.0.1:8000/alunos/${id}`);
        const updatedDados = dados.filter(item => item.id !== id);
        setDados(updatedDados);
      } catch (error) {
        console.error(error);
      }
    };
  return (
    <div style={styles.container}>
      <h1>Informações do Cadastro</h1>
      {dados.map((item) => (
      <div key={item.id}>
      <p>Nome: {item.nome}</p>
      <p>Email: {item.email}</p>
      <p>Cpf: {item.cpf}</p>
      <button onClick={() => botaoExcluir(item.id)}>Excluir</button>
      </div>))}
        <Link to="/Cadastrar">
          <button>
            Cadastrar
          </button>
        </Link>
        <br></br>
        <Link to="/">
          <button>
            Desconectar
          </button>
        </Link>
    </div>
  )
}

export default Home

const styles = {
  container: {
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
    padding: '20px',
    left:'55%',
    top:'50%',
  },
};