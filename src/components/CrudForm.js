import React, { useState } from 'react';

const initialForm = {
  name: '',
  constellation: '',
  id: null,
};

const CrudForm = () => {
  const [form, setForm] = useState(initialForm);
  const handleChance = (e) => {};
  const handleSubmit = (e) => {};
  const handleReset = (e) => {};

  return (
    <div>
      <h3>AgregarCrudForm</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Nombre'
          onChange={handleChance}
          value={form.name}
        />
        <input
          type='text'
          name='constellation'
          placeholder='Constelacion'
          onChange={handleChance}
        />
        <input type='submit' value='Enviar' />
        <input type='reset' value='Limpiar' onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
