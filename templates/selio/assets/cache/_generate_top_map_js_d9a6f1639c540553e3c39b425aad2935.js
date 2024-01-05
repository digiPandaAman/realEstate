


var markers = new Array();
var map;
var marker_clusterer ;


if(typeof mapStyle == 'undefined') {
    var mapStyle = [
  {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#fcf4dc"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c0c0c0"
      },
      {
        "visibility": "on"
      }
    ]
  }
];
}


$(document).ready(function(){
    var myLocationEnabled = true;
    var style_map = mapStyle;
    var scrollwheelEnabled = true;

    
    if($('#main-map').length){    
        map = L.map('main-map', {
                        center: [37.1656756, 46.762099957356],
                        zoom: 8-2,
            scrollWheelZoom: scrollwheelEnabled,
            dragging: !L.Browser.mobile,

            
            tap: !L.Browser.mobile
        });     
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var positron = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png').addTo(map);

                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.55759455, 77.351679047206],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/29/en/godrej_woods\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=3c59dc048e.jpg&cut=true\" alt=\"Godrej Woods\">        <div class=\"rate-info\">                    <h5>                                                $1.56                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Godrej Woods</h3>            <span><i class=\"la la-map-marker\"></i>Sector 43, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5577363, 77.3234575],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/14/en/godrej_tropical_isle\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=c4ca4238a0.jpg&cut=true\" alt=\"Godrej Tropical Isle\">        <div class=\"rate-info\">                    <h5>                                                $2.49                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Godrej Tropical Isle</h3>            <span><i class=\"la la-map-marker\"></i>Sector 146, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-usd"></i></div><div class="back face"> <i class="fa fa-usd"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.51223945, 77.414255908202],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/12/en/bhutani_alphathum\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=82_2.jpg&cut=true\" alt=\"Bhutani Alphathum\">        <div class=\"rate-info\">                    <h5>                                                $5.36                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Bhutani Alphathum</h3>            <span><i class=\"la la-map-marker\"></i>Sector 90, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-usd"></i></div><div class="back face"> <i class="fa fa-usd"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.50977585, 77.421160935836],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/8/en/bhutani_cyberthum\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=fe9fc289c3.jpg&cut=true\" alt=\"Bhutani Cyberthum\">        <div class=\"rate-info\">                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Bhutani Cyberthum</h3>            <span><i class=\"la la-map-marker\"></i>Sector 140A, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4670734, 77.5137649],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/34/en/ats_dolce\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=c8ffe9a587.jpg&cut=true\" alt=\"ATS Dolce\">        <div class=\"rate-info\">                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ATS Dolce</h3>            <span><i class=\"la la-map-marker\"></i>Greater Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5577363, 77.3234575],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/33/en/kalpataru_vista\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=698d51a19d.jpg&cut=true\" alt=\"Kalpataru Vista\">        <div class=\"rate-info\">                    <h5>                                                $3.98                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Kalpataru Vista</h3>            <span><i class=\"la la-map-marker\"></i>Sector 128, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5577363, 77.3234575],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/32/en/lt_noida\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=65b9eea6e1.jpg&cut=true\" alt=\"L&T Noida\">        <div class=\"rate-info\">                    <h5>                                                $5Cr                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>L&T Noida</h3>            <span><i class=\"la la-map-marker\"></i>Sector 128, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-usd"></i></div><div class="back face"> <i class="fa fa-usd"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5577363, 77.3234575],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/31/en/bhutani_city_center\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=f4b9ec30ad.jpg&cut=true\" alt=\"Bhutani City Center\">        <div class=\"rate-info\">                    <h5>                                                $24L                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Bhutani City Center</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5577363, 77.3234575],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/30/en/godrej_palm_retreat\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=c51ce410c1.jpeg&cut=true\" alt=\"Godrej Palm Retreat\">        <div class=\"rate-info\">                    <h5>                                                $1.14                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Godrej Palm Retreat</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="la la-home"></i></div><div class="back face"> <i class="la la-home"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4742779, 77.5320125],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Villas--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/19/en/godrej_golf_links\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=34173cb38f.jpg&cut=true\" alt=\"Godrej Golf Links\">        <div class=\"rate-info\">                    <h5>                                                $1.8                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Godrej Golf Links</h3>            <span><i class=\"la la-map-marker\"></i>Sector 27, Greater Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5577363, 77.3234575],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/18/en/ats_kingston_heath\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=d67d8ab4f4.jpg&cut=true\" alt=\"ATS Kingston Heath\">        <div class=\"rate-info\">                    <h5>                                                $1.95                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ATS Kingston Heath</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5577363, 77.3234575],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/17/en/ats_picturesque\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=6c8349cc72.jpg&cut=true\" alt=\"ATS Picturesque\">        <div class=\"rate-info\">                    <h5>                                                $2.04                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ATS Picturesque</h3>            <span><i class=\"la la-map-marker\"></i>Sector 152, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4708312, 77.539066961271],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/16/en/ats_destinaire\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/files/strict_cache/575x500b53b3a3d6a.webp\" alt=\"ATS Destinaire\">        <div class=\"rate-info\">                    <h5>                                                $1.89                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ATS Destinaire</h3>            <span><i class=\"la la-map-marker\"></i>Sector 1, Greater Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="la la-home"></i></div><div class="back face"> <i class="la la-home"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5577363, 77.3234575],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Villas--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/15/en/ats_pristine_villas\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=a3f390d88e.jpg&cut=true\" alt=\"ATS Pristine Villas\">        <div class=\"rate-info\">                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ATS Pristine Villas</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-usd"></i></div><div class="back face"> <i class="fa fa-usd"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.55759455, 77.351679047206],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/13/en/godrej_woods_plaza\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=portfolio_01.jpg&cut=true\" alt=\"Godrej Woods Plaza\">        <div class=\"rate-info\">                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Godrej Woods Plaza</h3>            <span><i class=\"la la-map-marker\"></i>Sector 43, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="la la-home"></i></div><div class="back face"> <i class="la la-home"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [45.8642778, 15.985132953442],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: --><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/7/en/toplice_bliznec\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=386182116_5e4c8542ab_b.jpg&cut=true\" alt=\"Toplice Bliznec\">        <div class=\"rate-info\">                    <h5>                                                $40,000 /  $400                                        </h5>                    <span class=\"purpose-Prodaja i najam\">                Prodaja i najam            </span>         </div>        <div class=\"listing-item-content\">            <h3>Toplice Bliznec</h3>            <span><i class=\"la la-map-marker\"></i>Bliznec 34z, Zagreb</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                map.addLayer(clusters);   
        
                /* set center */
        if(markers.length){
            var limits_center = [];
            for (var i in markers) {
                if(typeof markers[i]['_latlng'] == 'undefined') continue;
                var latLngs = [ markers[i].getLatLng() ];
                limits_center.push(latLngs)
            };
            var bounds = L.latLngBounds(limits_center);
                            map.fitBounds(bounds);
                   }
                
        if(!markers.length){
                    }
    } 
    })

