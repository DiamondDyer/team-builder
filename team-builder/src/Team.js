import React from 'react'
import styled from 'styled-components'
const StyledTeam = styled.div`

{
    display:flex;
    width:100%;
    justify-content: center;
    
}

.details{
    border: 5px solid lightblue;
    border-radius: 25px;
    padding:2%;
    margin:2%;
}

`

export default function Team(props) {
    const { details } = props
  
    if (!details) {
      return <h3>Gettin Team member details...</h3>
    }
  
    return (
      <StyledTeam>
        <div className = 'details'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
      </StyledTeam>
    )
  }
  