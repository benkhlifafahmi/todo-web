const baseUrl: string = 'http://localhost:8080'
export const signInUrl: string = `${baseUrl}/auth/signin`;
export const signUpUrl: string = `${baseUrl}/auth/signup`;
export const tasksUrl: string = `${baseUrl}/tasks`;
export const tasksUrlWithId = (id: number) => `${baseUrl}/tasks/${id}`;