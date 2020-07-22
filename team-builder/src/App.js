import React, {useState, useEffect} from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import Form from './form'
import Team from './Team'


const initialTeamMembers = [
  {
    id: uuid(),
    name:'Diamond',
    email:'diamond@gmail.com',
    role:'Designer',

  },
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}


const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialTeamMembers })
}
const fakeAxiosPost = (url, { name, email, role }) => {
  const newTeamMember = { id: uuid(), name, email, role }
  return Promise.resolve({ status: 200, success: true, data: newTeamMember })
}

function App() {
 
  const [team, setTeam] = useState([])

  const [formValues, setFormValues] = useState( initialFormValues)

  const updateForm = (inputName, inputValue) => {

    const updatedFormvalues = {...formValues, [inputName]: inputValue}
    setFormValues(updatedFormvalues)
  }

  const submitForm = () => {

    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role)return



    fakeAxiosPost('fakeapi.com', newTeamMember)
      .then(res => {
        
        const TeamMemberFromAPI = res.data
        setTeam([TeamMemberFromAPI, ...team])
        //  d) also on success clear the form
        setFormValues(initialFormValues)
      })
  }

  useEffect(() => {
    fakeAxiosGet('fakeapi.com').then(res => setTeam(res.data))
  }, [])
  
  return (
    <div className="App">
      <Form 
      values = {formValues}
      update = {updateForm}
      submit = {submitForm}
      />

{
        team.map(team => {
          return (
            <Team key={team.id} details={team} />
          )
        })
      }
     
    </div>
  );
}

export default App;
