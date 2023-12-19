export const loginUser = (userLogin) => {
    return (userLogin.username === 'admin' && userLogin.password === '12345');
}