import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
// import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import User from '../database/models/user';
import { CreateUserResponse, IUser } from '../interfaces/IService';
import JwtService from '../utils/jwtService';
import passwordService from '../utils/passwordService';

chai.use(chaiHttp);

const { expect } = chai;

const usersMock: IUser = {
  email: 'any-email',
  password: 'any-hash',
}

const createUserResponseMock: CreateUserResponse = {
  id: 1,
  email: 'any-email',
  role: 'any-name',
  token: 'any-token'
}

describe('Users', () => {
  describe('List users', () => {
    it(`. get, should return status 200`, async () => {
      sinon.stub(User, 'findAll').resolves([usersMock as User]);
      const response = await chai.request(app)
        .get('/login')

      expect(response.status).to.equal(200);

      sinon.restore();
    }) 

    it(`should return users`, async () => {
      sinon.stub(User, 'findAll').resolves([usersMock as User]);
      const response = await chai.request(app)
        .get('/login')

      expect(response.body).to.be.deep.equal([usersMock as User]);

      sinon.restore();
    }) 
  });

  // describe('Login', () => { 
  //   beforeEach(() => {
      
  //     sinon.stub(JwtService, "createToken").returns(createUserResponseMock.token)
  //     sinon.stub(User, "findOne").resolves(usersMock as User)
  //     sinon.stub(passwordService, "compare").returns(true);
     
  //     })   
  //   afterEach(() => {
  //     sinon.restore();
  //   })  
  // })
});
