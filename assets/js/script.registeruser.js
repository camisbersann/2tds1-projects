let thereIsUsers = false

class User{
    constructor(name, email, birthdate, city, cellphone, cpf){
        this.name = name;
        this.email= email;
        this.birthdate= birthdate;
        this.city= city;
        this.cellphone = cellphone;
        this.cpf = cpf;
        this.age = this.calculateAge();
        this.sign = this.getZodiacSign();
        this.clients = this.isPossibleClient();
    }

    getZodiacSign() {
        let birthdate = new Date(this.birthdate);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");
    
        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }

    calculateAge(){
        const birthDate = this.birthdate;
        const personYear = new Date(birthDate).getFullYear();
        const todayYear = new Date().getFullYear();
        const personMonth = new Date(birthDate).getMonth();
        const todayMonth = new Date(birthDate).getMonth() +1;

        const ageYear= todayYear - personYear;

        if(personMonth > todayMonth){
            return ageYear -1;
        }else{
            return ageYear;
        }
    }

    isPossibleClient(){ 
        if(this.age >= 18 && this.age <=31){
            return "Sim ✅";
        } else{
            return "Não ❌";
        }
    }

    convertDatetoBR() {
        let dateBR = this.birthdate.split('-')
        dateBR.reverse()
        return dateBR.join('/')
    }
}

class ListUser{
    constructor(){
        this.users= [];
    }

    add(user){
        this.users.push(user);
    }

    getAllUsers(){
        return this.users;
    }

    countUsers(){
      return this.users.length;
    }

}

const list = new ListUser();


function createUser(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const birthdate = document.getElementById("birthdate").value;
    const city = document.getElementById("address").value;
    const cellphone = document.getElementById("phone").value;
    const cpf = document.getElementById("cpf").value;

    const person = new User(name, email, birthdate, city, cellphone, cpf);
    
    if (!isAnyInputEmpty()) {
      sendErrorMsg ('Preencha todos os campos');
    }else if(!valida_cpf(cpf)){
        sendErrorMsg('CPF inválido');
        document.getElementById("cpf").value="";
    }else if (isUserAlreadyRegistered(cpf)) {
        sendErrorMsg('Este CPF já está cadastrado');
    }else{
        list.add(person);
        sendsuccessMsg('Parabéns, você está na lista de espera');
        clearInputs();
        thereIsUsers = true;
        registerUser();
    }
    console.log(isUserAlreadyRegistered(cpf));
}

function registerUser(){
    let html = '';

    list.users.forEach(register =>{
        html += `
        <div class="list-eachUser">
            <p><strong>Nome: </strong>${register.name}</p>
            <p><strong>Idade: </strong>${register.age}</p>
            <p><strong>Signo: </strong>${register.sign}</p>
            <p><strong>Email: </strong>${register.email}</p>
            <p><strong>Data de Nascimento: </strong>${register.convertDatetoBR()}</p>
            <p><strong>Cidade: </strong>${register.city}</p>
            <p><strong>Telefone: </strong>${register.cellphone}</p>
            <p><strong>CPF: </strong>${register.cpf}</p>
            <p><strong>É um possível cliente?: </strong>${register.clients}</p>
        
        
        </div>
        `
    });
    document.getElementById("user-list").innerHTML = html;
    document.getElementById("contador").innerHTML = `Contador: ${list.countUsers()}`;


}
function showUsers(){

    if(thereIsUsers){
        document.getElementById("sub-div").classList.remove("hidden");
    document.getElementById("title-page").classList.add("hidden");
    document.getElementById("main-div").classList.add("hidden");
    }else{
        sendErrorMsg("Não temos nenhum usuário cadastrado")
    }
}

function isAnyInputEmpty(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const birthdate = document.getElementById("birthdate").value;
    const city = document.getElementById("address").value;
    const cellphone = document.getElementById("phone").value;
    const cpf = document.getElementById("cpf").value;

    if(name && email && birthdate && city && cellphone  && cpf){
        return true ;
    }else{
        return false;
      
    }
}

function isUserAlreadyRegistered(cpf){
    let isregistered = false;

    list.users.forEach(user =>{
        if(user.cpf == cpf){
            isregistered = true;
        }
    });

    return isregistered;
}

function clearInputs(){
    document.getElementById("name").value= "";
    document.getElementById("email").value= "";
    document.getElementById("birthdate").value= "";
    document.getElementById("address").value= "";
    document.getElementById("phone").value= "";
    document.getElementById("cpf").value= "";


}



function showRegister() {
    document.getElementById("sub-div").classList.add("hidden");
    document.getElementById("title-page").classList.remove("hidden");
    document.getElementById("main-div").classList.remove("hidden");
    console.log("Passou pela funcao showRegister()");

}

function formatedCPF(cpf) {
    console.log("Passou pela funcao formatedCPF()");

    let cpfArray = cpf.split("");
    let cpfFormated = cpfArray[0] + cpfArray[1] + cpfArray[2]
        + "." + cpfArray[3] + cpfArray[4] + cpfArray[5] + "."
        + cpfArray[6] + cpfArray[7] + cpfArray[8] + "-" + cpfArray[9] + cpfArray[10];
    return cpfFormated;
}

function formatedCellphone(cellphone) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = cellphone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function valida_cpf(cpf) {
    console.log("Passou pela funcao valida_cpf()");

    var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.length < 11)
        return false;
    for (i = 0; i < cpf.length - 1; i++)
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    if (!digitos_iguais) {
        numeros = cpf.substring(0, 9);
        digitos = cpf.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--)
            soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        numeros = cpf.substring(0, 10);
        soma = 0;
        for (i = 11; i > 1; i--)
            soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    }
    else
        return false;
}

function sendErrorMsg(msg) {
    console.log("Passou pela funcao sendErrorMsg()");

    document.getElementById("error-msg").innerHTML = msg;
    document.getElementById("error-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("error-msg").classList.add("hidden");
    }, 4000);
}

function sendsuccessMsg(msg){
    console.log("Passou pela funcao sendsuccessMsg()");

    document.getElementById("success-msg").innerHTML = msg;
    document.getElementById("success-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("success-msg").classList.add("hidden");
    }, 4000);
}


// how many functions are there? 12
// how many classes are there? 2

// Boa sorte!