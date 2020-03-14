// const request = require('supertest');
// const app = require ('../app');

// describe('All CRUD enpoints', () => {
//   /* document creation */

//   it('should create a new document', async () => {
//     const res = await request(app)
//       .post('/')
//       .send({
//           document: '{"property1":"value1","property2":"value2","property3":"value3", "property4": { "property1.1": ["value1.1.1", 2, "value1.1.2"] }}',
//       });

//     expect(res.statusCode).toEqual(201);
//   });

//   it('should fail creating a new document', async () => {
//     const res = await request(app)
//       .post('/')
//       .send({
//         toto: 'pouet',
//         num: 12,
//       });

//     expect(res.statusCode).toEqual(400);
//     expect(res.body).toEqual(
//       expect.objectContaining({
//         code: 'validation',
//         httpCode: 400,
//         details: ['"document" is required'],
//       }),
//     );
//   });
// });
