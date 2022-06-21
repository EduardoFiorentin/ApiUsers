import { useState } from 'react'

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

  function handleInput() {
    if (name && email && password && passwordConfirm) {
      Swal.fire('Sucesso!', 'Usuário cadastrado com sucesso!', 'success')

      if (password != passwordConfirm) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Senhas diferentes!'
        })
      }

      console.log([name, email, password])
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuário não cadastrado!',
        footer: 'Verifique as informações'
      })
    }
  }

  function listUsers() {
    Swal.fire('Em desenvolvimento')
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
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Cadastrar
          </a>
        </div>
      </div>
      <div className="rounded-md shadow w-2/5 m-auto mt-5" onClick={listUsers}>
        <a
          href="#"
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
        >
          Lista de Usuários
        </a>
      </div>
    </>
  )
}
