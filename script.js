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
    image: './images/Jordan 4 Retro University Blue.png',
    price: '350.00',
    id: '621c45e3a9602',
    minsize: '7',
    maxsize: '13',
    colour: 'product--blue'
  },
  {
    name: 'Jordan 4 Retro Off-White Sail (W)',
    image: './images/Jordan 4 Retro Off-White Sail.png',
    price: '700.00',
    id: '621c45ea21633',
    minsize: '6',
    maxsize: '12',
    colour: 'product--white'
  },
  {
    name: '	Jordan 4 Retro Travis Scott Cactus Jack',
    image: './images/Jordan 4 Retro Travis Scott Cactus Jack.png',
    price: '700.00',
    id: '621c47b0ee857',
    minsize: '6.5',
    maxsize: '12',
    colour: 'product--blue'
  },
  {
    name: 'Jordan 4 Retro White Oreo (2021)',
    image: './images/Jordan 4 Retro White Oreo (2021).png',
    price: '350.00',
    id: '621c49d76e5d7',
    minsize: '6',
    maxsize: '13',
    colour: 'product--white'
  },
  {
    name: '	Jordan 4 Retro Fire Red (2020)',
    image: './images/Jordan 4 Retro Fire Red (2020).png',
    price: '350.00',
    id: '621c49f2323ed',
    minsize: '6',
    maxsize: '13',
    colour: 'product--white'
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
  },
  {
    name: 'Jordan 1 Retro High Obsidian UNC',
    image: './images/Obsidian UNC.png',
    price: '300.00',
    id: '622604f2ec509',
    minsize: '6',
    maxsize: '12',
    colour: 'product--blue'
  },
  {
    name: 'Jordan 1 Retro High Rookie of the Year',
    image: './images/Jordan 1 retro high rookie of the year.png',
    price: '450.00',
    id: '621d9d0981df0',
    minsize: '6',
    maxsize: '11',
    colour: 'product--brown'
  },
  {
    name: 'Jordan 1 Retro Storm Blue',
    image: './images/Jordan 1 retro storm blue.png',
    price: '600.00',
    id: '621d9d0981df0',
    minsize: '6.5',
    maxsize: '11',
    colour: 'product--blue'
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
nike: [
  {
    name: 'Nike Air Force 1 Low Off-White Black White',
    image: './images/Nike Air Force 1 Low Off-White Black White.png',
    price: '700.00',
    id: '62260596e24c8',
    minsize: '6',
    maxsize: '11',
    colour: 'product--black'
  },
  {
    name: 'Nike Air Force 1 Low Off-White MCA University Blue',
    image: './images/Nike Air Force 1 Lowub.png',
    price: '1000.00',
    id: '62260bfded209',
    minsize: '6',
    maxsize: '12',
    colour: 'product--blue'
  },
  {
    name: 'Jordan 2 Retro Low SP Off-White White Red',
    image: './images/Jordan 2 Retro Low SP.png',
    price: '500.00',
    id: '62260dc0abe09',
    minsize: '6',
    maxsize: '12',
    colour: 'product--red'
  }
],


}})
