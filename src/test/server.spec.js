
const supertest = require("supertest");
const app = require("../server/server.js");


test("GET /", done => {
  supertest(app)
    .get("/")
    .expect(200, res.JSON())
    .end(done)
})