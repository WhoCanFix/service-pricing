import axios from "@/node_modules/axios/index";

const api = axios.create({
  baseURL: "http://localhost:8081",
});

const getQuotes = (make: string, fuelType: string) =>
  api.post("/quotes", { make, fuelType });

const getCars = (vrm: string) => {
  throw new Error('Not implemented');
};

export { getQuotes, getCars };
