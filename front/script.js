let database=[];
let firstName=document.getElementById('fname');
let secondName=document.getElementById('sname');
let dob=document.getElementById('date');
let gender=document.getElementById('gender');
let phoneNum=document.getElementById('phone');
let email=document.getElementById('email');
let vFile=document.getElementById('file');
let address=document.getElementById('textA');
let accType=document.getElementById('x');
let accNum=document.getElementById('accnum')
let register=document.getElementById('register');
let login=document.getElementById('login')
register.addEventListener('click',(e)=>{
    e.preventDefault();
    let data={
        firstname:firstName.value,
        secondName:secondName.value,
        dob:dob.value,
        gender:gender.value,
        phoneNum:phoneNum.value,
        email:email.value,
        vFile:vFile.value,
        address:address.value,
        accType:accType.value,
    }
    console.log(data);
})
login.addEventListener('click',()=>{
    let accNumber=accnum.value;
    let dateofb=dob.value;

})
