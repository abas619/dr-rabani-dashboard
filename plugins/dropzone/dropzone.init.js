Dropzone.options.fileImagesUploadCover = {
    paramName: "file",
    maxFilesize: 0.5,
    url: "/your-upload-url",
    parallelUploads: 1,
    uploadMultiple: false,
    acceptedFiles: "image/*"
    // accept: function (file, done) {
    //     if (file.name == "justinbieber.jpg") {
    //         done("Naha, you don't.");
    //     }
    //     else { done(); }
    // }
}
Dropzone.options.fileImagesUploadBg = {
    paramName: "file",
    maxFilesize: 1,
    url: "/your-upload-url",
    parallelUploads: 1,
    uploadMultiple: false,
    acceptedFiles: "image/*"
}


document.addEventListener("DOMContentLoaded", function () {
    const myModalEl = document.getElementById('modal-add-files')

    myModalEl.addEventListener("shown.bs.modal", function () {
        // مودال نمایش داده شده است، پس می‌توانید Dropzone را فراخوانی کنید.
        var dropzoneElement = document.createElement("div");
        dropzoneElement.className = "dropzone";
        document.querySelector(".modal-file-upload").appendChild(dropzoneElement);

        // تنظیمات Dropzone را در اینجا قرار دهید
        var dropzoneOptions = {
            url: "/your-upload-url", // URL برای آپلود فایل‌ها
            paramName: "file", // نام پارامتر برای فایل‌ها
            maxFilesize: 1, // حداکثر اندازه فایل (مگابایت)
            acceptedFiles: "image/*", // نوع فایل‌های قابل قبول
            // دیگر تنظیمات...
        };

        var myDropzone = new Dropzone(dropzoneElement, dropzoneOptions);
    });

});