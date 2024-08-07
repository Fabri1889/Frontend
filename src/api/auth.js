import axios from "./axios";

// Realiza una solicitud POST a /auth/register para registrar un nuevo usuario
export const registerRequest = async (user) =>
  axios.post(`/auth/register`, user);

// Realiza una solicitud POST a /auth/login para iniciar sesión
export const loginRequest = async (user) => axios.post(`/auth/login`, user);

// Realiza una solicitud GET a /auth/verify para verificar el token de autenticación
export const verifyTokenRequest = async () => axios.get(`/auth/verify`);
