import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
// import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import Team from '../database/models/team';
import { ITeam } from '../interfaces/ITeamService';

chai.use(chaiHttp);

const { expect } = chai;

const teamsMock: ITeam = {
  id: 1,
  teamName: "any-name",
}

describe('Teams', () => {
  describe('List teams', () => {
    it(`. get, should return status 200`, async () => {
      
      const response = await chai.request(app)
        .get('/teams')

      expect(response.status).to.equal(200);
    }) 

    it(`should return teams`, async () => {
      sinon.stub(Team, 'findAll').resolves([]);
      const response = await chai.request(app)
        .get('/teams')

      expect(response.body).to.be.deep.equal([]);
    }) 

    it(`should return one team by id`, async () => {
      sinon.stub(Team, 'findByPk').resolves(teamsMock as Team);
      const response = await chai.request(app)
        .get('/teams/:id')

      expect(response.body).to.be.deep.equal(teamsMock as Team);

      sinon.restore();
    }) 
  });
});
