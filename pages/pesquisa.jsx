import React, { useState } from 'react'
import Link from 'next/link'

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: 'lucas de sousa',
    Email: 'lucasdesousa19@hotmail.com',
    Whatsapp: '31 97305-6405'
  })

  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='pt-6'>
      <h1 className='text-center folt-bold my-4 text-2xl'>Críticas e Sugestões</h1>
      <p className='text-center'>
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opnião.
      </p>
      <div className="w-1/5 mx-auto">
        <label className='font-bold'>Seu nome:</label>
        <input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' />
        <input type="email" className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='E-mail' />
        <input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Whatsapp' />
        <button className='bg-blue-400 px-12 py-4 font-bold rounded-lg hover:shadow' onClick={save}>Salvar</button>
        <pre>
          {JSON.stringify(form, null,2)}
        </pre>
      </div>


    </div>
  )
}

export default Pesquisa