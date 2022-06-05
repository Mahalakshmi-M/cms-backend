const app = require('../config/express');
const supertest = require('supertest');
const request = supertest(app);

describe('Test the user route.', () => {
    test('It should response the GET method.', () => {
        return request.get('/v1/user/test')
            .expect(200, { message: 'Hello world!' });
    });
});
