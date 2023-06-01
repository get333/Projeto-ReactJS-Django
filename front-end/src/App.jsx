import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Outlet, useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'


const Login = () => {
    const [login,setLogin] = useState ('admin')
    const [senha,setSenha] = useState ('admin')
    const [erroLogin, setErroLogin] = useState(false);
    const navigate = useNavigate();
    async function loginHome(){
      try {
        if (login === 'admin' && senha === 'admin') {     
          console.log('Login realizado com sucesso');
          navigate('/Home')
        } else {
          setErroLogin(true);
        }
      } catch (error) {
        console.error(error);
      }
    }
      return (
        <>
            <h1 style={style.title}>Login</h1>
            <br></br>
            <input style={style.input} placeholder="Nome"type="text" onChange={(e) => setLogin(e.target.value)}/><br></br>
            <br></br>
            <input style={style.input}  placeholder="Senha"type="password" onChange={(e) => setSenha(e.target.value)}/>
            <br></br>
            {erroLogin && <p style={style.error}>Nome ou CPF inválido, tente login: admin e senha: admin</p>}
              <button style={style.button} onClick={loginHome}>
                Entrar
              </button>
            <Outlet />
        </>
      )
      }     

export default Login

const style= {
    input:{
        position: 'relative',
        width: '170px',
        height: '40px',
        fontSize: 15,
        left:'330%'
    },
    title:{
      position:'absolute',
      fontFamily: 'Myriad Pro Regular',
      left:'45%',
      top:'23%',
    },
    button:{
      position:'absolute',
      left:'46%',
      bottom:'30%'
    },
    error: {
      position: 'absolute',
      color: 'red',
      left: '38%',
      bottom: '24%',
    },
  }