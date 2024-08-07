import axios from "axios";
import { API_URL } from "../config";

// Crea una instancia de axios con la URL base y las credenciales
const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default instance;
