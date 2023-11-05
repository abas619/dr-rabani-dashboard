const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

if (document.getElementById("btn-menu") !== null) {
  var btnMenu = document.getElementById("btn-menu");
  var sidebar = document.getElementById("sidebar");
  var sidebarOverlay = document.querySelector(".side-overlay");
  var pagewrapper = document.getElementById("pageWrapper");
  btnMenu.onclick = () => {
    sidebarOverlay.classList.toggle("active");
    sidebar.classList.toggle("hidden");
    pagewrapper.classList.toggle("full-width");
  };
  sidebarOverlay.onclick = () => {
    sidebarOverlay.classList.remove("active");
    sidebar.classList.remove("hidden");
    pagewrapper.classList.remove("full-width");
  };
}

function toggleRadio_files(radioNumber) {
  const allfilesForm = document.querySelectorAll(".files-form");
  const activeForm = document.getElementById(`files-${radioNumber}`);
  allfilesForm.forEach((fileform) => {
    fileform.classList.remove("active");
  });
  activeForm.classList.add("active");
}
