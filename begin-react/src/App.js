import React, { useState, useRef, useMemo, useCallback} from 'react';
import Hello from './hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import Jsx from './jsx/Jsx';
import InputSample from './inputSample/InputSample';
import UserList from './userlist/UserList';
import CreateUser from './create/CreateUser';

function countActiveUsers(users){
  console.log('aa')
  return users.filter(user => user.active).length
}

function App() {

  const [inputs, setInputs] = useState({
    username:'',
    email:'',
  });

  const {username, email} = inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }, [inputs]);

  const [users, setUsers] = useState([
    {
        id:1,
        username: 'jayden',
        email: 'jayden@gmial.com',
        active: true
    },
    {
        id: 2,
        username: 'steven',
        email: 'steven@gmail.com',
        active:false
    },
    {
        id:3,
        username: 'david',
        email: 'david@gmail.com',
        active:false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(() =>{
    const user = {
      id : nextId.current,
      username,
      email,
    };
    setUsers(users => users.concat(user));
    // setUsers([...users, user]);
    setInputs({
      username :'',
      email: ''
    })

    console.log(nextId.current)
    nextId.current += 1;
  }, [username, email])


  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id))
  }, []);

  const onToggle = useCallback(id => {
    setUsers(users => users.map(
      user => user.id === id
        ? { ...user, active: !user.active }
        : user
    ))
  }, []);
  
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList 
        users={users} 
        onRemove={onRemove}
        onToggle={onToggle}
      />
      <div>
        활성 사용자 수 : {count}
      </div>
    </>
  );
}

export default App;
