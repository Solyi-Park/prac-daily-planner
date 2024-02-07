import React from 'react'
import styled from 'styled-components'
import Input from '../components/Input'
import TodoList from '../components/TodoList'

const Home = () => {
  return (
    <>
      <Header>Header</Header>
      <Main>
        <Input />
        <TodoList isDone={false}/>
        <TodoList isDone={true}/>
      </Main>
      <Footer>Footer</Footer>
    </>
  )
}

export default Home

const Header = styled.div`
  background-color: #ecd4ff;
`

const Main = styled.div`
background-color: #d4dbff;
`

const Footer = styled.div`
background-color: #d7ffd4;
`