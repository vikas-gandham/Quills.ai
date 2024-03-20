import { useState } from "react";
import { useEffect } from "react";

function Table() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newWebsite, setNewWebsite] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const addUser = () => {
    const name = newName.trim();
    const email = newEmail.trim();
    const website = newWebsite.trim();
    if (name && email && website) {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          website,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUsers([...users, data]);
          setNewName("");
          setNewEmail("");
          setNewWebsite("");
        });
    }
  };

  const updateUser = (id) => {
    const user = users.find((user) => user.id === id);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => {});
  };

  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setUsers((values) => {
          return values.filter((item) => item.id !== id);
        });
      });
  };

  const onChangeHandler = (id, key, value) => {
    setUsers((values) => {
      return values.map((item) =>
        item.id === id ? { ...item, [key]: value } : item
      );
    });
  };

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Id</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Website</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4">{user.id}</td>
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">
                <input
                  value={user.email}
                  onChange={(value) => onChangeHandler(user.id, "email", value)}
                />
              </td>
              <td className="px-6 py-4">
                <input
                  value={user.website}
                  onChange={(value) =>
                    onChangeHandler(user.id, "website", value)
                  }
                />
              </td>
              <td className="px-6 py-4">
                <button
                  className="border px-3 py-2 rounded-lg shadow-md bg-blue-500 text-white"
                  onClick={() => updateUser(user.id)}
                >
                  Update
                </button>
                &nbsp;
                <button
                  className="border px-3 py-2 rounded-lg shadow-md bg-red-500 text-white"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td className="px-6 py-4">
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Add name here..."
              />
            </td>
            <td className="px-6 py-4">
              <input
                placeholder="Add email here..."
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </td>
            <td className="px-6 py-4">
              <input
                placeholder="Add website here..."
                value={newWebsite}
                onChange={(e) => setNewWebsite(e.target.value)}
              />
            </td>
            <td className="px-6 py-4">
              <button
                className="  border px-3 py-2 rounded-lg shadow-md bg-green-500 text-white"
                onClick={addUser}
              >
                Add user
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Table;
