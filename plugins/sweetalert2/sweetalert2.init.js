
if (document.getElementById('sweetalert-warning') !== null) {
    document.getElementById('sweetalert-warning').addEventListener('click', function () {
        Swal.fire({
            showCloseButton: false,
            confirmButtonText:
                '<i class="mdi mdi-check"></i> متوجه شدم',
            icon: 'error',
            title: 'خطا',
            text: 'حداقل یک فصل برای این دوره تعریف کنید تا به این کارت دسترسی داشته باشید',
        })
    })
}