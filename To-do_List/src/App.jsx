import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import FormTugas from './components/FormTugas.jsx';
import DaftarTugas from './components/DaftarTugas.jsx';

function App() {
  const [daftarTugas, setDaftarTugas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const simpananTugas = localStorage.getItem('tugas-react');
    if (simpananTugas) {
      setDaftarTugas(JSON.parse(simpananTugas));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('tugas-react', JSON.stringify(daftarTugas));
    }
  }, [daftarTugas, isLoaded]);

  const tambahTugas = (teks) => {
    const tugasBaru = { id: Date.now(), teks, selesai: false };
    setDaftarTugas([...daftarTugas, tugasBaru]);
  };

  const toggleSelesai = (id) => {
    setDaftarTugas(
      daftarTugas.map((tugas) =>
        tugas.id === id ? { ...tugas, selesai: !tugas.selesai } : tugas
      )
    );
  };

  const hapusTugas = (id) => {
    setDaftarTugas(daftarTugas.filter((tugas) => tugas.id !== id));
  };

  return (
    <div className="container">
      <div className="card">
        <Header />
        <FormTugas tambahTugas={tambahTugas} />
        <DaftarTugas 
          daftarTugas={daftarTugas} 
          toggleSelesai={toggleSelesai} 
          hapusTugas={hapusTugas} 
        />
      </div>
    </div>
  );
}

export default App