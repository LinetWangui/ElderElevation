"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import NavBar from "@/components/layout/NavBar";
import countriesList from "react-select-country-list";

export default function AdminCaregiversPage() {
  const { data: session, status } = useSession();
  const [caregivers, setCaregivers] = useState([]);
  const [filteredCaregivers, setFilteredCaregivers] = useState([]);
  const [profileFetched, setProfileFetched] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterGender, setFilterGender] = useState("all"); // "all", "male", "female", etc.
  const [filterStatus, setFilterStatus] = useState("all"); // "all", "accepted", "rejected", "neither"
  const countryOptions = countriesList().getData();

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/profile").then((response) => {
        response.json().then((data) => {
          setProfileFetched(true);
        });
      });

      fetch("/api/caregivers").then((res) => {
        res.json().then((caregivers) => {
          // Sort caregivers so rejected ones are at the bottom
          const sortedCaregivers = caregivers.sort((a, b) => {
            if (a.rejected && !b.rejected) return 1;
            if (!a.rejected && b.rejected) return -1;
            return 0;
          });
          setCaregivers(sortedCaregivers);
          setFilteredCaregivers(sortedCaregivers); // Initialize filtered caregivers with all caregivers
        });
      });
    }
  }, [status]);

  useEffect(() => {
    // Apply filters whenever caregivers or filter settings change
    applyFilters();
  }, [caregivers, filterGender, filterStatus, searchQuery]);

  const handleAccept = async (id) => {
    const updatedCaregiver = { _id: id, accepted: true, rejected: false };
    const res = await fetch("/api/adminCaregivers", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCaregiver),
    });

    if (res.ok) {
      const updatedCaregivers = caregivers.map((caregiver) =>
        caregiver._id === id ? { ...caregiver, accepted: true, rejected: false } : caregiver
      );
      const sortedCaregivers = updatedCaregivers.sort((a, b) => {
        if (a.rejected && !b.rejected) return 1;
        if (!a.rejected && b.rejected) return -1;
        return 0;
      });
      setCaregivers(sortedCaregivers);
    }
  };

  const handleReject = async (id) => {
    const res = await fetch(`/api/adminCaregivers?_id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      const updatedCaregivers = caregivers.map((caregiver) =>
        caregiver._id === id ? { ...caregiver, rejected: true, accepted: false } : caregiver
      );
      const sortedCaregivers = updatedCaregivers.sort((a, b) => {
        if (a.rejected && !b.rejected) return 1;
        if (!a.rejected && b.rejected) return -1;
        return 0;
      });
      setCaregivers(sortedCaregivers);
    }
  };

  const applyFilters = () => {
    let filtered = caregivers;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (caregiver) =>
          caregiver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          caregiver.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          getCountryName(caregiver.country).toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply gender filter
    if (filterGender !== "all") {
      filtered = filtered.filter((caregiver) => caregiver.gender === filterGender);
    }

    // Apply status filter
    switch (filterStatus) {
      case "accepted":
        filtered = filtered.filter((caregiver) => caregiver.accepted);
        break;
      case "rejected":
        filtered = filtered.filter((caregiver) => caregiver.rejected);
        break;
      case "neither":
        filtered = filtered.filter((caregiver) => !caregiver.accepted && !caregiver.rejected);
        break;
      default:
        // "all" case handled by default
        break;
    }

    setFilteredCaregivers(filtered);
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleGenderFilter = (gender) => {
    setFilterGender(gender);
  };

  const handleStatusFilter = (status) => {
    setFilterStatus(status);
  };

  const getCountryName = (countryCode) => {
    const country = countryOptions.find((c) => c.value === countryCode);
    return country ? country.label : "N/A";
  };

  const neitherCaregiversCount = caregivers.filter(
    (caregiver) => !caregiver.accepted && !caregiver.rejected
  ).length;

  if (status === "loading" || !profileFetched) {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return "Redirecting to login...";
  }

  return (
    <section className="mt-8">
      <NavBar isAdmin={true} neitherCaregiversCount={neitherCaregiversCount} />
      <div className="mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
          {/* Filters Section */}
          <div className="col-span-3 mb-4 flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-4">
            {/* Gender Filter */}
            <div className="w-full md:w-1/3">
              <select
                className="border rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                value={filterGender}
                onChange={(e) => handleGenderFilter(e.target.value)}
              >
                <option value="all">All Genders</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                {/* Add other genders as needed */}
              </select>
            </div>
            {/* Status Filter */}
            <div className="w-full md:w-1/3">
              <select
                className="border rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                value={filterStatus}
                onChange={(e) => handleStatusFilter(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
                <option value="neither">Neither Accepted nor Rejected</option>
              </select>
            </div>
            {/* Search Bar */}
            <div className="w-full md:w-1/3">
              <input
                type="text"
                className="border rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Search by name, city, or country"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
          {filteredCaregivers.length > 0 ? (
            filteredCaregivers.map((item) => (
              <div
                key={item._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden mb-7 text-center hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <Link href={"/caregivers/edit/" + item._id} className="">
                  <Image
                    className="w-full h-60 object-cover"
                    src={item.image}
                    alt={item.name + " image"}
                    layout="responsive"
                    width={800}
                    height={600}
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold mb-2">Details</h3>
                      <p className="text-gray-600">Phone: {item.phone}</p>
                      <p className="text-gray-600">City: {item.city}</p>
                      <p className="text-gray-600">Country: {getCountryName(item.country)}</p>
                      <p className="text-gray-600">Gender: {item.gender}</p>
                    </div>
                  </div>
                </Link>
                <div className="flex mb-3 gap-3 p-4">
                  {item.accepted ? (
                    <>
                      <button className="border rounded-full bg-green-500 px-2 ml-2">
                        Accepted
                      </button>
                      <button onClick={() => handleReject(item._id)} className="border rounded-full bg-red-400 px-2 mr-2">
                        Reject
                      </button>
                    </>
                  ) : item.rejected ? (
                    <>
                      <button className="border rounded-full bg-red-700 px-3 ml-2">
                        Rejected
                      </button>
                      <button onClick={() => handleAccept(item._id)} className="border rounded-full bg-primary px-1 ml-2">
                        Accept
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleAccept(item._id)} className="border rounded-full bg-primary px-2 ml-2">
                        Accept
                      </button>
                      <button onClick={() => handleReject(item._id)} className="border rounded-full bg-red-400 px-2 mr-2">
                        Reject
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center">No caregivers found</p>
          )}
        </div>
      </div>
    </section>
  );
}
