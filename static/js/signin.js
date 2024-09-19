// ***************To check user is already logged in or not **************************
const checkUser = localStorage.getItem('userInfo')
                  ?JSON.parse(localStorage.getItem('userInfo'))
                  :null;

if(checkUser){
    location.href = '/';
}


//***************************Javascript Segment for Form Validation*************************

const userInfo = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
}

// Function validate() to observe each input in input fields
function validate(e){
    let name = e.name;
    let value = e.value;

    if(name == "username"){
        userInfo.username = value;
    }
    if(name == "email"){
        userInfo.email = value;
    }
    if(name == "password"){
        userInfo.password = value;
    }
    if(name == "confirmPassword"){
        userInfo.confirmPassword = value;
    }
}

// Function handleSubmitRegister() to submit Register form using fetch() function
function handleSubmitRegister(){
    const redirect = location.search.split('=')[1];
    const errMsgRegister = document.querySelector('#errMsgRegister');
    errMsgRegister.innerText = ``;

    if(userInfo.password != userInfo.confirmPassword){
        alert(`Confirm Password does not matched!`);
        return false;
    }

    const url = location.origin+"/signup";

    fetch(url,{
        method:"POST",
        headers: new Headers({
            "Content-type":'application/json'
        }),
        body: JSON.stringify({
            username: userInfo.username,
            email: userInfo.email,
            password: userInfo.password
        })
    }).then((res)=>{
        let promise = res.json();
        if(res.ok){
            promise.then((data)=>{
                localStorage.setItem("userInfo",JSON.stringify(data));
                if(redirect=="shipping"){
                    location.href=`/shipping/${data.token}`;
                }
                else{
                    location.href="/";
                }  
            })
        }
        else{
            promise.then((err)=>{
                errMsgRegister.innerText = `${err.errMsg}`;
            })
        }
    })
    return false;
}

// Function handleSubmitSignin() to submit Signin form using fetch() function
function handleSubmitSignin(){
    const redirect = location.search.split('=')[1];
    const errMsgSignin = document.querySelector('#errMsgSignin');
    errMsgSignin.innerText = ``;

    const url = location.origin+"/signin";

    fetch(url,{
        method:"POST",
        headers: new Headers({
            "Content-type":'application/json'
        }),
        body: JSON.stringify({
            email: userInfo.email,
            password: userInfo.password
        })
    }).then((res)=>{
        let promise = res.json();
        if(res.ok){
            promise.then((data)=>{
                localStorage.setItem("userInfo",JSON.stringify(data)); 
                if(redirect=="shipping"){
                    location.href=`/shipping/${data.token}`;
                }
                else{
                    location.href="/";
                }    
            })
        }
        else{
            promise.then((err)=>{
                errMsgSignin.innerText = `${err.errMsg}`;
            })
        }
    })
    return false;
}