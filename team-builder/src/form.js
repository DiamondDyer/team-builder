import React from 'react'
import styled from 'styled-components'
const StyledForm = styled.div`
{
   
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
 

    
}

.title{
   
}

.input-container{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:lightblue;
    width:100%;
    border-radius:25px;
    padding:2%;
    padding-bottom: 10%;
  
    
}

input{
    width: 70%;
    padding: 12px 20px;
    margin: 3%;
    box-sizing: border-box;
    border: 2px solid blue;
    border-radius: 5px;
    padding:2%;
}

select{
    width: 70%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    margin: 1%;
    border: 2px solid blue;
    border-radius: 5px;
}

button{
    width: 70%;
   
    margin-top:4%;
    background-color:lightblue;
    color:black;
    border-radius:5px;
    padding:5%;
    
}

`



export default function Form(props){

const {values, update, submit} = props

const onChange = evt => {

    const name = evt.target.name

    const value = evt.target.value

    update(name, value)

}

const onSubmit = evt => {

    evt.preventDefault()

    submit()
}

return(
    <StyledForm>
    <form className='form container' onSubmit={onSubmit}>
    <div className = 'title' >
      <h2>Add a Team Member</h2>
     
    </div>
   

    <div className ='input-container' >
      <h4>Enter Information</h4>

     
      <label htmlFor='nameInput'>Name:&nbsp;
       
        <input
          id='nameInput'
          name='name'
          type='text'
          placeholder='Enter Name'
          maxLength='30'
          value={values.name}
          onChange={onChange}
        />
      </label>

      <label htmlFor='emailInput'>Email:&nbsp;
      
        <input
          id='emailInput'
          name='email'
          type='email'
          placeholder='Enter email'
          maxLength='20'
          value={values.email}
          onChange={onChange}
        />
      </label>

      <label>Role:&nbsp;
       
        <select name='role' value={values.role} onChange={onChange}>
          <option disabled value=''>Select a role</option>
          <option value='backend engineer'>Backend Engineer</option>
          <option value='frontend engineer'>Frontend Engineer</option>
          <option value='designer'>Designer</option>
        </select>
      </label>
    </div>
    <button disabled={!values.name || !values.email || !values.role}>submit</button>
    
  </form>
  </StyledForm>

)



}