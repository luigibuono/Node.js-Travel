const supertest = require("supertest");
const User = require("../models/user");
const app = require("../app");
const { connect, disconnect } = require("../database");
const request = supertest(app);

const dummyUser = new User({
  firstName: "Dummy",
  lastName: "User",
  email: "dummy@user.com",
});

let testId = null;

describe("Users endpoint", () => {
  beforeAll(async () => {
    await connect();
    const response = await dummyUser.save();
    testId = response._id.toHexString();
  });

  afterAll(() => {
    disconnect();
  });

  test("GET all users", async () => {
    return await request
      .get("/users")
      .expect("content-type", "application/json; charset=utf-8")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            data: expect.arrayContaining([
              expect.objectContaining({
                __v: expect.any(Number),
                _id: expect.any(String),
                firstName: expect.any(String),
                lastName: expect.any(String),
                email: expect.any(String),
              }),
            ]),
            success: expect.any(Boolean),
          })
        );
      });
  });

  test("GET an user by ID", async () => {
    return await request
      .get(`/users/${testId}`)
      .expect("content-type", "application/json; charset=utf-8")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            data: expect.objectContaining({
              __v: expect.any(Number),
              _id: expect.any(String),
              firstName: expect.any(String),
              lastName: expect.any(String),
              email: expect.any(String),
            }),
            success: expect.any(Boolean),
          })
        );
      });
  });

  test("GET a 404 error if user not found", async () => {
    const notFoundId = "6320d412764e84089ed2789e";
    return await request
      .get(`/users/${notFoundId}`)
      .expect("content-type", "application/json; charset=utf-8")
      .expect(404);
  });

  test("POST a new user", async () => {
    const testUser = {
      firstName: "testName",
      lastName: "testLastName",
      email: "tesmail@test.com",
    };
    return await request
      .post("/users")
      .send(testUser)
      .expect("content-type", "application/json; charset=utf-8")
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            data: expect.objectContaining({
              __v: expect.any(Number),
              _id: expect.any(String),
              firstName: expect.any(String),
              lastName: expect.any(String),
              email: expect.any(String),
            }),
            success: expect.any(Boolean),
          })
        );
      });
  });

  test("PATCH to update a user", async () => {
    const testUser = {
      firstName: "testName",
      lastName: "testLastName",
      email: "tesmail@test.com",
    };
    return await request
      .patch(`/users/${testId}`)
      .send(testUser)
      .expect("content-type", "application/json; charset=utf-8")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            data: expect.objectContaining({
              modifiedCount: expect.any(Number),
            }),
            success: expect.any(Boolean),
          })
        );
      });
  });

  test("DELETE a user", async () => {
    return await request
      .delete(`/users/${testId}`)
      .expect("content-type", "application/json; charset=utf-8")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            data: expect.objectContaining({
              deletedCount: expect.any(Number),
            }),
            success: expect.any(Boolean),
          })
        );
      });
  });
});
