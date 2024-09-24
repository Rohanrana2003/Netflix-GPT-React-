export const checkValidData = (email, password) =>{

    const isEmail = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);

    if(!isEmail)return 'Email is not valid';
    if(!isPassword) return 'Password is not valid';

    return null;
}