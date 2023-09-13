if (document.getElementById('btn-menu') !== null) {
    var btnMenu = document.getElementById('btn-menu');
    var sidebar = document.getElementById('sidebar');
    var pagewrapper = document.getElementById('pageWrapper');
    btnMenu.onclick = () => {
        sidebar.classList.toggle('hidden')
        pagewrapper.classList.toggle('full-width')
    }
}