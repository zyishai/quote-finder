import { toast, Zoom } from "react-toastify";

/**
 *
 * @param {import('react-toastify').TypeOptions} type
 * @param {String} text
 */
export function notify(type, text) {
  toast(text, {
    type,
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    draggable: true,
    progress: 0,
    theme: "colored",
    transition: Zoom,
  });
}
