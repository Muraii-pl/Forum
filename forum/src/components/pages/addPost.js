import React from 'react'
import styled from 'styled-components'
import FormAddPost from '../formAddPost/FormAddPost'
import Nav from '../Nav/Nav'

 const StyledWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 100vw;


 `


const AddPost = () => {
    return (
        <>
        <Nav/>
        <StyledWrapper>
            <FormAddPost/>
        </StyledWrapper>
        </>
    )
}

export default AddPost
