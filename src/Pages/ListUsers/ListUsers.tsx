export function ListUsers() {
  return (
    <>
      <h1 className="text-white text-center text-4xl font-bold">
        Lista dos Usuários
      </h1>
      <div className="bg-gray-100 p-5 w-2/5 m-auto rounded-md mt-5 h-auto">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email"
          />
        </div>

        <div>
          <label htmlFor="namseUser" className="sr-only">
            Nome
          </label>
          <input
            id="nameUser"
            name="nameUser"
            type="text"
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Nome Usuário"
          />
        </div>

        <div>
          <label htmlFor="dataNascimento" className="sr-only">
            Data Nascimento
          </label>
          <input
            id="dataNascimento"
            name="dataNascimento"
            type="date"
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Data Nascimento"
          />
        </div>

        <div>
          <label htmlFor="genero" className="sr-only">
            Genero
          </label>
          <input
            id="genero"
            name="genero"
            type="text"
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Genero"
          />
        </div>

        <a href="/Home">
          <div className="mt-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Voltar para o Cadastro
          </div>
        </a>
      </div>
    </>
  )
}
