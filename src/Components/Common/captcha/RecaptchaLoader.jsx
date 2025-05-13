import { useEffect } from "react";

const RECAPTCHA_SRC =
  "https://www.google.com/recaptcha/api.js?render=6LeMoSMrAAAAAPsksQG06PD87F2gwqI6ALl4JzaP";

export default function RecaptchaLoader() {
  useEffect(() => {
    if (!document.querySelector(`script[src*="recaptcha"]`)) {
      const script = document.createElement("script");
      script.src = RECAPTCHA_SRC;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    window.onload = function () {
      if (typeof window.grecaptcha !== "undefined") {
        window.grecaptcha.ready(function () {
          console.log("reCAPTCHA ready");
        });
      }
    };

    return () => {
      const el = document.querySelector(`script[src*="recaptcha"]`);
      if (el) el.remove();
    };
  }, []);

  return null;
}
