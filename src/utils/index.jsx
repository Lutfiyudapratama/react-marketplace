import axios from "axios"

const formatRupiah = (value) => {
    return `Rp ${new Intl.NumberFormat('id-ID', { minimumFractionDigits: 0 }).format(value)}`
}
const url = import.meta.env.VITE_BASE_URL_API
console.log(url)


const fetchAPI = () => axios.create({
    baseURL: `${url}`,
    headers: {
        "accept": "application/json"
    }
})
export {
    formatRupiah,
    fetchAPI
}