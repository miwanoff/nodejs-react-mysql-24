export default function validation(values) {
    let error = {};
  
  
    //const regName = /^[\w\d*]{5,12}$/;
    const regEmail = /^[a-z0-9][\w.]+@\w+?(\.\w+){1,}$/gi;
    const regPassword = /^[\w\d*]{5,12}$/;
  
  
    //   if (values.name === '') {
    //     error.name = "The name must not be empty";
    //     return false;
    //   } else if (!regName.test(values.name)) {
    //     error.name = "The name doesn't match";
    //   } else {
    //     error.name = "";
    //   }
    //console.log("values");
    //console.log(values);
  
  
    if (values.email === "") {
      error.email = "The email must not be empty";
    } else if (!regEmail.test(values.email)) {
      //console.log(values.email, !regEmail.test(values.email));
      error.email = "The email doesn't match";
    } else {
      error.email = "";
    }
  
  
    if (values.password === "") {
      error.password = "The password must not be empty";
    } else if (!regPassword.test(values.password)) {
      error.password = "The password doesn't match";
      //console.log(values.password, !regEmail.test(values.password));
    } else {
      error.password = "";
    }
  
  
    //console.log("error");
    //console.log(error);
    return error;
  }
  