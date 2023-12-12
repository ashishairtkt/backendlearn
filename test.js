const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app'); // Assuming your Express app instance is exported from app.js
const expect = chai.expect;

chai.use(chaiHttp);

describe('User API Endpoints', () => {
  it('should get all users', (done) => {
    chai.request(app)
      .get('/userResgistration/allusers')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.users).to.be.an('array');
        done();
      });
  });

  it('should add a new user', (done) => {
    chai.request(app)
      .post('/userResgistration/adduser')
      .send({
        username: 'uniqueTestUser', // Change the username to ensure uniqueness
        email: 'test@example.com',
        password: 'test123'
        // Add other required fields here
      })
      .end((err, res) => {
        if (err) {
          done(err);
          return;
        }
  
        console.log('Response Body:', res.body); // Log the response body
  
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('User added successfully');
        done();
      });
  });
  
  



  it('should update an existing user', (done) => {
    const userIdToUpdate = 1; // Replace with an existing user ID in your database

    chai.request(app)
      .put(`/userResgistration/edituser/${userIdToUpdate}`)
      .send({
        username: 'updatedUser',
        email: 'updated@example.com',
        password: 'updated123'
        // Add other updated fields here
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('User updated successfully');
        done();
      });
  });

  it('should delete an existing user', (done) => {
    const userIdToDelete = 1; // Replace with an existing user ID in your database

    chai.request(app)
      .delete(`/userResgistration/deleteuser/${userIdToDelete}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('User deleted successfully');
        done();
      });
  });

  // Add other test cases for different endpoints (edituser, deleteuser, etc.)...
});
