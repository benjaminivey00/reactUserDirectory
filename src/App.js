import React from 'react';

import Header from './components/Header.jsx'
import employees from './employees.json'
import Employee from './components/Employee.jsx';

export default function App() {
  return (
    <div>
      <Header />
      <Employee employees={employees} />
    </div >
  );
}