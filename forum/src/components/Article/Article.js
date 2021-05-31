import React from 'react'
import {StyledWrapper,Author,Title,Date} from './ArticleStyle'
const Article = props => {
    const {title,username} = props.value
    return (

        
        <StyledWrapper>
            <Title>{title}</Title>
            <Author>{username}</Author>
            <Date>Data</Date>
        </StyledWrapper>
    )
}

export default Article
