const checkValidData=(email,password,name)=>{
     
    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isValidPassword=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    const isValidName=/^\b(?:\w|-)+\b$/.test(name);

    if(!isEmailValid) return "Email is not Valid"
    if(!isValidPassword) return "Password is not Valid"
    if(!isValidName) return "Name is not Valid"
    
    return null


}

export default checkValidData;