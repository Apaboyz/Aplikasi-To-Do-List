import React from 'react';
import ItemTugas from './ItemTugas.jsx';

function DaftarTugas({ daftarTugas, toggleSelesai, hapusTugas }) {
  if (daftarTugas.length === 0) {
    return <p className="pesan-kosong">Belum ada tugas. Yay!</p>;
  }

  return (
    <ul className="daftar-tugas">
      {daftarTugas.map((tugas) => (
        <ItemTugas
          key={tugas.id}
          tugas={tugas}
          toggleSelesai={toggleSelesai}
          hapusTugas={hapusTugas}
        />
      ))}
    </ul>
  );
}

export default DaftarTugas