"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import NavBar from "@/components/layout/NavBar";
import Plus from "@/components/icons/Plus";

export default function AdminGroupsPage() {
  const { data: session, status } = useSession();
  const [groups, setGroups] = useState([]);
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [profileFetched, setProfileFetched] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [neitherCount, setNeitherCount] = useState(0);

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/profile").then((response) => {
        response.json().then((data) => {
          setProfileFetched(true);
        });
      });

      fetch("/api/allGroups").then((res) => {
        res.json().then((groups) => {
          // Sort groups so rejected ones are at the bottom
          const sortedGroups = groups.sort((a, b) => {
            if (a.rejected && !b.rejected) return 1;
            if (!a.rejected && b.rejected) return -1;
            return 0;
          });
          setGroups(sortedGroups);
          setFilteredGroups(sortedGroups);
          setNeitherCount(sortedGroups.filter(group => !group.accepted && !group.rejected).length);
        });
      });
    }
  }, [status]);

  useEffect(() => {
    filterGroups();
  }, [searchQuery, filter]);

  const handleAccept = async (id) => {
    const updatedGroup = { _id: id, accepted: true, rejected: false };
    const res = await fetch("/api/group", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedGroup),
    });

    if (res.ok) {
      const updatedGroups = groups.map((group) => (group._id === id ? { ...group, accepted: true, rejected: false } : group));
      setGroups(updatedGroups);
      filterGroups(updatedGroups);
      setNeitherCount(updatedGroups.filter(group => !group.accepted && !group.rejected).length);
    }
  };

  const handleReject = async (id) => {
    const res = await fetch(`/api/group?_id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      const updatedGroups = groups.map((group) => (group._id === id ? { ...group, rejected: true, accepted: false } : group));
      setGroups(updatedGroups);
      filterGroups(updatedGroups);
      setNeitherCount(updatedGroups.filter(group => !group.accepted && !group.rejected).length);
    }
  };

  const filterGroups = (groupsToFilter = groups) => {
    let filtered = groupsToFilter;

    if (searchQuery) {
      filtered = filtered.filter((group) => group.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (filter !== "all") {
      filtered = filtered.filter((group) => {
        if (filter === "accepted") return group.accepted;
        if (filter === "rejected") return group.rejected;
        return !group.accepted && !group.rejected;
      });
    }

    setFilteredGroups(filtered);
  };

  if (status === "loading" || !profileFetched) {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return "Redirecting to login...";
  }

  return (
    <section className="mt-8">
      <NavBar isAdmin={true} neitherCount={neitherCount} />
      <div className="mt-8 max-w-6xl mx-auto p-4">
        <div className="mb-4 flex flex-col items-start space-y-4 w-full max-w-sm mx-auto">
          <input
            type="text"
            placeholder="Search groups..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border px-4 py-2 rounded-md w-full"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border px-4 py-2 rounded-md w-full"
          >
            <option value="all">All</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
            <option value="neither">Neither</option>
          </select>
        </div>
        <div className="mb-4 flex justify-between items-center">
          <Link className="button flex items-center relative" href={"/groups/new"}>
            <Plus className="w-5 h-5" />
            <span>Create new group</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredGroups?.length > 0 &&
            filteredGroups.map((item) => (
              <div
                key={item._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden mb-7 text-center hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <Link href={"/groups/edit/" + item._id}>
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
                      <h3 className="text-lg font-semibold mb-2">Activities</h3>
                      {item.activity && item.activity.length > 0 ? (
                        <ol className="list-decimal list-inside">
                          {item.activity.map((act, index) => (
                            <li key={index} className="text-gray-600">
                              {act.name}
                            </li>
                          ))}
                        </ol>
                      ) : (
                        <p className="text-gray-600">No activities available</p>
                      )}
                    </div>
                  </div>
                </Link>
                <div className="flex mb-3 gap-3 p-4">
                  {item.accepted ? (
                    <>
                      <button className="border rounded-full bg-green-500 px-2 ml-2">Accepted</button>
                      <button onClick={() => handleReject(item._id)} className="border rounded-full bg-red-400 px-2 mr-2">Reject</button>
                    </>
                  ) : item.rejected ? (
                    <>
                      <button className="border rounded-full bg-red-700 px-3 ml-2">Rejected</button>
                      <button onClick={() => handleAccept(item._id)} className="border rounded-full bg-primary px-1 ml-2">Accept</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleAccept(item._id)} className="border rounded-full bg-primary px-2 ml-2">Accept</button>
                      <button onClick={() => handleReject(item._id)} className="border rounded-full bg-red-400 px-2 mr-2">Reject</button>
                    </>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
