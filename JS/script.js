if($("#menu-btn")){
$("#menu-btn").click(()=>{
    $("#side-sec").toggleClass("active")
})
// console.log("Helo")
}
let isNumeric = /^\d+$/;

$("#cont-form").submit(ContactForm);

function ContactForm(e) {
    e.preventDefault();
    let submit = true;

    // Clear previous Errors.
    $("#namepara").text("");
    $("#emailpara").text("");
    $("#phonepara").text("");
    $("#textpara").text(""); 

    // Validate name
    if ($("#name").val().trim() == "") {
        $("#namepara").text("Enter name.");  
        submit = false;
    }

    // Validate email
    if ($("#email").val().trim() == "") {
        $("#emailpara").text("Enter Email."); 
        submit = false;
    } else if (!$("#email").val().includes("@")) {
        $("#emailpara").text("Enter valid Email with '@' character.");  
        submit = false;
    }

    // Validate phone
    if ($("#phone").val().trim() == "") {
        $("#phonepara").text("Enter Phone.");
        submit = false;
    } else if ($("#phone").val().length != 11) {
        $("#phonepara").text("Please enter a valid phone number.");  
        submit = false;
    } else if (!isNumeric.test($("#phone").val())) {
        $("#phonepara").text("Number should be Numeric.");
        submit = false;
    }

    // Validate TextArea
    if ($("#text").val().trim() == "") {
        $("#textpara").text("Enter Message."); 
        submit = false;
    }

    // If validation passes
    if (submit) {
        alert("Form submitted successfully!");

        // Reset the form
        $("#cont-form")[0].reset(); 

        
    }
}


// window.addEventListener("scroll", () => {

// });

