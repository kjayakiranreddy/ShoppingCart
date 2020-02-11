



  //Login
 const loginUser=()=>{
    let isLoggedIn = false;
     // Check browser support
     console.log(sessionStorage.getItem("username"));
if (typeof(Storage) !== "undefined" && !isLoggedIn && sessionStorage.getItem("username") == null) {
    // Store
    sessionStorage.setItem("username", "jay");
    console.log(sessionStorage.getItem("username"));
     isLoggedIn = true;

    // Retrieve
   // document.getElementById("result").innerHTML = sessionStorage.getItem("username");
  } 

  
  if (isLoggedIn) {mainLoginBtn
    document.getElementById("mainLoginBtn").innerHTML="Logout";
        document.getElementById("exampleModalLabel").innerHTML="Logout";
        document.getElementById("loginbtn").innerHTML="Logout";
        document.getElementById("welcomeTxt").innerHTML=" Welcome Jay "
        
  }else{
    document.getElementById("mainLoginBtn").innerHTML="Login";
    document.getElementById("exampleModalLabel").innerHTML="Login";
    document.getElementById("loginbtn").innerHTML="Login";
    document.getElementById("welcomeTxt").innerHTML=" Welcome "
    sessionStorage.removeItem("username");

  }


  $('#loginbtn').attr("data-dismiss","modal");  


 }