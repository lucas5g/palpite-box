import React, { useState } from 'react'
import Link from 'next/link'

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 3
  })

  const notas = [1, 2, 3, 4, 5]
  const [success, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})
  let checkedVerify
  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSuccess(true)
      setRetorno(data)

    } catch (err) {
      console.log(err)
    }
  }

  const onChange = event => {
    const { name, value } = event.target

    setForm({
      ...form, [name]: value
    })
  }

  return (
    <div className='pt-6'>
      <h1 className='text-center folt-bold my-4 text-2xl'>Críticas e Sugestões</h1>
      <p className='text-center'>
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opnião.
      </p>
      <div className="w-1/5 mx-auto">
        <label className='font-bold'>Nome</label>
        <input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' name='Nome' onChange={onChange} value={form.Nome} />

        <label className='font-bold'>E-mail:</label>
        <input type="email" className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='E-mail' name='Email' onChange={onChange} value={form.Email} />

        <label className='font-bold'>Whatsapp</label>
        <input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Whatsapp' name='Whatsapp' onChange={onChange} value={form.Whatsapp} />

        <div className="flex py-6">

          {notas.map(nota => (
            <label  key={nota} className='block w-1/6 text-center'>
              {nota} <br />
              <input type="radio" name='Nota' value={nota} onChange={onChange} checked={nota === 3 && "checked"} />
            </label>
          ))}

        </div>

        <button className='bg-blue-400 px-12 py-4 font-bold rounded-lg hover:shadow' onClick={save}>Salvar</button>
        {/*}
        <pre>
          {JSON.stringify(form, null, 2)}
        </pre>
        */}
      </div>


    </div>
  )
}

export default Pesquisa