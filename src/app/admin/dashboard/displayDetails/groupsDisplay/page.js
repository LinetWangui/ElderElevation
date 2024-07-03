"use client";
import { useEffect, useState } from "react";
import { useProfile } from "@/components/UseProfile";

export default function GroupsDisplayPage() {
  const [groups, setGroups] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('name'); // Default to search by name
  const { loading: profileLoading, data: profileData } = useProfile();

  useEffect(() => {
    fetch("/api/allGroupsDisplay")
      .then((response) => response.json())
      .then((data) => {
        setGroups(data);
      });
  }, []);

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

  const handleSearchByChange = (event) => {
    setSearchBy(event.target.value);
  };

  const sortedGroups = [...groups].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const filteredGroups = sortedGroups.filter((group) =>
    group[searchBy].toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <section className="mx-auto mt-8 mb-20 px-3">
      <div className="mt-8">
        <h1 className="text-center font-bold text-xl underline mb-3">
          Group Details
        </h1>
        <div className="flex justify-center mb-4">
          <div className="mr-4">
            <label className="block text-sm font-medium text-gray-700">Search by:</label>
            <select
              className="mt-1 block w-32 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm"
              value={searchBy}
              onChange={handleSearchByChange}
            >
              <option value="name">Name</option>
              <option value="categoryName">Category</option>
            </select>
          </div>
          <input
            type="text"
            placeholder={`Search by ${searchBy === 'name' ? 'Name' : 'Category'}...`}
            value={searchTerm}
            onChange={handleSearch}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        {filteredGroups?.length > 0 && (
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th onClick={() => handleSort('index')}>No {getSortIndicator('index')}</th>
                  <th onClick={() => handleSort('name')}>Name {getSortIndicator('name')}</th>
                  <th onClick={() => handleSort('email')}>Email {getSortIndicator('email')}</th>
                  <th onClick={() => handleSort('venue')}>Venue {getSortIndicator('venue')}</th>
                  <th onClick={() => handleSort('categoryName')}>Category {getSortIndicator('categoryName')}</th>
                  <th onClick={() => handleSort('members.length')}>Members {getSortIndicator('members.length')}</th>
                  <th onClick={() => handleSort('accepted')}>Accepted {getSortIndicator('accepted')}</th>
                </tr>
              </thead>
              <tbody>
                {filteredGroups.map((group, index) => (
                  <tr key={group._id || index}>
                    <td>{index + 1}</td>
                    <td>{group.name || "N/A"}</td>
                    <td>{group.email}</td>
                    <td>{group.venue || "N/A"}</td>
                    <td>{group.categoryName || "N/A"}</td>
                    <td>
                      <details>
                        <summary>{group.members.length} Members</summary>
                        <ul>
                          {group.members.map((member, idx) => (
                            <li key={idx}>{`${idx + 1}. ${member.name}`}</li>
                          ))}
                        </ul>
                      </details>
                    </td>
                    <td>{group.accepted ? "Yes" : "No"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {filteredGroups?.length === 0 && (
          <p className="text-center mt-4">No groups found.</p>
        )}
      </div>
    </section>
  );
}
