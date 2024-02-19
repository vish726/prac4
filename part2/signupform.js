import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

function SignUpForm() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    dateOfBirth: '',
    gender: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });

    if (form.name && form.mobile && form.email && form.address && form.dateOfBirth && form.gender && form.username && form.password && form.confirmPassword) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" value={form.name} onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="mobile">Mobile</Label>
        <Input type="text" name="mobile" id="mobile" value={form.mobile} onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" value={form.email} onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input type="textarea" name="address" id="address" value={form.address} onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="dateOfBirth">Date of Birth</Label>
        <Input type="date" name="dateOfBirth" id="dateOfBirth" value={form.dateOfBirth} onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="gender">Gender</Label>
        <Input type="select" name="gender" id="gender" value={form.gender} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input type="text" name="username" id="username" value={form.username} onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" value={form.password} onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="confirmPassword">Confirm Password</Label>
        <Input type="password" name="confirmPassword" id="confirmPassword" value={form.confirmPassword} onChange={handleInputChange} />
      </FormGroup>
      <Button type="submit" disabled={submitDisabled}>Submit</Button>
      <Button type="reset">Reset</Button>
    </Form>
  );
}

export default SignUpForm;