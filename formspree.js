// // Formspree integration

// const form = document.getElementById("contact-form");
// const status = document.getElementById("form-status");

// form.addEventListener("submit", async function (event) {
//     event.preventDefault();

//     const formData = new FormData(form);

//     status.textContent = "Sending...";

//     try {
//         const response = await fetch(form.action, {
//             method: "POST",
//             body: formData,
//             headers: {
//                 "Accept": "application/json"
//             }
//         });

//         if (response.ok) {
//             status.textContent = "Message sent successfully!";

//             form.reset();
//         } else {
//             status.textContent = "Something went wrong. Please try again.";
//         }

//     } catch (error) {
//         status.textContent = "Unable to send message. Check your connection.";
//     }
// });