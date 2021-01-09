

/* REGISTER ACCESS  */
const registerForm = document.getElementById('form1')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const regUsername = document.getElementById('username')
const regPassword = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const toggleSee1 = document.getElementById("toggle-see1")
const toggleSee2 = document.getElementById("toggle-see2")
const toggleUnSee1 = document.getElementById("toggle-unsee1")
const toggleUnSee2 = document.getElementById("toggle-unsee2")

/* LOGIN ACCESS */
const loginForm = document.getElementById('form2')
const loginUsername = document.getElementById('login-username')
const loginPassword = document.getElementById('login-password')
const loginToggleSee = document.getElementById('toggle-see3')
const loginToggleUnSee = document.getElementById('toggle-unsee3')


/* GLOBAL */
const users = [
  {
    username: "ruona",
    password: "12345678Aa"
    
},

{
    username: "samm",
    password: "87654321Aa"
},

{
    username: "tomm",
    password: "Aa12345678"
}
];
let testName = undefined
let testPass = undefined


let login = false

 let active = []




/* EVENT LISTENERS */
toggleSee1.addEventListener("click", function() {  
  makeSee(regPassword)
})

toggleSee2.addEventListener("click", function() {
  makeSee(confirmPassword)
})

toggleUnSee1.addEventListener("click", function() {
  makeSee(regPassword)
})

toggleUnSee2.addEventListener("click", function() {
  makeSee(confirmPassword)
})

loginToggleSee.addEventListener("click", function() {
  makeSee(loginPassword)
})

loginToggleUnSee.addEventListener("click", function() {
  makeSee(loginPassword)
})

registerForm.addEventListener("submit", (event) => {
  event.preventDefault()
  
  checkRegInputs()
})

loginForm.addEventListener("submit", (event) => {
  event.preventDefault()
  checkUsername(loginUsername.value.trim())
  checkPassword(loginUsername.value.trim(), loginPassword.value.trim())
  checkLogInputs()
})

/* MANIPULATIONS */

function checkRegInputs() {
  const firstNameValue = firstName.value.trim()
  const lastNameValue = lastName.value.trim()
  const emailValue = email.value.trim()
  const regUsernameValue = regUsername.value.trim()
  const regPasswordValue = regPassword.value.trim()
  const confirmPasswordValue = confirmPassword.value.trim()

  if (firstNameValue === "") {  
      setErrorFor(firstName, "Input your first name")
  } else {
      setSuccessFor(firstName)
  }

  if (lastNameValue === "") {  
    setErrorFor(lastName, "Input your last name")
} else {
    setSuccessFor(lastName)
}

if (regUsernameValue === "") {  
  setErrorFor(regUsername, "Input your preferred username name")
} else if(regUsernameValue.length <= 3){
  setErrorFor(regUsername, "Your Username should have more than three characters")
} else (
  setSuccessFor(regUsername)
)

if (emailValue === "") {  
  setErrorFor(email, "Input your email")
}else if(!isEmail(emailValue)) {
  setErrorFor(email, "Input a valid email")
} else {
  setSuccessFor(email)
}

if (regPasswordValue === "") {  
  setErrorFor(regPassword, "Input a password")
} else if (!validPassword(regPasswordValue)){
  setErrorFor(regPassword, "Password must have at least one number, uppercase letter, lowercase letter and be a minimum of 8 characters long");
 
} else {
  setSuccessFor(regPassword)
}

if (confirmPasswordValue === "") {  
  setErrorFor(confirmPassword, "Confirm your password")
} else if(confirmPasswordValue !== regPasswordValue){
  setErrorFor(confirmPassword, "Passwords do not match")
} else {
  setSuccessFor(confirmPassword)
}

if (validForm(firstName) && validForm(lastName) && validForm(email) && validForm(regUsername) && validForm(regPassword) && validForm(confirmPassword)) {
   getInputs(firstNameValue, lastNameValue, emailValue, regUsernameValue, regPasswordValue)

   alert("You have registered sucessfully. Now log in!")
}

}







function checkLogInputs() {
  const loginUsernameValue = loginUsername.value.trim()
  const loginPasswordValue = loginPassword.value.trim()
 
  if (loginUsernameValue === "") {  
    setErrorFor(loginUsername, "Input your username name")
  } else if(loginUsernameValue.length <= 3){
    setErrorFor(loginUsername, "Your Username is too short")
  } else if(testName !== true) {
    setErrorFor(loginUsername, "Username not found")
  } else (
    setSuccessFor(loginUsername)
  )


  if (loginPasswordValue === "") {  
    setErrorFor(loginPassword, "Input your password")
  } else if (!validPassword(loginPasswordValue)){
    setErrorFor(loginPassword, "Password must have at least 1 number, uppercase, lowercase letter and have minimum of 8 characters")
  } else if (testPass !== true) {
      setErrorFor(loginPassword, "Password is incorrect")
  } else {
    setSuccessFor(loginPassword)
  }

  if (validForm(loginUsername) && validForm(loginPassword)) {
  
    alert("You have logged in")
    login = true
    window.location.href = "./diet.html"
    console.log(active)

    console.log(login)
  }

}

console.log(login)

function setErrorFor (input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small')

  small.innerText = message

  formControl.className = "error"
}






function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "success"
}



function isEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email)
}



function validPassword(password) {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

  return re.test(password)
}




function validForm(input) {
  const formControl = input.parentElement;

  return formControl.classList.contains("success")

}




function makeSee(input){
  const formControl = input.parentElement;
  const icon = formControl.parentElement
  if(input.type === "password") {
    input.type = "type"
    icon.className = "seen"
  } else {
    input.type = "password"
    icon.className = "not-seen"
  }
}



function getInputs(name1, name2, email, username, password) {
  users.push({
    name: `${name1} ${name2}`,
    email: email,
    username: username,
    password: password
  })
}


function checkUsername (username) {

for (let i = 0; i < users.length; i++){
  if(users[i].username === username) {
    return testName = true
  } else {
    testName = false
  }
}


}


function checkPassword(username, password) {

  for (let i = 0; i < users.length; i++){
    if(users[i].username === username) {
     let newArr = users[i]
          active.push(newArr)
     if (newArr.password === password) {
       return testPass = true
     } else {
       testPass = false
     }
  } else{
    testPass = false
  }
  
  
  } 
}


