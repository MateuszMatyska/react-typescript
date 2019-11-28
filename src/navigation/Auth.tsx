export const Auth = () => {
    const user = localStorage.getItem('token');

    if(user) {
        localStorage.setItem('user', 'true');
    }
}