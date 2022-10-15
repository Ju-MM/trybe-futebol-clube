import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
// import Example from '../database/models/ExampleModel';

// import { Response } from 'superagent';
import Match from '../database/models/match';
import { IChangeMatchInfos, IMatchInfos, IMatchTest } from '../interfaces/IMatchService';


chai.use(chaiHttp);

const { expect } = chai;

const matchesMock: IMatchInfos = {
  homeTeam: 'any-team',
  awayTeam: 'any-team',
  homeTeamGoals: 1,
  awayTeamGoals: 2,
  inProgress: false,
}

const matchesTestMock: IMatchTest = {
  id: 1,
  homeTeam: 'any-team',
  awayTeam: 'any-team',
  homeTeamGoals: 1,
  awayTeamGoals: 2,
  inProgress: false,
}

const changeMatchesTestMock: IChangeMatchInfos = {
  awayTeamGoals: 2,
  homeTeamGoals: 1,
}

describe('Matches', () => {
  describe('Matches feats', () => {
    it(`. get, should return status 200`, async () => {
      sinon.stub(Match, 'findAll').resolves([matchesMock as Match]);
      const response = await chai.request(app)
        .get('/matches')
      expect(response.status).to.equal(200);
      sinon.restore();
    }) 

  });
});
