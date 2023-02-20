let form = document.getElementById("email-form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value;

  let xhr = new XMLHttpRequest();

  // Set up the request
  xhr.open("POST", "./scripts/send-email.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Set up the data to send
  let data = "email=" + encodeURIComponent(email);

  // Send the request
  xhr.send(data);

  // Handle the response
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        alert(response.message);
      } else {
        console.error(xhr.statusText);
      }
    }
  };
});
