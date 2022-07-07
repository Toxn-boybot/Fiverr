//Preloader
setTimeout(function () {
  $(".preloader").delay(150).fadeOut("slow");
}, 3000);

//set overflow to hidden when preloading
setTimeout(function () {
  $("body").removeClass("preload");
}, 3000);

//shrink header on scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("ContHeader").style.height = "70px";
    document.getElementById("logo").style.height = "60px";
    document.getElementById("logo2").style.top = "0px";
  } else {
    document.getElementById("ContHeader").style.height = "90px";
    document.getElementById("logo").style.height = "70px";
    document.getElementById("logo2").style.top = "30px";
  }
}

// Alert on click when adding to cart
buttons = Array.from(document.querySelectorAll(".order.btn"));
buttons.forEach(function (e) {
  e.addEventListener("click", function () {
    toastr.success("Item added to your cart");
  });
});

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: "toast-top-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

//Click close button when clicking Order-Now button
 function OrderNow () {
  let orderButton = document.getElementById("OrderNow");
  let Closer = document.getElementById("btn-close");

  orderButton.onclick = function () {
    Closer.click(); // this will trigger the click event
    const y = document.getElementById("our-menu2").offsetTop;
    window.scrollTo(0, y - 50);
  };
};
OrderNow();




//Close the cart menu
function closeCartMenu() {
  let checkout1 = document.getElementById("checkout1");
  let closer2 = document.getElementById("closer2");
  let checkout2 = document.getElementById("checkoutMobileCart");
  let closer3 = document.getElementById("closeMobileCart");
  checkout1.onclick = function () {
    closer2.click();
  };
  checkout2.onclick = function () {
    closer3.click();
  };
  checkout1.addEventListener("click", function () {
    toastr.success("Delivery on its way!");
  });
  checkout2.addEventListener("click", function () {
    toastr.success("Delivery on its way!");
  });
}
closeCartMenu();



//remove item when clicking on action item
