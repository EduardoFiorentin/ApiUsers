const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
  return res.json([
    {
      name: 'Yuri Rhuan dos Santos',
      email: 'yuri.santos.cco@gmail.com'
    },
    {
      name: 'Kauane Policena Artini',
      email: 'kauanepolicena@gmail.com'
    },
    {
      name: 'Lorenzo Costella',
      email: 'lorenzo.costella@gmail.com'
    },

    {
      name: 'Lauren Costella',
      email: 'lauren.costella@gmail.com'
    },

    {
      name: 'Enzo Policena Artini',
      email: 'enzo.artini@gmail.com'
    }
  ])
})

app.listen('2828')
