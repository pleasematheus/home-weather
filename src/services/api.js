import axios from "axios";
// https://api.hgbrasil.com/weather?key=307c533e&lat=-23.682&lon=-46.875

export const key = "307c533e";

const api = axios.create({
	baseURL: "https://api.hgbrasil.com",
});

export default api;
