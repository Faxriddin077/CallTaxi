export function errorToast(text) {
    this.$swal({
        title: "Xato!",
        text: text,
        icon: "error",
        confirmButtonText: "Tushunarli"
    })
}
