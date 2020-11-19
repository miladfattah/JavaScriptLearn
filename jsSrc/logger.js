export default class login {
    static success(message){
        console.log(`%c ${message} ` , 'color : green');
    }
    static error(message){
        console.log(`%c ${message}` , 'color : red');
    }
}


function config(message){
    login.error(message)
}

const name = "milad"

export {
    config,
    name
}



