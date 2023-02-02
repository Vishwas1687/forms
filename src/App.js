import React,{useState} from 'react';
import FormInput from './formInput.jsx';
function App() {
  const [values,setValues]=useState({
    "first name":"",
    "last name":"",
    "phone number":"",
    "country":"",
    "email":"",
    "password":"",
    "confirm password":""
});

const inputs = [
{
  "id":1,
  "name":"first name",
   "label":"First Name",
   "type":"text",
   "pattern":"",
   "required":true,
   "placeholder":"first name",
   "error message":''
},
{
  "id":2,
  "name":"last name",
   "label":"Last Name",
   "type":"text",
   "pattern":"",
   "required":false,
   "placeholder":"last name",
   "error message":''
},
{
  "id":3,
  "name":"phone number",
   "label":"Phone Number",
   "type":"text",
   "pattern":"",
   "required":true,
   "placeholder":"Phone Number",
   "error message":''
},

{
  "id":4,
  "name":"country",
   "label":"Country",
   "type":"text",
   "pattern":"",
   "required":true,
   "placeholder":"Country",
   "error message":''
},

{
  "id":5,
  "name":"email",
   "label":"Email",
   "type":"email",
   "pattern":"",
   "required":true,
   "placeholder":"Email",
   "error message":''
},
{
  "id":6,
  "name":"password",
   "label":"Password",
   "type":"password",
   "pattern":"",
   "required":true,
   "placeholder":"Password",
   "error message":''
},
{
  "id":7,
  "name":"confirm password",
   "label":"Confirm Password",
   "type":"password",
   "pattern":"",
   "required":true,
   "placeholder":"Confirm Password",
   "error message":''
}

]
  return (
     null
  );
}

export default App;
