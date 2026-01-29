//task 1
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log("ENTER");
  }
});
  //task 1 E.Mail
  const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // səhifənin yenilənməsinin qarşısını alır

  const password = document.getElementById("password").value;

  if (password.length > 5) {
    console.log("İcazə verildi");
  } else {
    console.log("kod 5 simvoldan asagirdir zehmet olmasa yeniden dineyin");
  }
});
