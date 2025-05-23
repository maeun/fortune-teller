// src/components/InputForm.js
import React, { useState } from 'react';

const categories = ['Love', 'Career', 'Health', 'Family', 'Money', 'Education', 'Other'];

export default function InputForm({ onSubmit }) {
  const [form, setForm] = useState({
    givenName: '',
    familyName: '',
    dob: '',
    city: '',
    nationality: '',
    category: categories[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>🔮 Fortune Telling Form</h2>

      <input
        type="text"
        name="givenName"
        placeholder="Given Name"
        value={form.givenName}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <input
        type="text"
        name="familyName"
        placeholder="Family Name"
        value={form.familyName}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <input
        type="date"
        name="dob"
        value={form.dob}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={form.city}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <input
        type="text"
        name="nationality"
        placeholder="Nationality"
        value={form.nationality}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        style={styles.select}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <button type="submit" style={styles.button}>Get My Fortune</button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: 400,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '1rem'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc'
  },
  select: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '12px',
    backgroundColor: '#6200ee',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};
