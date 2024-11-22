document.addEventListener('DOMContentLoaded', function () {
    const navbarNav = document.getElementById('navbarNav');
    const dropdownMenu = document.querySelector('.navbar-nav .dropdown');
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Handle click anywhere on the document
    document.addEventListener('click', function (e) {
        const isClickInsideNavbar = navbarNav.contains(e.target);
        const isClickOnToggler = navbarToggler.contains(e.target);

        // Close the navbar if the click is outside the navbar and toggler
        if (!isClickInsideNavbar && !isClickOnToggler) {
            const bsCollapse = new bootstrap.Collapse(navbarNav, { toggle: false });
            bsCollapse.hide(); // Close the navbar menu
        }
    });

    // Prevent the dropdown from closing when clicked
    if (dropdownMenu) {
        dropdownMenu.addEventListener('click', function (e) {
            e.stopPropagation(); // Stop click propagation to keep the dropdown open
        });
    }

    // Handle clicks on the navbar links (except dropdown)
    navbarNav.addEventListener('click', function (e) {
        // Close the navbar if the click is outside the dropdown menu
        if (!dropdownMenu?.contains(e.target) && !e.target.closest('.navbar-toggler')) {
            const bsCollapse = new bootstrap.Collapse(navbarNav, { toggle: false });
            bsCollapse.hide(); // Close the navbar menu
        }
    });
});