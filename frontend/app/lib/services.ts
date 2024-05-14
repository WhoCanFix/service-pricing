import axios from "@/node_modules/axios/index";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

const getQuotes = (make: string, fuelType: string) =>
  api.post("/quotes", { make, fuelType });

const getCars = (vrm: string) => api.get(`/cars/${vrm}`);

export { getQuotes, getCars };
