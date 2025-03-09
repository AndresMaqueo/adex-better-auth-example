import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const toast = (msg: string) => {
  Toastify({
    text: msg,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "black",
      color: "white",
    },
  }).showToast();
};
