    function switchScreen(screen){

document.getElementById('login-screen').classList.add('hidden');
document.getElementById('signup-screen').classList.add('hidden');
document.getElementById('welcome-screen').classList.add('hidden');

document.getElementById({screen}-screen).classList.remove('hidden');

document.getElementById('login-msg').style.display='none';
document.getElementById('signup-msg').style.display='none';

}

function showMessage(id,text,type){

const msgBox=document.getElementById(id);

msgBox.textContent=text;
msgBox.style.display='block';

msgBox.className=message-box`{type==='error'?'msg-error':'msg-success'}`;

}

document.getElementById('signup-form').addEventListener('submit',(e)=>{

e.preventDefault();

const user=document.getElementById('signup-user').value.trim();
const pass=document.getElementById('signup-pass').value;

if(pass.length<4){
showMessage('signup-msg','Senha deve ter pelo menos 4 caracteres','error');
return;
}

let users=JSON.parse(localStorage.getItem('users'))||[];

if(users.some(u=>u.username===user)){
showMessage('signup-msg','Usuário já existe','error');
return;
}

users.push({username:user,password:pass});

localStorage.setItem('users',JSON.stringify(users));

showMessage('signup-msg','Cadastro realizado!','success');

setTimeout(()=>{

document.getElementById('signup-form').reset();

switchScreen('login');

showMessage('login-msg','Conta criada! Faça login.','success');

},1500);

});

document.getElementById('login-form').addEventListener('submit',(e)=>{

e.preventDefault();

const user=document.getElementById('login-user').value.trim();
const pass=document.getElementById('login-pass').value;

let users=JSON.parse(localStorage.getItem('users'))||[];

const foundUser=users.find(u=>u.username===user && u.password===pass);

if(foundUser){

document.getElementById('display-user').textContent=user;

switchScreen('welcome');

}else{

showMessage('login-msg','Usuário ou senha incorretos','error');

}

});

function logout(){}

document.getElementById('login-form').reset();

switchScreen('login');