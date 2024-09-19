// <!-- ----------------Javascript for toggle menu---------------->
    var MenuItems = document.getElementById("MenuItems");

    MenuItems.style.maxHeight = "0px";

    function menutoggle(){
        if(MenuItems.style.maxHeight == "0px")
            {
                MenuItems.style.maxHeight = "200px";
            }
        else
            {
                MenuItems.style.maxHeight = "0px";
            }
    }


// Javascript Segment to display name of user at navigation signin button
const userDetails = localStorage.getItem('userInfo')
                    ?JSON.parse(localStorage.getItem('userInfo'))
                    :null;

const signin = document.querySelector('#SIGNIN');

signin.innerHTML = `${
                        userDetails
                        ?
                        `
                        <div class="dropdown">
                            <button class="dropbtn"><a href="#" class="userbtn">${userDetails.username}</a></button>
                            <div class="dropdown-content">
                                <a href="#">Profile</a>
                                <a href="#">Orders</a>
                                <a onclick="logout()">Logout</a>
                            </div>
                        </div>
                        `
                        :`<a href="/signin">Signin</a>`
                    }`

// Javascript Segment to Show total cart item beside the cart icon
const totalCartItem = document.querySelector('#totalCartItem');
const cartDetails = localStorage.getItem('cartItem')
                    ?JSON.parse(localStorage.getItem('cartItem'))
                    :null;

totalCartItem.innerHTML = cartDetails.length>0
                            ?`<span id='CARTITEM'>${cartDetails.length}</span>`
                            :``;

// *************** Logout Function to logout the user ***********************
function logout(){
    localStorage.clear();
    location.href = "/signin";
}