

window.onload = function () {
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
}


function scrollFunction() {
  if ((document.body.scrollTop > 0 || document.documentElement.scrollTop > 50)) {
    document.getElementById("ContHeader").style.height = "70px";
    document.getElementById("logo").style.height = "50px";
    document.getElementById("logo2").style.top = "0px";
    document.getElementById("logo2").style.backgroundColor = "#f8f9fa";
    document.getElementById("logo2").style.boxShadow = "none";
    
  } else {
    document.getElementById("ContHeader").style.height = "90px";
    document.getElementById("logo").style.height = "70px";
    document.getElementById("logo2").style.top = "30px";
    document.getElementById("logo2").style.backgroundColor = "wheat";
    document.getElementById("logo2").style.boxShadow = "rgb(0 0 0 / 35%) 0px 5px 15px";
    
  }
}
scrollFunction();
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

//Click close button when clicking about
 function about () {
  let aboutButton = document.getElementById("aboutbtn");
  let Closer = document.getElementById("btn-close");
  aboutButton.onclick = function () {
    Closer.click(); // this will trigger the click event
    const y = document.getElementById("about").offsetTop;
    window.scrollTo(0, y - 100);
  };
};
about();

//Click close button when clicking about
 function menu () {
  let menuButton = document.getElementById("menubtn");
  let Closer = document.getElementById("btn-close");
  menuButton.onclick = function () {
    Closer.click(); // this will trigger the click event
    const y = document.getElementById("our-menu2").offsetTop;
    window.scrollTo(0, y - 50);
  };
};
menu();
 


//Click close button when clicking offers
 function offers () {
  let offersButton = document.getElementById("offersbtn");
  let Closer = document.getElementById("btn-close");
  offersButton.onclick = function () {
    Closer.click(); // this will trigger the click event
    const y = document.getElementById("offers").offsetTop;
    window.scrollTo(0, y - 50);
  };
};
offers();
 
//Click close button when clicking contact
 function contact () {
  let contactButton = document.getElementById("contactbtn");
  let Closer = document.getElementById("btn-close");
  contactButton.onclick = function () {
    Closer.click(); // this will trigger the click event
    const y = document.getElementById("contact").offsetTop;
    window.scrollTo(0, y - 50);
  };
};
contact();



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



//update date 
document.getElementById("currYear").textContent = new Date().getFullYear();