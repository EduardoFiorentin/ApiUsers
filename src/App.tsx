import { useEffect, useState } from 'react'
import Swal from "sweetalert2"

// API Functions
import {getUser} from './service/api'

interface users {
  name: string
  email: string
  password: string
}

export function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const[cpf, setCpf] = useState('')
  const [phone, setPhone] = useState('')

  const [buttonSave, setButtonSave] = useState(false)

  function error() {
    Swal.fire({
      icon: 'error',
      title: 'Oops... ',
      text: 'Verifique as informações e tente novamente!'
    })
  }

  function success() {
    Swal.fire('Sucesso!', 'Usuário cadastrado com sucesso!', 'success')
  }

  function handleInput() {
    const sizeName = name.length
    if (sizeName < 10) {
      error()
    }
    if (name && email && password && passwordConfirm && cpf && phone) {
      success()

      if (password != passwordConfirm) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Senhas diferentes!'
        })
      }

      console.log(
        {
          "id": 1,
          "name": name,
          "email": email,
          "password": password,
          "phone": phone,
          "cpf": cpf,
          "role": 0,
          "updatedAt": new Date(),
          "createdAt": new Date()
        }
      )
    } else {
      error()
    }
  }

  // const users = [
  //   {
  //     name: 'Yuri Rhuan dos Santos',
  //     email: 'yuri.santos.cco@gmail.com'
  //   },
  //   {
  //     name: 'Kauane Policena Artini',
  //     email: 'kauanepolicena@gmail.com'
  //   }
  // ]
  const users = getUser()

  function showButtonSave() {
    setButtonSave(true)
  }

  function toHideButtonSave() {
    setButtonSave(false)
  }

  //API Config
    //load users from data base
  useEffect(() => {
    const users = getUser()
    // console.log(response)
  }, [])

  function deleteUser() {
    Swal.fire({
      title: 'Realmente deseja escluir o usuário?',
      showDenyButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: `Excluir`
    }).then(result => {
      if (result.isConfirmed) {
        Swal.fire('Excluido!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Cancelado!', '', 'info')
      }
    })
  }

  return (
    <>
      <h1 className="text-white text-center text-4xl font-bold">
        API de Usuários
      </h1>
      <div className="bg-gray-100 p-5 w-2/5 m-auto rounded-md mt-5 h-auto">
        <div className="mt-3 mb-3">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Nome
            </span>
            <input
              type="text"
              name="nome"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Seu Nome"
              onChange={e => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="mt-3 mb-3">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              CPF
            </span>
            <input
              type="text"
              name="cpf"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Seu CPF"
              onChange={e => setCpf(e.target.value)}
            />
          </label>
        </div>
        <div className="mt-3 mb-3">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Telefone
            </span>
            <input
              type="phone"
              name="nome"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Seu Numero de telefone"
              onChange={e => setPhone(e.target.value)}
            />
          </label>
        </div>
        <div className="mt-3 mb-3">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Email
            </span>
            <input
              type="email"
              name="email"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="you@example.com"
              onChange={e => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="mt-3 mb-3">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Senha
            </span>
            <input
              type="password"
              name="password"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Senha"
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="mt-3 mb-3">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Confirmar senha
            </span>
            <input
              type="password"
              name="password"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Confirmar senha"
              onChange={e => setPasswordConfirm(e.target.value)}
            />
          </label>
        </div>

        <div className="rounded-md shadow" onClick={() => handleInput()}>
          <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
            Cadastrar
          </a>
        </div>
      </div>
      <div className="bg-gray-100 p-5 w-2/5 m-auto rounded-md mt-5 h-auto">
        <div className="relative grid gap-6 bg-gray-50 rounded-md px-5 py-6 sm:gap-8 sm:p-8 rounded-md">
          {users.response.map(item => {
            return (
              <a className="-m-3 p-3 items-start rounded-lg bg-gray-100">
                <h1 className="font-bold text-center text-xl m-4">
                  Dados do Usuário {item.name}
                </h1>
                <div className="m-4 bg-gray-50 p-2 rounded-md">
                  <label className="font-bold">Nome</label>
                  <p className="text-base font-medium text-gray-900">
                    {item.name}
                  </p>
                </div>
                <div className="m-4 bg-gray-50 p-2 rounded-md">
                  <label className="font-bold">E-mail</label>
                  <p className="text-base font-medium text-gray-900">
                    {item.email}
                  </p>
                </div>
                <div className="m-4 bg-gray-50 p-2 rounded-md">
                  <label className="font-bold">CPF</label>
                  <p className="text-base font-medium text-gray-900">
                    {item.cpf}
                  </p>
                </div>
                <div className="m-4 bg-gray-50 p-2 rounded-md">
                  <label className="font-bold">Telefone</label>
                  <p className="text-base font-medium text-gray-900">
                    {item.phone}
                  </p>
                </div>
                <div className="flex gap-2 w-1/4 m-auto">
                  <div className="rounded-md shadow" onClick={showButtonSave}>
                    <a className="w-10 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Editar
                    </a>
                  </div>

                  <div
                    className="rounded-md shadow"
                    id="buttonDeleteUser"
                    onClick={deleteUser}
                  >
                    <a className="w-10 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10">
                      Excluir
                    </a>
                  </div>
                </div>
                {buttonSave ? (
                  <div
                    className="rounded-md shadow cursor-pointer"
                    onClick={toHideButtonSave}
                  >
                    <a className="w-auto mt-5 m-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 md:py-4 md:text-lg md:px-10">
                      Salvar
                    </a>
                  </div>
                ) : (
                  <div className="rounded-md shadow">
                    <a className="w-auto mt-5 m-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-300  md:py-4 md:text-lg md:px-10">
                      Salvar
                    </a>
                  </div>
                )}
              </a>
            )
          })}
        </div>
      </div>

      <footer className="bg-indigo-800 text-white text-center w-96 m-auto mt-5 rounded-md p-2 hover:bg-indigo-700">
        by
        <a
          className="font-bold ml-2 hover:underline"
          href="https://github.com/yurirsantos"
          target="_blanck"
        >
          Yuri R. Santos
        </a>
      </footer>
    </>
  )
}
