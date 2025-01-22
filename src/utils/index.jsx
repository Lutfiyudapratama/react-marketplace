const formatRupiah = (value) => {
    return `Rp ${new Intl.NumberFormat('id-ID', { minimumFractionDigits: 0 }).format(value)}`
}

export {
    formatRupiah
}