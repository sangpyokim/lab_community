import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import styled from 'styled-components';
import Paginations from '../Components/Pagination';
import { Link } from 'react-router-dom';
import { boardApi } from '../api'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

`

const Able = styled(Table)`
  width:1200px;
  margin:0 0 20px 0;
  text-align: center;
`

const Td = styled.td`
  width: 100px;
`

const Td1 = styled.td`

`
const Td2 = styled.td`
  width: 200px;
`
const SLink = styled(Link)`
  text-decoration: none;
  color:black;
`


const GPLab = () => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await boardApi.getGPBoardList()
        setUsers(data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
    };
    fetchUsers();
  }, []);

  if (error) return <div>에러가 발생하였습니다</div>;
  if (!users) return null;
    return(
      <>
      <Container>
        <Able> 
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
                <Td scope="row">{res.bno}</Td>
                <Td1 title={res.title.substring(0,30)} >
                  <SLink to={`/get_board_graphics/${res.bno}`} >{res.title}</SLink>
                </Td1>
                <Td2>{res.modDate.substring(0,10)}</Td2>
                <Td>{res.writer}</Td>
              </tr>
            ))}
          </tbody>
        </Able>
      </Container>
    <Paginations users={users} />
    </>
    )
}

export default GPLab