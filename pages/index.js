import React, { useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  const numberOfUsers = users.length;
  return (
    <div>
      <section>
        <h2>List cohorts</h2>
        {numberOfUsers > 0 ? (
          <ul>
            {users.map(user => (
              <li>
                <div>
                  <p>{user.name}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>{`${numberOfUsers} cohorts found`}</p>
        )}
      </section>
      <section>
        <h2>Manage cohorts</h2>
        <p>Add cohort</p>
        <p>Update cohort</p>
        <p>Delete cohort</p>
      </section>
      <section>
        <h2>Cohort groups</h2>
      </section>
    </div>
  );
};

export default Home;
