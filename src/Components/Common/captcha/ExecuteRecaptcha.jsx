export default function ExecuteRecaptcha() {
  if (typeof window.grecaptcha !== "undefined") {
    window.grecaptcha.ready(function () {
      window.grecaptcha
        .execute("6LeMoSMrAAAAAPsksQG06PD87F2gwqI6ALl4JzaP", {
          action: "submit",
        })
        .then(function (token) {
          return token;
        });
    });
  } else {
    throw new Error("reCAPTCHA not loaded");
  }
}
