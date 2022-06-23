import axios from 'axios'

const tempResponse = {
    "response": [
      {
        "id": 1,
        "name": "João da Silva",
        "email": "joao@mail.com",
        "phone": "(12)3456-7890",
        "cpf": "01234567891",
        "role": 0,
        "updatedAt": "2021-09-09T20:29:03.625Z",
        "createdAt": "2021-09-09T20:29:03.625Z"
      }
    ]
}

function getUser() {
    // axios.get("http://localhost:8000/api/v1/restaurantes/")
    //     .then(response => {
    //         return response
    //     })
    //     .catch(error => {
    //         return error
    //     })
    return tempResponse
}

export {getUser}