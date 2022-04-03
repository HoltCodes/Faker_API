const faker = require("faker");

const express = require("express");

const app = express();
const port = 8000;


const createUser = () => ({
  _id: faker.datatype.uuid(),
  fistName: faker.name.fistName(),
  lastName: faker.name.lastName(),
  phoneNumber: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

const createCompany = () => ({
  _id: faker.datatype.uuid(),
  name: faker.company.companyName(),
  address: {
    street: faker.address.streetAddress(),
    city: faker.address.cityName(),
    state: faker.address.state(),
    zipcode: faker.address.zipCode(),
    country: faker.address.country(),
  },
});


app.get("/api/users/new", (req, res) => {
  const newUser = createUser();
  res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
  const newCompany = createCompany();
  res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
  const newUser = createUser();
  const newCompany = createCompany();
  const getBoth = {
    user: newUser,
    company: newCompany,
  };
  res.json(getBoth);
});


app.listen(port, () => console.log(`express server running on port ${port}`));