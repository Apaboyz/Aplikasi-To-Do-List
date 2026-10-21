import React, { useState } from 'react';

function FormTugas({ tambahTugas }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      tambahTugas(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-tugas">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tambahkan tugas baru..."
        className="input-tugas"
      />
      <button type="submit" className="btn-tambah">
        Tambah
      </button>
    </form>
  );
}

export default FormTugas