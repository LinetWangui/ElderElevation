"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useProfile } from "@/components/UseProfile";
import countriesList from "react-select-country-list";

export default function CaregiversDisplayPage() {
  const [caregivers, setCaregivers] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');
  const { loading: profileLoading, data: profileData } = useProfile();
  const countryOptions = countriesList().getData();

  useEffect(() => {
    fetch("/api/caregivers").then((response) => {
      response.json().then((data) => {
        setCaregivers(data);
      });
    });
  }, []);

  const getCountryName = (countryCode) => {
    const country = countryOptions.find((c) => c.value === countryCode);
    return country ? country.label : "N/A";
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCaregivers = caregivers.filter((caregiver) =>
    caregiver.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCaregivers = [...filteredCaregivers].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const getSortIndicator = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? '▲' : '▼';
    }
    return '';
  };

  if (profileLoading) {
    return "Loading ...";
  }

  if (!profileData?.admin) {
    return (
      <div className="text-center my-28 font-extrabold text-5xl">
        <p style={{ color: "red" }}>Unauthorized!!!</p>
      </div>
    );
  }

  return (
    <section className="mx-auto mt-8 mb-20 pb-10 px-3">
      <div className="mt-8">
        <h1 className="text-center font-bold text-xl underline mb-3">
          Caregivers Details
        </h1>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search by Name..."
            value={searchTerm}
            onChange={handleSearch}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        {sortedCaregivers?.length > 0 && (
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th onClick={() => handleSort('index')}>No {getSortIndicator('index')}</th>
                  <th onClick={() => handleSort('name')}>Name {getSortIndicator('name')}</th>
                  <th onClick={() => handleSort('email')}>Email {getSortIndicator('email')}</th>
                  <th onClick={() => handleSort('city')}>City {getSortIndicator('city')}</th>
                  <th onClick={() => handleSort('country')}>Country {getSortIndicator('country')}</th>
                  <th onClick={() => handleSort('phone')}>Phone {getSortIndicator('phone')}</th>
                  <th onClick={() => handleSort('DOB')}>DOB {getSortIndicator('DOB')}</th>
                  <th onClick={() => handleSort('gender')}>Gender {getSortIndicator('gender')}</th>
                  <th onClick={() => handleSort('accepted')}>Accepted {getSortIndicator('accepted')}</th>
                </tr>
              </thead>
              <tbody>
                {sortedCaregivers.map((caregiver, index) => (
                  <tr key={caregiver._id || index}>
                    <td>{index + 1}</td>
                    <td>{caregiver.name || "N/A"}</td>
                    <td>{caregiver.email}</td>
                    <td>{caregiver.city || "N/A"}</td>
                    <td>{getCountryName(caregiver.country)}</td>
                    <td>{caregiver.phone || "N/A"}</td>
                    <td>{caregiver.DOB ? new Date(caregiver.DOB).toLocaleDateString() : "N/A"}</td>
                    <td>{caregiver.gender ? capitalizeFirstLetter(caregiver.gender) : "N/A"}</td>
                    <td>{caregiver?.accepted ? "Yes" : "No"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {sortedCaregivers?.length === 0 && (
          <p className="text-center mt-4">No caregivers found.</p>
        )}
      </div>
    </section>
  );
}
