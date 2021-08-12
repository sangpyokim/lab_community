import React from 'react'
import { Nav } from 'react-bootstrap'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'

const P = styled.p`
    font-size:48px;
`
const SLink = styled(Link)`
  margin: 10px;
  text-decoration:none;
`


export default withRouter(({ location: { pathnath } }) => (
    <>
    <P className="text-center mt-4 mb-4">순천대학교 컴퓨터공학 실험실</P>
  <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item current={pathnath === "/" ? pathnath === "/" : undefined} >
      <SLink to="/" >자유게시판 </SLink>
    </Nav.Item>
    <Nav.Item current={pathnath === "/ailab" ? pathnath === "/ailab" : undefined}>
      <SLink to='/ailab' >AI실험실</SLink>
    </Nav.Item>
    <Nav.Item current={pathnath === "/dblab" ? pathnath === "/dblab" : undefined}>
      <SLink to='dblab' >DB실험실</SLink>
    </Nav.Item>
    <Nav.Item current={pathnath === "/swlab" ? pathnath === "/swlab" : undefined}>
      <SLink to='swlab' >SW실험실</SLink>
    </Nav.Item>
    <Nav.Item current={pathnath === "/nwlab" ? pathnath === "/nwlab" : undefined}>
      <SLink to='nwlab' >NW실험실</SLink>
    </Nav.Item>
    <Nav.Item current={pathnath === "/visionlab" ? pathnath === "/visionlab" : undefined}>
      <SLink to='visionlab' >Vision실험실</SLink>
    </Nav.Item>
    <Nav.Item current={pathnath === "/graphiclab" ? pathnath === "/graphiclab" : undefined}>
      <SLink to='graphiclab' >GP실험실</SLink>
    </Nav.Item>
  </Nav>
  
</>
))