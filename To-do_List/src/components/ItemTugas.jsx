import React from 'react';

function ItemTugas({ tugas, toggleSelesai, hapusTugas }) {
  return (
    <li className={`item-tugas ${tugas.selesai ? 'selesai' : ''}`}>
      <div className="teks-tugas" onClick={() => toggleSelesai(tugas.id)}>
        <div className={`checkbox ${tugas.selesai ? 'checked' : ''}`}>
          {tugas.selesai && <span>✓</span>}
        </div>
        <span>{tugas.teks}</span>
      </div>
      <button onClick={() => hapusTugas(tugas.id)} className="btn-hapus">
        Hapus
      </button>
    </li>
  );
}

export default ItemTugas