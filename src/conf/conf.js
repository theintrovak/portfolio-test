const Conf = {
    templateid: String(import.meta.env.VITE_EMAILJS_TEMPLATEID),
    serviceid: String(import.meta.env.VITE_EMAILJS_SERVICEID),
    publickey: String(import.meta.env.VITE_EMAILJS_PUBLICKEY),
    privatekey: String(import.meta.env.VITE_EMAILJS_PRIVATEKEY),
}
export default Conf