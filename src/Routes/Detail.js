import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios'

const Container = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    
`
const Table = styled.div`
    width: 1200px;
    height: 900px;
    border-bottom: 1px solid rgba(25,25,25,0.2);
`

const Header = styled.div`
    border-top: 1px solid rgba(25,25,25,0.2);
    border-bottom: 1px solid rgba(25,25,25,0.2);
`

const Title = styled.div`
    width:100%;
    height: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 500;
    font-size: 24px;
    margin-top: 20px;
`

const Name = styled.div`
    width:100%;
    height: 30px;
    text-align: right;
    font-weight: 500;
    font-size: 16px;
    padding-right: 30px;
`
const Body = styled.div`
    height:100%;
    width:100%;
    display:flex;
    text-align: center;
    padding: 50px 50px 0 50px;
`

const Detail = (props) => {
    const [ board, setBoard ] = useState("")
    const [ error, setError ] = useState("")
    useEffect(() => {
        const fetchBoard = async() => {
            try {
                const { data } = await axios.get(`http://211.227.151.158:8080/api${props.location.pathname}`)
                setBoard(data)
            } catch (error) {
                setError(error)
            }
        }
        fetchBoard()
    }, [])

    if (error) return <div>에러가 발생하였습니다</div>;
    
    return(
        <Container>
            <Table>
                <Header>
                    <Title>
                        {board.title}
                    </Title>

                    <Name>
                        {String(board.modDate).substring(0,10)}
                        &nbsp;
                        {String(board.modDate).substring(11,19)}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {board.writer}
                    </Name>
                </Header>
                <Body>
                    <div>
                        {board.content}
                    </div>
                </Body>
            </Table>
        </Container>
    )
}

export default Detail