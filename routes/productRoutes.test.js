const supertest = require("supertest");
const Product = require("../models/product");
const app = require("../app");
const { connect, disconnect } = require("../database");
const request = supertest(app);

const dummyProduct = new Product({
  name: "testProduct",
  price: 100,
});

let testId = null;

describe("Products endpoints", () => {
  beforeAll(async () => {
    await connect();
    const response = await dummyProduct.save();
    testId = response._id.toHexString();
  });

  afterAll(() => {
    disconnect();
  });

  test("GET all products", async () => {
    return await request
      .get("/products")
      .expect("content-type", "application/json; charset=utf-8")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            data: expect.arrayContaining([
              expect.objectContaining({
                __v: expect.any(Number),
                _id: expect.any(String),
                name: expect.any(String),
                price: expect.any(Number),
              }),
            ]),
            success: expect.any(Boolean),
          })
        );
      });
  });

  test("GET a product by ID", async () => {
    return await request
      .get(`/products/${testId}`)
      .expect("content-type", "application/json; charset=utf-8")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            data: expect.objectContaining({
              __v: expect.any(Number),
              _id: expect.any(String),
              name: expect.any(String),
              price: expect.any(Number),
            }),
            success: expect.any(Boolean),
          })
        );
      });
  });

  test("GET a 404 error if product not found", async () => {
    const notFoundId = "6320d412764e84089ed2789e";
    return await request
      .get(`/products/${notFoundId}`)
      .expect("content-type", "application/json; charset=utf-8")
      .expect(404);
  });

  test("POST a new product", async () => {
    const testProduct = {
      name: "testName",
      price: 200,
    };
    return await request
      .post("/products")
      .send(testProduct)
      .expect("content-type", "application/json; charset=utf-8")
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            data: expect.objectContaining({
              __v: expect.any(Number),
              _id: expect.any(String),
              name: expect.any(String),
              price: expect.any(Number),
            }),
            success: expect.any(Boolean),
          })
        );
      });
  });

  test("PATCH to update a product", async () => {
    const testProduct = {
      name: "testName",
      price: 200,
    };
    return await request
      .patch(`/products/${testId}`)
      .send(testProduct)
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

  test("DELETE a product", async () => {
    return await request
      .delete(`/products/${testId}`)
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
