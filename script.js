$(document).ready(function() {

  var nav = $("#nav-bar"),
      mobile = $("#nav-mobile"),
      links = $(".nav-link");

  nav.sticky({topSpacing: 0});

});

/**

$(window).resize(function() {
    if ($(window).width() < 810) {
      mobile.show();
      links.hide();
    } else {
      mobile.hide();
      links.show();
    }
  });

  mobile.onClick(function() {
    showMenu();
  });

  function showMenu() {

  }

  function hideMenu() {

  }

<i id="mobile-icon" class="fa fa-bars fa-2x" aria-hidden="true"></i>

#mobile-icon {
  display: hidden;
  color: #F9FDFF;
}

<script src="https://use.fontawesome.com/0259583fa8.js"></script>
 */