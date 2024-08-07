import axios from "./axios";

// Obtiene todas las tareas
export const getTasksRequest = async () => axios.get("/tasks");

// Crea una nueva tarea
export const createTaskRequest = async (task) => axios.post("/tasks", task);

// Actualiza una tarea existente por ID
export const updateTaskRequest = async (id, task) =>
  axios.put(`/tasks/${id}`, task);

// Elimina una tarea por ID
export const deleteTaskRequest = async (id) => axios.delete(`/tasks/${id}`);

// Obtiene una tarea específica por ID
export const getTaskRequest = async (id) => axios.get(`/tasks/${id}`);
