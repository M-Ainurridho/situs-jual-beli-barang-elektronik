$(function () {
   const showSidebar = 991;
   $(window).on("load", function () {
      if ($(this).innerWidth() > showSidebar) {
         $(".navbar").addClass(["w-75", "ms-auto"]);
         $("main").addClass(["w-75", "ms-auto"]);
      }
   });

   if ($(window).innerWidth() > showSidebar) {
      $(".offcanvas").addClass(["show", "w-25"]);
      $(".navbar-toggler").click(function () {
         $(".navbar").toggleClass("w-75");
         $(".offcanvas").toggleClass(["show", "w-25"]);
         $("main").toggleClass(["w-75", "ms-auto"]);
      });
   }

   if ($(window).innerWidth() < showSidebar) {
      $(".offcanvas").attr("data-bs-backdrop", "true");
   }
});
