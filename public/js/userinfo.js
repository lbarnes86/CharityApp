$(document).ready(() => {
    // This file just does a GET request to for the currently signed in user so it can populate a userinfo card.
    // and updates the HTML on the page
    $.get("/api/user_data").then(data => {
        $(".card-user").text(data.firstname + data.lastname);
        $(".card-email").text(data.email);
        $(".card-charity").append(data.charity);

    });
});




// $(document).ready(function() {

//     function fetch_data() {
//         var action = "fetch";
//         $jax({
//             url: "action.php",
//             method: "POST",
//             data: { action: action },
//             success: function(data) {
//                 $(`profile_pic`).html(data);

//             }
//         })
//     }
// });