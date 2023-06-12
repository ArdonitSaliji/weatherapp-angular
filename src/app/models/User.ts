export interface User {
    username: string;
    email?: string;
    password?: string;
    token: string;
}

// In case needed
// export interface User {
//   user: { username: string; email?: string; password?: string; token: string };
//   token?: string;
// }
