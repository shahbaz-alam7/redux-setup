import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../reducers/users/users.actions";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Home</h1>
      <h2>Users:</h2>
      <ul>
        {users.length > 0 ? (
          users.map((user, index) => <li key={index}>{user.name}</li>)
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </div>
  );
};

export default Home;
