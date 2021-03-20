const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


function myFunction(){
  if (screen.width < 800) {
      alert('Best viewed on Desktop');
      console.clear();
  }}


// signUpButton.addEventListener('click', () => {
// 	container.classList.add("right-panel-active");
// });

// signInButton.addEventListener('click', () => {
// 	container.classList.remove("right-panel-active");
// });
// <-----------------------------VISUAL SCRIPT--------------------------->
function vis(){
document.getElementById('Profile').style.display ="contents";
document.getElementById('Request').style.display ="none";
document.getElementById('Volunteer').style.display ="none";
document.getElementById('Donate').style.display ="none";

console.clear();
}
function vis1(){
document.getElementById('Profile').style.display ="contents";
document.getElementById('Request').style.display ="none";
document.getElementById('Volunteer').style.display ="none";
document.getElementById('Donate').style.display ="none";

}
function vis2(){
	document.getElementById('Request').style.display ="contents";
document.getElementById('Profile').style.display ="none";
document.getElementById('Volunteer').style.display ="none";
document.getElementById('Donate').style.display ="none";

}
function vis3(){
	document.getElementById('Volunteer').style.display ="contents";
document.getElementById('Profile').style.display ="none";
document.getElementById('Request').style.display ="none";
document.getElementById('Donate').style.display ="none";

visFunction();
}
function vis4(){
	document.getElementById('Donate').style.display ="contents";
document.getElementById('Profile').style.display ="none";
document.getElementById('Volunteer').style.display ="none";
document.getElementById('Request').style.display ="none";

}

// <-----------------------------VISUAL SCRIPT END ---------------------->

// <-----------------------------LEAD SUBMITTED ------------------------->
function visFunction() {
    document.getElementById("Appimg").style.display = "contents";
    document.getElementById("Accdimg").style.display = "none";
    document.getElementById("rejectedimg").style.display = "none";
    
   
   
    document.getElementById("Appbtn").style.backgroundColor = "#CC0063";
    document.getElementById("Accbtn").style.backgroundColor = "#FF6633";
    document.getElementById("rejectedbtn").style.backgroundColor = "#FF6633";
    

}

function visFunction1() {
    document.getElementById("Appimg").style.display = "none";
    document.getElementById("Accimg").style.display = "contents";
    document.getElementById("rejectedimg").style.display = "none";
   


    document.getElementById("Appbtn").style.backgroundColor = "#FF6633";
    document.getElementById("Accbtn").style.backgroundColor = "#CC0063";
    document.getElementById("rejectedbtn").style.backgroundColor = "#FF6633";
    

}

function visFunction2() {
    document.getElementById("Appimg").style.display = "none";
    document.getElementById("Accimg").style.display = "none";
    document.getElementById("rejectedimg").style.display = "contents";
   


    document.getElementById("Appbtn").style.backgroundColor = "#FF6633";
    document.getElementById("Accbtn").style.backgroundColor = "#FF6633";
    document.getElementById("rejectedbtn").style.backgroundColor = "#CC0063";
    

}

//<----------------------------LEAD SUBMITTED ENDS---------------------->


function visFunction4() {
    document.getElementById("openimg_").style.display = "contents";
    document.getElementById("validatedimg_").style.display = "none";
    document.getElementById("rejectedimg_").style.display = "none";
    document.getElementById("closedimg_").style.display = "none";
   
   
    document.getElementById("open_btn").style.backgroundColor = "#F04705";
    document.getElementById("validated_btn").style.backgroundColor = "#6c63ff";
    document.getElementById("rejected_btn").style.backgroundColor = "#6c63ff";
    document.getElementById("closed_btn").style.backgroundColor = "#6c63ff";

}

function visFunction5() {
    document.getElementById("openimg_").style.display = "none";
    document.getElementById("validatedimg_").style.display = "contents";
    document.getElementById("rejectedimg_").style.display = "none";
    document.getElementById("closedimg_").style.display = "none";


    document.getElementById("open_btn").style.backgroundColor = "#6c63ff";
    document.getElementById("validated_btn").style.backgroundColor = "#F04705";
    document.getElementById("rejected_btn").style.backgroundColor = "#6c63ff";
    document.getElementById("closed_btn").style.backgroundColor = "#6c63ff";
    console.clear();
}

function visFunction6() {
    document.getElementById("openimg_").style.display = "none";
    document.getElementById("validatedimg_").style.display = "none";
    document.getElementById("rejectedimg_").style.display = "contents";
    document.getElementById("closedimg_").style.display = "none";


    document.getElementById("open_btn").style.backgroundColor = "#6c63ff";
    document.getElementById("validated_btn").style.backgroundColor = "#6c63ff";
    document.getElementById("rejected_btn").style.backgroundColor = "#F04705";
    document.getElementById("closed_btn").style.backgroundColor = "#6c63ff";

}

function visFunction7() {
    document.getElementById("openimg_").style.display = "none";
    document.getElementById("validatedimg_").style.display = "none";
    document.getElementById("rejectedimg_").style.display = "none";
    document.getElementById("closedimg_").style.display = "contents";


    document.getElementById("open_btn").style.backgroundColor = "#6c63ff";
    document.getElementById("validated_btn").style.backgroundColor = "#6c63ff";
    document.getElementById("rejected_btn").style.backgroundColor = "#6c63ff";
    document.getElementById("closed_btn").style.backgroundColor = "#F04705";

}


/*************************************Admin *******************/

function visFunction8() {
    document.getElementById("openimg1").style.display = "contents";
    document.getElementById("validatedimg1").style.display = "none";
    document.getElementById("rejectedimg1").style.display = "none";
    document.getElementById("closedimg1").style.display = "none";
    console.clear();
   
    document.getElementById("openbtn1").style.backgroundColor = "#F04705";
    document.getElementById("validatedbtn1").style.backgroundColor = "#6c63ff";
    document.getElementById("rejectedbtn1").style.backgroundColor = "#6c63ff";
    document.getElementById("closedbtn1").style.backgroundColor = "#6c63ff"
}
function visFunction9() {
    document.getElementById("openimg1").style.display = "none";
    document.getElementById("validatedimg1").style.display = "contents";
    document.getElementById("rejectedimg1").style.display = "none";
    document.getElementById("closedimg1").style.display = "none";


    document.getElementById("openbtn1").style.backgroundColor = "#6c63ff";
    document.getElementById("validatedbtn1").style.backgroundColor = "#F04705";
    document.getElementById("rejectedbtn1").style.backgroundColor = "#6c63ff";
    document.getElementById("closedbtn1").style.backgroundColor = "#6c63ff";

}

function visFunction10() {
    document.getElementById("openimg1").style.display = "none";
    document.getElementById("validatedimg1").style.display = "none";
    document.getElementById("rejectedimg1").style.display = "contents";
    document.getElementById("closedimg1").style.display = "none";


    document.getElementById("openbtn1").style.backgroundColor = "#6c63ff";
    document.getElementById("validatedbtn1").style.backgroundColor = "#6c63ff";
    document.getElementById("rejectedbtn1").style.backgroundColor = "#F04705";
    document.getElementById("closedbtn1").style.backgroundColor = "#6c63ff";

}

function visFunction11() {
    document.getElementById("openimg1").style.display = "none";
    document.getElementById("validatedimg1").style.display = "none";
    document.getElementById("rejectedimg1").style.display = "none";
    document.getElementById("closedimg1").style.display = "contents";


    document.getElementById("openbtn1").style.backgroundColor = "#6c63ff";
    document.getElementById("validatedbtn1").style.backgroundColor = "#6c63ff";
    document.getElementById("rejectedbtn1").style.backgroundColor = "#6c63ff";
    document.getElementById("closedbtn1").style.backgroundColor = "#F04705";

}

function vis20Function() {
  document.getElementById("openimg20").style.display = "contents";
  document.getElementById("validatedimg20").style.display = "none";
  document.getElementById("rejectedimg20").style.display = "none";
 
 
  document.getElementById("openbtn20").style.backgroundColor = "#F04705";
  document.getElementById("validatedbtn20").style.backgroundColor = "#6c63ff";
  document.getElementById("rejectedbtn20").style.backgroundColor = "#6c63ff";

}

function vis20Function1() {
  document.getElementById("openimg20").style.display = "none";
  document.getElementById("validatedimg20").style.display = "contents";
  document.getElementById("rejectedimg20").style.display = "none";

  document.getElementById("openbtn20").style.backgroundColor = "#6c63ff";
  document.getElementById("validatedbtn20").style.backgroundColor = "#F04705";
  document.getElementById("rejectedbtn20").style.backgroundColor = "#6c63ff";

}

function vis20Function2() {
  document.getElementById("openimg20").style.display = "none";
  document.getElementById("validatedimg20").style.display = "none";
  document.getElementById("rejectedimg20").style.display = "contents";


  document.getElementById("openbtn20").style.backgroundColor = "#6c63ff";
  document.getElementById("validatedbtn20").style.backgroundColor = "#6c63ff";
  document.getElementById("rejectedbtn20").style.backgroundColor = "#F04705";
 

}
//<-----------------------------Filter segment admin page script --------------------------->
