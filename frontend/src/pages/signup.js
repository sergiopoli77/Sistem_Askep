import React, { useState } from 'react';
import '../assets/Signup.css';
import { db } from '../config/firebase';
import { ref, push, set, get } from 'firebase/database';

const Signup = ({ onRegistered }) => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('perawat');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('Laki-laki');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!nama || !password || !email) {
      setError('Nama, email dan password wajib diisi');
      return;
    }

    if (String(password) !== String(confirmPassword)) {
      setError('Password dan konfirmasi password tidak cocok');
      return;
    }

    setLoading(true);
    try {
      const usersRef = ref(db, 'users');
      // check uniqueness: nama or email
      const snap = await get(usersRef);
      if (snap.exists()) {
        const all = snap.val();
        for (const key in all) {
          const v = all[key];
          if (v && v.nama && String(v.nama).trim().toLowerCase() === String(nama).trim().toLowerCase()) {
            setError('Nama sudah terdaftar');
            setLoading(false);
            return;
          }
          if (v && v.email && String(v.email).trim().toLowerCase() === String(email).trim().toLowerCase()) {
            setError('Email sudah terdaftar');
            setLoading(false);
            return;
          }
        }
      }

      // simple push new user
      const newRef = push(usersRef);
      await set(newRef, {
        nama: nama.trim(),
        email: String(email).trim(),
        role: role,
        password: String(password).trim(),
        phone: String(phone).trim(),
        gender: gender,
        birthdate: birthdate || null,
        address: address || '',
        regNumber: regNumber || '',
        createdAt: Date.now()
      });

      setSuccess('Akun berhasil dibuat. Anda akan diarahkan ke login...');
      setTimeout(() => {
        setLoading(false);
        if (onRegistered) onRegistered();
      }, 1200);
    } catch (err) {
      console.error('Signup error', err);
      setError('Gagal membuat akun. Cek koneksi atau konfigurasi RTDB.');
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-card" onSubmit={handleSubmit}>
        <h2>Daftar Akun Baru</h2>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}

        <label>Nama</label>
        <input value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama lengkap" />

        <label>Telepon</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="No. HP" />

        <label>Jenis Kelamin</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>

        <label>Tanggal Lahir</label>
        <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />

        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

        <label>Konfirmasi Password</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Konfirmasi Password" />


        <button type="submit" disabled={loading}>{loading ? 'Membuat...' : 'Daftar'}</button>

        <div style={{marginTop:12,fontSize:13,textAlign:'center'}}>Sudah punya akun? <a href="/">Masuk</a></div>
      </form>
    </div>
  );
};

export default Signup;
