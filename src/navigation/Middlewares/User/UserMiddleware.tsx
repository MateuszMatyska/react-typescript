export const UserMiddleware = (routeName: string) => {
    const user = localStorage.getItem("token");

    if (routeName === "/login") {
        return user ? false : true;
    } 
    else {
        return user ? true : false;
    }
}