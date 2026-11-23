const btn=document.getElementById('btn');


const container=document.querySelector('.content');



btn.addEventListener('click',e=>{


    container.style.display = 'block';
    container.innerHTML = 'Loading...';
async function getRandomUsers(){

const users=await fetch('https://randomuser.me/api/');

const response=await users.json();


const data=response.results[0];

if(data.gender==='female'){


    document.body.style.backgroundColor='pink';
}else{

    document.body.style.backgroundColor='darkgray';


}




container.innerHTML=` <h1>Hello my name is ${data.name.first} ${data.name.last}!</h1>
<img src="${data.picture.large}" alt="User profile">
<p>do you want to talk to me? here is my email address! ${data.email}</p>
<button id="contact">contact me</button>
`;

const contactBtn=document.getElementById('contact');

contactBtn.addEventListener('click',e=>{

const modal=document.querySelector('.modal');

modal.innerHTML=`   <p>thank you for choosing to see me!</p>
<img src="${data.picture.large}" alt="User profile">
<p>I am available anytime</p>`

modal.style.display='block';
container.style.display='none';

setTimeout(()=>{
container.style.display='block';

modal.style.display='none';

},2000)
})

}


getRandomUsers();

})