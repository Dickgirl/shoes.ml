$(function() {
q
  "use strict"

  var init = "No items yet!";
  var counter = 0;

  // Initial Cart
  $(".counter").html(init);

  // Add Items To Basket
  function addToBasket() {
    counter++;
    $(".counter").html(counter).animate({
      'opacity' : '0'
    },300, function() {
      $(".counter").delay(300).animate({
        'opacity' : '1'
      })
    })
  }

  // Add To Basket Animation
  $("button").on("click", function() {
    addToBasket(); $(this).parent().parent().find(".product_overlay").css({
      'transform': ' translateY(0px)',
      'opacity': '1',
      'transition': 'all ease-in-out .45s'
    }).delay(1500).queue(function() {
      $(this).css({
        'transform': 'translateY(-500px)',
        'opacity': '0',
        'transition': 'all ease-in-out .45s'
      }).dequeue();
    });
  });
});


/*
  Slidemenu
*/
(function() {
	var $body = document.body
	, $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

	if ( typeof $menu_trigger !== 'undefined' ) {
		$menu_trigger.addEventListener('click', function() {
			$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
		});
	}

}).call(this);

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
new Vue({
  el: '#app',
  data: {
jordan4: [
  {
    name: 'Jordan 4 Retro Black Cat (2020)',
    image: './images/Jordan 4 Retro Black Cat.png',
    price: '500.00',
    id: '621c4595ba110',
    minsize: '6',
    maxsize: '12',
    colour: 'product--black'
  },
  {
    name: 'Jordan 4 Retro University Blue',
    image: './images/Jordan 4 Retro Black Cat.png',
    price: '350.00',
    id: '621c45e3a9602',
    minsize: '7',
    maxsize: '13',
    colour: 'product--blue'
  }
],
jordan1: [
  {
    name: 'Jordan 1 Retro High Bred Toe',
    image: './images/Jordan 1 Retro High Bred Toe.png',
    price: '500.00',
    id: '621c45e686cea',
    minsize: '6',
    maxsize: '11',
    colour: 'product--red'
  },
  {
    name: 'Jordan 1 Retro Chicago (2015)',
    image: './images/Jordan 1 Retro Chicago.png',
    price: '700.00',
    id: '621c45eb7d9d4',
    minsize: '6.5',
    maxsize: '11',
    colour: 'product--red'
  },
  {
    name: 'Jordan 1 Retro High Off-White Chicago',
    image: './images/Jordan 1 Retro High Off-White Chicago.png',
    price: '1200.00',
    id: '621c45e686cea',
    minsize: '7',
    maxsize: '12',
    colour: 'product--red'
  },
  {
    name: 'Jordan 1 Retro High Travis Scott',
    image: './images/Jordan 1 Retro Hights.png',
    price: '700.00',
    id: '621c45ea21633',
    minsize: '6.5',
    maxsize: '12',
    colour: 'product--brown'
  },
  {
    name: 'Jordan 1 Retro High Off-White University Blue',
    image: './images/Jordan 1 ubs.png',
    price: '700.00',
    id: '621c45ea21633',
    minsize: '3',
    maxsize: '12',
    colour: 'product--blue'
  },
  {
    name: 'Jordan 1 Retro High Off-White White',
    image: './images/Jordan 1 Retro High Off-White White.png',
    price: '1200.00',
    id: '621c4908cbd08',
    minsize: '7',
    maxsize: '13',
    colour: 'product--white'
  }
],
featuredshoe: [
  {
    name: 'Jordan 4 Retro Black Cat (2020)',
    image: './images/Jordan 4 Retro Black Cat.png',
    price: '500.00',
    id: '621c4595ba110',
    minsize: '6',
    maxsize: '12',
    colour: 'product--black'
  },
  {
    name: 'Jordan 1 Retro High Off-White White',
    image: './images/Jordan 1 Retro High Off-White White.png',
    price: '1200.00',
    id: '621c4908cbd08',
    minsize: '7',
    maxsize: '13',
    colour: 'product--white'
  }
],


}})
