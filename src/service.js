export function registerUser(email, password) {
  console.log("registering user with email:")
    const users = JSON.parse((localStorage.getItem('users') || '[]'));
  users.push({ email, password });
  localStorage.setItem('users', JSON.stringify(users));
}