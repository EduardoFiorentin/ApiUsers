import { useState } from 'react'
import { ReturnUsers } from './Components/Users/ReturnUsers'
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
    if (name && email && password && passwordConfirm) {
      success()

      if (password != passwordConfirm) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Senhas diferentes!'
        })
      }

      console.log([name, email, password])
    } else {
      error()
    }
  }

  function showButtonSave() {
    setButtonSave(true)
  }

  function toHideButtonSave() {
    setButtonSave(false)
  }

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

  async function getUsers() {
    try {
      const resp = await fetch('http://localhost:2828')
      const users = await resp.json()
      showUsers(users)
    } catch (error) {
      console.log('bah tche deu erro')
    }
  }

  getUsers()

  function showUsers(users: any) {
    let output = ''

    for (let user of users) {
      output += `                <div className="m-4 bg-gray-50 p-2 rounded-md">
      <label className="font-bold">Nome</label>
      <p className="text-base font-medium text-gray-900">
        ${user.name}
      </p>
    </div>`
    }

    document.getElementById('divUsers').innerHTML = output
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
        <h1 className="font-bold text-center text-xl m-4">Dados do Usuário</h1>
        <div id="divUsers"></div>
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
