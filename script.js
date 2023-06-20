$(document).ready(function(){
    $('#signup').validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true
            },
            // pass:{ 
            //     required: true,
            //     minlength: 8,
            //     mypassword: true
            //  }

        },
        messages:{
            fname:{
                minlength:"not enough" 
            }
        }
    })
})

$.validator.addMethod('mypassword', function(value, element) {
    return this.optional(element) || (value.match(/[a-zA-Z]/) && value.match(/[0-9]/));
},
'Password must contain at least one numeric and one alphabetic character.');

// function verifyPassword() {  
//     var pw = document.getElementById("pswd").value;  
     
//     if(pw == "") {  
//         alert("Enter pass")
//        return false;  
//     }       
//     if(pw.length < 8) {  
//         alert("Enter pass") 
//        return false;  
//     }     
//     if(pw.length > 15) {  
//         alert("Enter pass")  
//        return false;  
//     } else {  
//        alert("Password is correct");  
//     }  
//   } 


function CheckPassword() 
{ 
var pw= document.getElementById('pass').value
var passw=  /^[A-Za-z]\w{7,14}$/;
if(pw.value.match(passw)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}

