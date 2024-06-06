import React, { useState } from 'react';
import './DataTable.css';
import initialData from '../data';


const Table = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // handling the search term 
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // handling the status filter
  const handleStatusFilter = (e) => {
    setStatusFilter(e.target.value);
  };

  // finding the filtered data as per the search term and status filter
  const filteredData = initialData.filter(item => {
    return (
      ((item.email.toLowerCase()).includes(searchTerm.toLowerCase()) || (item.name.toLowerCase()).includes(searchTerm.toLowerCase()) || (item.phone.toLowerCase()).includes(searchTerm.toLowerCase()) || (item.location.toLowerCase()).includes(searchTerm.toLowerCase())) &&
      (statusFilter ? (item.status).split(" ")[1] === statusFilter : true)
    );
  });

  return (
    <div className="table-container">
      <div className="table-controls">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={handleSearch} 
        />
        <select value={statusFilter} onChange={handleStatusFilter}>
          <option value="">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Suspended">Suspended</option>
          <option value="Verification">Failed</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Status</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.email}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.status}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
