//=require jquery.min.js

// to inlude plugins add "=" sign below
// require bootstrap.min.js
// require slick.min.js 

;(function($){

	$(document).ready(function(){
		
	});
    $('.blog-aside__posts-title').on('click', function(evt) {
         evt.preventDefault();

        $(this).addClass("blog-aside__posts-title--active");
        $(this).siblings().removeClass("blog-aside__posts-title--active");
        $('.blog-aside__posts-content').hide();
        
        $($(this).attr("href")).show();
        /*$('.blog-aside__posts-block').hide();
        if ($('.blog-aside__posts-latest.blog-aside__posts-title--active')) {
            $('.blog-aside__posts-latest.blog-aside__posts-block').addClass('blog-aside__posts-block-active');
        }*/ 
        //  if ($('.blog-aside__posts-popular').has('.blog-aside__posts-title--active')) {
        //     $('.blog-aside__posts-popular.blog-aside__posts-block').show();
        // if ($('.blog-aside__posts-comments').has('.blog-aside__posts-title--active')) {
        //     $('.blog-aside__posts-comments.blog-aside__posts-block').show();
        // } 
    });
})(jQuery);

$(window).on('load', function(){
 
 var map = new google.maps.Map(document.getElementById('map'), {
 	center: {lat: 40.741895, lng: -73.989308},
 	zoom: 17,	
 	styles: [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
]

 });
 var marker = new google.maps.Marker({
 	map: map,
 	position: {lat: 40.741895, lng: -73.989308},
 	icon: 'img/pointer.png'
 });
 //initMap();	
});