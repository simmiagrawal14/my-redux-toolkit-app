import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import Counter from "./features/counter/Counter";
import { getUsers } from "./features/users/usersSlice";

interface users  {
  name:string;
}

function App() {
  const dispatch = useDispatch();
  const { users } = useSelector((state:RootState) => state.users);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div >
      
      {users && users.map((user:users, i:any) => <p key={i}>{user.name}</p>)}
      <div>
  <Counter/>
      </div>
    </div>
  );
}

export default App;