// let enquiryModal = document.querySelector(".enquiryModal")

// let openModal=()=>{
//     enquiryModal.classList.add("showModal")
// }

// // openModal()

// setTimeout(
//     openModal,
//     2000
// )

let enForm = document.querySelector(".enquiry-form");
let notification=document.querySelector(".notification")
enForm.addEventListener("submit", (event) => {
  console.log(event.target);
  // console.log(event.target.fullName.value);
  //  console.log(event.target.phone.value);

  let obj = {
    fullName: event.target.fullName.value,
    phone: event.target.phone.value,
    email: event.target.email.value,
    service: event.target.service.value,
    message: event.target.message.value,
  };
  console.log(obj);
  notification.classList.add("showNotification")

  setTimeout(()=>{
     notification.classList.remove("showNotification")

  },3000)

  event.preventDefault(); //Form Page Refesh Stop Kar Dena
});
