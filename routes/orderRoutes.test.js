const supertest = require("supertest");
const Order = require("../models/order");
const app = require("../app");
const { connect, disconnect } = require("../database");
const request = supertest(app);

const dummyOrder = new Order({
  product: "6320d412764e84089ed2789e",
  user: "6359990c7ecb2c4021fa7ef7",
  createdOn: "2022-09-18",
});

let testId = null;

describe("Orders endpoints", () => {
  beforeAll(async () => {
    await connect();
    const response = await dummyOrder.save();
    testId = response._id.toHexString();
  });

  afterAll(() => {
    disconnect();
  });

  test("GET all orders", async () => {
    return await request
      .get("/orders")
      .expect("content-type", "application/json; charset=utf-8")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            data: expect.arrayContaining([
              expect.objectContaining({
                __v: expect.any(Number),
                _id: expect.any(String),
                product: expect.any(Array),
                user: expect.any(Object),
                createdOn: expect.any(String),
              }),
            ]),
            success: expect.any(Boolean),
          })
        );
      });
  });

  test("GET an order by ID", async () => {
    return await request
      .get(`/orders/${testId}`)
      .expect("content-type", "application/json; charset=utf-8")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            data: expect.objectContaining({
              __v: expect.any(Number),
              _id: expect.any(String),
              product: expect.any(Array),
              user: expect.any(Object),
              createdOn: expect.any(String),
            }),
            success: expect.any(Boolean),
          })
        );
      });
  });

  test("GET a 404 error if order not found", async () => {
    const notFoundId = "6320d412764e84089ed2789e";
    return await request
      .get(`/orders/${notFoundId}`)
      .expect("content-type", "application/json; charset=utf-8")
      .expect(404);
  });

  test("GET an order by date", async () => {
    const testDate = "2022-09-18";
    return await request
      .get(`/orders/createdOn/${testDate}`)
      .expect("content-type", "application/json; charset=utf-8")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            data: expect.arrayContaining([
              expect.objectContaining({
                __v: expect.any(Number),
                _id: expect.any(String),
                product: expect.any(Array),
                user: expect.any(String),
                createdOn: expect.any(String),
              }),
            ]),
            success: expect.any(Boolean),
          })
        );
      });
  });

  test("GET an order by product", async () => {
    const testProduct = "6320d412764e84089ed2789e";
    return await request
      .get(`/orders/containsProduct/${testProduct}`)
      .expect("content-type", "application/json; charset=utf-8")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            data: expect.arrayContaining([
              expect.objectContaining({
                __v: expect.any(Number),
                _id: expect.any(String),
                product: expect.any(Array),
                user: expect.any(Object),
                createdOn: expect.any(String),
              }),
            ]),
            success: expect.any(Boolean),
          })
        );
      });
  });

  test("POST a new order", async () => {
    const testOrder = {
      product: "6320d412764e84089ed2789e",
      user: "6359990c7ecb2c4021fa7ef7",
      createdOn: "2022-09-18",
    };
    return await request
      .post("/orders")
      .send(testOrder)
      .expect("content-type", "application/json; charset=utf-8")
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            data: expect.objectContaining({
              _id: expect.any(String),
              product: expect.any(Array),
              user: expect.any(String),
              createdOn: expect.any(String),
            }),
            success: expect.any(Boolean),
          })
        );
      });
  });

  test("PATCH to update a product", async () => {
    const testOrder = {
      product: "6320d412764e84089ed2789e",
      user: "6320d412764e84089ed2789e",
      createdOn: "2022-09-18",
    };
    return await request
      .patch(`/orders/${testId}`)
      .send(testOrder)
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

  test("DELETE an order", async () => {
    return await request
      .delete(`/orders/${testId}`)
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
