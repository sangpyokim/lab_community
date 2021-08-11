import React, { useEffect, useState } from 'react'
import { api } from '../api'
import axios from 'axios';
import { Table } from 'react-bootstrap'
import styled from 'styled-components';

function Home () {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'http://192.168.1.6:8080/api/get_list'
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <>
      <Table> 
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Title</th>
            <th scope="col">작성시간</th>
            <th scope="col">작성자</th>
        </tr>
        </thead>
        <tbody>
          {users.dtoList.map( res => (
            <tr key={res.bno}>
              <th scope="row">{res.bno}</th>
              <td>{res.title}</td>
              <td>{res.modDate}</td>
              <td>{res.writer}</td>
            </tr>
          ))}
        </tbody>
    </Table>
    </>
  );
}



export default Home