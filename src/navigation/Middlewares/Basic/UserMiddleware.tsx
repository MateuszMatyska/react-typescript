export const UserMiddleware = (routeName: string) => {
    const user = localStorage.getItem("token");

    if(routeName === "/"){
        return true;
    }else{
        return user? true: false;
    }

    return false;
}