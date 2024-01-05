


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
                        center: [28.5262378, 77.215281],
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/29/en/godrej_woods\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=godrej_woods_1.jpg&cut=true\" alt=\"Godrej Woods\">        <div class=\"rate-info\">                    <h5>                                                ₹15.6                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Godrej Woods</h3>            <span><i class=\"la la-map-marker\"></i>Sector 43, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/14/en/godrej_tropical_isle\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=godrej_tropical_isle1.jpg&cut=true\" alt=\"Godrej Tropical Isle\">        <div class=\"rate-info\">                    <h5>                                                ₹2.49                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Godrej Tropical Isle</h3>            <span><i class=\"la la-map-marker\"></i>Sector 146, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/12/en/bhutani_alphathum\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=bhutani_alphathum_2.jpg&cut=true\" alt=\"Bhutani Alphathum\">        <div class=\"rate-info\">                    <h5>                                                ₹5.36                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Bhutani Alphathum</h3>            <span><i class=\"la la-map-marker\"></i>Sector 90, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/8/en/bhutani_cyberthum\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=bhutani_cyberthum104.jpg&cut=true\" alt=\"Bhutani Cyberthum\">        <div class=\"rate-info\">                    <h5>                                                ₹P,ri,ce,on,Re,qu,est                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Bhutani Cyberthum</h3>            <span><i class=\"la la-map-marker\"></i>Sector 140A, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.3981205, 76.9411257],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/286/en/dlf_the_skycourt\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=dlf_the_skycourt7.jpg&cut=true\" alt=\"DLF The Skycourt\">        <div class=\"rate-info\">                    <h5>                                                ₹1.43                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>DLF The Skycourt</h3>            <span><i class=\"la la-map-marker\"></i>Sector 86, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.728312, 77.087890049594],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/285/en/delhi_developers_homes\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=no_image.jpg&cut=true\" alt=\"Delhi Developers Homes\">        <div class=\"rate-info\">                    <h5>                                                ₹45,L-4.32                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Delhi Developers Homes</h3>            <span><i class=\"la la-map-marker\"></i>Sector 24 Rohini, North Delhi</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.3241636, 77.08486438023],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/284/en/ashiana_anmol\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=358446399.jpg&cut=true\" alt=\"Ashiana Anmol\">        <div class=\"rate-info\">                    <h5>                                                ₹95.16                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Ashiana Anmol</h3>            <span><i class=\"la la-map-marker\"></i>Sohna, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.728312, 77.087890049594],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/283/en/delhi_developers_homes\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=delhidev1.webp&cut=true\" alt=\"Delhi Developers Homes\">        <div class=\"rate-info\">                    <h5>                                                ₹45,L-4.32                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Delhi Developers Homes</h3>            <span><i class=\"la la-map-marker\"></i>Sector 24 Rohini, North Delhi</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.403652, 76.9531428],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/282/en/ss_the_leaf\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=8a9fb5827bc05b40017bc0cf24932d43_outdoor_bnexfrvoyg1633778546124.jpg&cut=true\" alt=\"SS The Leaf\">        <div class=\"rate-info\">                    <h5>                                                ₹1.25                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>SS The Leaf</h3>            <span><i class=\"la la-map-marker\"></i>Sector 85, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.3241636, 77.08486438023],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/281/en/godrej_nature_plus\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=godrej_nature_plus3.jpg&cut=true\" alt=\"Godrej Nature Plus\">        <div class=\"rate-info\">                    <h5>                                                ₹1.15                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Godrej Nature Plus</h3>            <span><i class=\"la la-map-marker\"></i>Sector-33 Sohna, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5109205, 77.0065956],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/280/en/international_city_by_sobha_phase_2\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=international_city_banner_1%20%281%29.jpg&cut=true\" alt=\"International City by SOBHA Phase 2\">        <div class=\"rate-info\">                    <h5>                                                ₹5.99                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>International City by SOBHA Phase 2</h3>            <span><i class=\"la la-map-marker\"></i>Sector 109, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.506318, 77.0655182],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/279/en/ambience_creacions\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=ambience_creacions5.jpg&cut=true\" alt=\"Ambience Creacions\">        <div class=\"rate-info\">                    <h5>                                                ₹2.34                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Ambience Creacions</h3>            <span><i class=\"la la-map-marker\"></i>Sector 22, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.51319, 77.161373081191],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/278/en/kiera_london_house\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=kieralondon1.webp&cut=true\" alt=\"Kiera London House\">        <div class=\"rate-info\">                    <h5>                                                ₹60,L-2.5                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Kiera London House</h3>            <span><i class=\"la la-map-marker\"></i>Vasant Kunj, South Delhi</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.6529982, 77.1890227],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/277/en/unity_group_the_amaryllis\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=unitygroup1.webp&cut=true\" alt=\"Unity Group The Amaryllis\">        <div class=\"rate-info\">                    <h5>                                                ₹1.95                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Unity Group The Amaryllis</h3>            <span><i class=\"la la-map-marker\"></i>Karol Bagh, Central Delhi</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.657859, 77.1424288],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/276/en/dlf_one_midtown\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=dlfmid1.jpg&cut=true\" alt=\"DLF One Midtown\">        <div class=\"rate-info\">                    <h5>                                                ₹3.75                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>DLF One Midtown</h3>            <span><i class=\"la la-map-marker\"></i>Moti Nagar, West Delhi</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4480039, 76.9697682],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/275/en/bptp_terra\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=bptp_terra1.jpg&cut=true\" alt=\"BPTP Terra\">        <div class=\"rate-info\">                    <h5>                                                ₹2.08                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>BPTP Terra</h3>            <span><i class=\"la la-map-marker\"></i>Sector 37D, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4847674, 77.111900373361],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/274/en/godrej_101\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=godrej_1014.jpg&cut=true\" alt=\"Godrej 101\">        <div class=\"rate-info\">                    <h5>                                                ₹1.25                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Godrej 101</h3>            <span><i class=\"la la-map-marker\"></i>Sector 79, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4754872, 76.9711747],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/273/en/bptp_amstoria\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=bptp_amstoria4.jpg&cut=true\" alt=\"BPTP Amstoria\">        <div class=\"rate-info\">                    <h5>                                                ₹1.8                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>BPTP Amstoria</h3>            <span><i class=\"la la-map-marker\"></i>Sector 102, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4645549, 76.9628585],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/272/en/assotech_blith\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=assotech_blith1.png&cut=true\" alt=\"Assotech Blith\">        <div class=\"rate-info\">                    <h5>                                                ₹1.16                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Assotech Blith</h3>            <span><i class=\"la la-map-marker\"></i>Sector 99, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4042354, 77.069257732403],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/271/en/m3m_golfestate\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=m3m_golfestate1.jpg&cut=true\" alt=\"M3M Golfestate\">        <div class=\"rate-info\">                    <h5>                                                ₹4.5                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>M3M Golfestate</h3>            <span><i class=\"la la-map-marker\"></i>Sector 65, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.493087, 76.9866453],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/270/en/oxirich_chintamanis\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=oxirich_chintamani4.jpg&cut=true\" alt=\"Oxirich Chintamanis\">        <div class=\"rate-info\">                    <h5>                                                ₹1.99                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Oxirich Chintamanis</h3>            <span><i class=\"la la-map-marker\"></i>Sector 103 Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4795324, 76.9937197],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/269/en/hero_homes_tower_8\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=hero_homes_tower3.jpg&cut=true\" alt=\"Hero Homes Tower 8\">        <div class=\"rate-info\">                    <h5>                                                ₹3.5                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Hero Homes Tower 8</h3>            <span><i class=\"la la-map-marker\"></i>Sector 104 Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4104903, 77.0394627],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/268/en/central_park_resorts\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=central_park_resorts_gurgaon1.jpg&cut=true\" alt=\"Central Park Resorts\">        <div class=\"rate-info\">                    <h5>                                                ₹3,-15.61                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Central Park Resorts</h3>            <span><i class=\"la la-map-marker\"></i>Sector 48, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4847674, 77.111900373361],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/267/en/birla_navya_avik\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=birla_navya_avik5.jpg&cut=true\" alt=\"Birla Navya Avik\">        <div class=\"rate-info\">                    <h5>                                                ₹3.15                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Birla Navya Avik</h3>            <span><i class=\"la la-map-marker\"></i>Sector 63A, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4287011, 77.0666877],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/266/en/orchid_ivy_floors\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=orchid_ivy_floor1.jpg&cut=true\" alt=\"Orchid IVY Floors\">        <div class=\"rate-info\">                    <h5>                                                ₹2.81                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Orchid IVY Floors</h3>            <span><i class=\"la la-map-marker\"></i>Sector 51, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4714259, 77.0939371],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/265/en/luxury_dlf_city_floors\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=luxury_dlf_city_floor3.jpg&cut=true\" alt=\"Luxury DLF City Floors\">        <div class=\"rate-info\">                    <h5>                                                ₹3-5.83                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Luxury DLF City Floors</h3>            <span><i class=\"la la-map-marker\"></i>DLF Phase 1, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4480039, 76.9697682],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/264/en/signature_global_city\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/files/strict_cache/575x500signature_global_city_5.webp\" alt=\"Signature Global City\">        <div class=\"rate-info\">                    <h5>                                                ₹61.15                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Signature Global City</h3>            <span><i class=\"la la-map-marker\"></i>Sector 37D, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.3964476, 77.086498],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/263/en/adani_samsara_avasa\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=entry_gate_view.jpg&cut=true\" alt=\"Adani Samsara Avasa\">        <div class=\"rate-info\">                    <h5>                                                ₹3.5                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Adani Samsara Avasa</h3>            <span><i class=\"la la-map-marker\"></i>Sector 63 Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.3241636, 77.08486438023],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/262/en/central_park_flower_valley\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=central_park_flower_valley4.jpg&cut=true\" alt=\"Central Park Flower Valley\">        <div class=\"rate-info\">                    <h5>                                                ₹1.09                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Central Park Flower Valley</h3>            <span><i class=\"la la-map-marker\"></i>Sector-33 Sohna, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4042354, 77.069257732403],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/261/en/emaar_emerald_hills\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=floorsselectbanner.png&cut=true\" alt=\"Emaar Emerald Hills\">        <div class=\"rate-info\">                    <h5>                                                ₹9,9L,-28.57                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Emaar Emerald Hills</h3>            <span><i class=\"la la-map-marker\"></i>Sector 65 Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5636616, 77.2890546],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/260/en/godrej_prima\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=godrejprima4.jpg&cut=true\" alt=\"Godrej Prima\">        <div class=\"rate-info\">                    <h5>                                                ₹2.38                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Godrej Prima</h3>            <span><i class=\"la la-map-marker\"></i>Okhla, South Delhi</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5968507, 77.073502411533],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/259/en/garur_golf_island\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=garurgolf1.jpg&cut=true\" alt=\"Garur Golf Island\">        <div class=\"rate-info\">                    <h5>                                                ₹6Cr                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Garur Golf Island</h3>            <span><i class=\"la la-map-marker\"></i>Sector 19B Dwarka, Dwarka Delhi</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.407697, 77.0823781],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/257/en/pioneer_araya\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=pioneer_araya1.jpg&cut=true\" alt=\"Pioneer Araya\">        <div class=\"rate-info\">                    <h5>                                                ₹5.95                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Pioneer Araya</h3>            <span><i class=\"la la-map-marker\"></i>Sector 62, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4149443, 76.9114892],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/256/en/saan_verdante\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=backside_view_884x1024.jpg&cut=true\" alt=\"Saan Verdante\">        <div class=\"rate-info\">                    <h5>                                                ₹1.96                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Saan Verdante</h3>            <span><i class=\"la la-map-marker\"></i>Sector 95, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4110188, 77.0963685],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/255/en/smart_world_orchard\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=smart_world_orchard4.jpg&cut=true\" alt=\"Smart World Orchard\">        <div class=\"rate-info\">                    <h5>                                                ₹1.76                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Smart World Orchard</h3>            <span><i class=\"la la-map-marker\"></i>Sector 61, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4554059, 76.9510278],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/254/en/pareena_coban_residences\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/files/strict_cache/575x500pareena_coban_residences1.webp\" alt=\"Pareena Coban Residences\">        <div class=\"rate-info\">                    <h5>                                                ₹1.12                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Pareena Coban Residences</h3>            <span><i class=\"la la-map-marker\"></i>Sector 99A, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4847674, 77.111900373361],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/253/en/anant_raj_estates\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=home_2_min_e1681365054553.jpg&cut=true\" alt=\"Anant Raj Estates\">        <div class=\"rate-info\">                    <h5>                                                ₹3,-22.75                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Anant Raj Estates</h3>            <span><i class=\"la la-map-marker\"></i>Sector 63A, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4847674, 77.111900373361],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/252/en/4s_aradhya_homes\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=4s_aradhya_homes3.jpeg&cut=true\" alt=\"4S Aradhya Homes\">        <div class=\"rate-info\">                    <h5>                                                ₹2.45                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>4S Aradhya Homes</h3>            <span><i class=\"la la-map-marker\"></i>Sector 67A, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.44161105, 77.111871782334],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/251/en/dlf_park_place\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=dlf_park_place3.jpg&cut=true\" alt=\"DLF Park Place\">        <div class=\"rate-info\">                    <h5>                                                ₹3.94                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>DLF Park Place</h3>            <span><i class=\"la la-map-marker\"></i>Sector 54, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4110188, 77.0963685],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/250/en/puri_the_aravallis\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=puri_sector_61_gurgaon.jpg&cut=true\" alt=\"Puri The Aravallis\">        <div class=\"rate-info\">                    <h5>                                                ₹4.32                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Puri The Aravallis</h3>            <span><i class=\"la la-map-marker\"></i>Sector 61, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4489095, 76.9880502],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/249/en/ild_grand\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=ild_grand4.jpg&cut=true\" alt=\"ILD Grand\">        <div class=\"rate-info\">                    <h5>                                                ₹85.99                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ILD Grand</h3>            <span><i class=\"la la-map-marker\"></i>Sector 37C, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4558973, 77.1084759],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/248/en/dlf_the_magnolias\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=dlf_the_magnolias2.jpg&cut=true\" alt=\"DLF The Magnolias\">        <div class=\"rate-info\">                    <h5>                                                ₹19.83                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>DLF The Magnolias</h3>            <span><i class=\"la la-map-marker\"></i>Sector 42, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4795324, 76.9937197],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/247/en/puri_emerald_bay\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=16643032309242.jpg&cut=true\" alt=\"Puri Emerald Bay\">        <div class=\"rate-info\">                    <h5>                                                ₹1.65                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Puri Emerald Bay</h3>            <span><i class=\"la la-map-marker\"></i>Sector 104, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4558973, 77.1084759],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/246/en/dlf_the_camellias\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=dlf_the_camellias1.jpg&cut=true\" alt=\"DLF The Camellias\">        <div class=\"rate-info\">                    <h5>                                                ₹48.92                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>DLF The Camellias</h3>            <span><i class=\"la la-map-marker\"></i>Sector 42, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5203402, 77.0188612],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/245/en/experion_windchants\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=experion_windchants3.jpg&cut=true\" alt=\"Experion Windchants\">        <div class=\"rate-info\">                    <h5>                                                ₹2.5                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Experion Windchants</h3>            <span><i class=\"la la-map-marker\"></i>Sector 112, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.3241636, 77.08486438023],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/244/en/eldeco_accolade\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=16iwl4khzwlh8y7zohd.jpg&cut=true\" alt=\"Eldeco Accolade\">        <div class=\"rate-info\">                    <h5>                                                ₹85,L-2.55                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Eldeco Accolade</h3>            <span><i class=\"la la-map-marker\"></i>Sohna, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5069625, 77.018321],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/243/en/indiabulls_enigma\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=indiabulls_enigma5.jpg&cut=true\" alt=\"Indiabulls Enigma\">        <div class=\"rate-info\">                    <h5>                                                ₹3.5                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Indiabulls Enigma</h3>            <span><i class=\"la la-map-marker\"></i>Sector 110, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.3974292, 77.0538823],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/242/en/emaar_mgf_marbella\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=marbella_2.jpg&cut=true\" alt=\"Emaar MGF Marbella\">        <div class=\"rate-info\">                    <h5>                                                ₹P,ri,ce,on,Re,qu,est                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Emaar MGF Marbella</h3>            <span><i class=\"la la-map-marker\"></i>Sector 66, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.403652, 76.9531428],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/241/en/orris_aster_court_premier\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=orris_aster_court_premier6.jpg&cut=true\" alt=\"Orris Aster Court Premier\">        <div class=\"rate-info\">                    <h5>                                                ₹1.54                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Orris Aster Court Premier</h3>            <span><i class=\"la la-map-marker\"></i>Sector 85, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/240/en/irish_pearls\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=img_20220726_164411.jpg&cut=true\" alt=\"Irish Pearls\">        <div class=\"rate-info\">                    <h5>                                                ₹75.11                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Irish Pearls</h3>            <span><i class=\"la la-map-marker\"></i>Sector 1 Greater Noida West</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4463393, 77.122314],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/239/en/signature_global_park_4\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=elevations_0000_view_12%20%281%29.jpg&cut=true\" alt=\"Signature Global Park 4\">        <div class=\"rate-info\">                    <h5>                                                ₹78.77                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Signature Global Park 4</h3>            <span><i class=\"la la-map-marker\"></i>Sector 36 Sohna, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Villas--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/238/en/vihaan_heritage_floors\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=vihaan_floors.jpg&cut=true\" alt=\"Vihaan Heritage Floors\">        <div class=\"rate-info\">                    <h5>                                                ₹P,ri,ce,on,Re,qu,est                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Vihaan Heritage Floors</h3>            <span><i class=\"la la-map-marker\"></i>Sector 1 Greater Noida West</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5109205, 77.0065956],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/237/en/international_city_by_sobha_phase_1\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=international_city_banner_1.jpg&cut=true\" alt=\"International City by Sobha Phase 1\">        <div class=\"rate-info\">                    <h5>                                                ₹3.5                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>International City by Sobha Phase 1</h3>            <span><i class=\"la la-map-marker\"></i>Sector 109, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/236/en/habitech_panchtatva\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=2020_09_04.jpg&cut=true\" alt=\"Habitech Panchtatva\">        <div class=\"rate-info\">                    <h5>                                                ₹22,-96.05                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Habitech Panchtatva</h3>            <span><i class=\"la la-map-marker\"></i>Techzone 4 Greater Noida West</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4754872, 76.9711747],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/235/en/emaar_imperial_gardens\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=hi_bottom_to_be_cropped_1620x832.jpg&cut=true\" alt=\"Emaar Imperial Gardens\">        <div class=\"rate-info\">                    <h5>                                                ₹2.17                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Emaar Imperial Gardens</h3>            <span><i class=\"la la-map-marker\"></i>Sector 102, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/234/en/radicon_vedantam\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=2018_11_26.jpg&cut=true\" alt=\"Radicon Vedantam\">        <div class=\"rate-info\">                    <h5>                                                ₹P,ri,ce,on,Re,qu,est                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Radicon Vedantam</h3>            <span><i class=\"la la-map-marker\"></i>Sector 16, Greater Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/233/en/apex_alphabet\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=20200918_142622.jpg&cut=true\" alt=\"Apex Alphabet\">        <div class=\"rate-info\">                    <h5>                                                ₹1.1                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Apex Alphabet</h3>            <span><i class=\"la la-map-marker\"></i>Sector 1 Greater Noida West</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4754872, 76.9711747],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/232/en/emaar_gurgaon_greens\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=hi_14_1620x832.jpg&cut=true\" alt=\"Emaar Gurgaon Greens\">        <div class=\"rate-info\">                    <h5>                                                ₹1.59                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Emaar Gurgaon Greens</h3>            <span><i class=\"la la-map-marker\"></i>Sector 102, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4160012, 77.1085564],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/231/en/ireo_the_grand_arch\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=ireo_the_grand_arch3.jpg&cut=true\" alt=\"Ireo The Grand Arch\">        <div class=\"rate-info\">                    <h5>                                                ₹2.78                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Ireo The Grand Arch</h3>            <span><i class=\"la la-map-marker\"></i>Sector 58, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.483901, 77.0846097],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/230/en/dlf_the_grove\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=dlf_the_grove.jpg&cut=true\" alt=\"DLF The Grove\">        <div class=\"rate-info\">                    <h5>                                                ₹4.9                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>DLF The Grove</h3>            <span><i class=\"la la-map-marker\"></i>DLF Phase 5, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.403652, 76.9531428],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/229/en/godrej_air\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=godrej_air_banner_3.jpg&cut=true\" alt=\"Godrej Air\">        <div class=\"rate-info\">                    <h5>                                                ₹1.21                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Godrej Air</h3>            <span><i class=\"la la-map-marker\"></i>Sector 85, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.3981205, 76.9411257],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/228/en/dlf_new_town_heights_2\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=9c5f74d60d1c725f52f9a11e44681e9f.jpg&cut=true\" alt=\"DLF New Town Heights 2\">        <div class=\"rate-info\">                    <h5>                                                ₹1.04                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>DLF New Town Heights 2</h3>            <span><i class=\"la la-map-marker\"></i>Sector 86, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.44161105, 77.111871782334],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/227/en/dlf_the_crest\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=slid.jpg&cut=true\" alt=\"DLF The Crest\">        <div class=\"rate-info\">                    <h5>                                                ₹8.43                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>DLF The Crest</h3>            <span><i class=\"la la-map-marker\"></i>Sector 54, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4184455, 76.9457567],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/226/en/ats_marigold\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/files/strict_cache/575x500ats_marigold_banner.webp\" alt=\"ATS Marigold\">        <div class=\"rate-info\">                    <h5>                                                ₹1.54                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ATS Marigold</h3>            <span><i class=\"la la-map-marker\"></i>Sector 89 A, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5128994, 76.9823615],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/225/en/experion_the_heartsong\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=heartsong_slider1.jpeg&cut=true\" alt=\"Experion The Heartsong\">        <div class=\"rate-info\">                    <h5>                                                ₹P,ri,ce,on,Re,qu,est                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Experion The Heartsong</h3>            <span><i class=\"la la-map-marker\"></i>Sector 108, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4156048, 76.931638],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/224/en/dlf_gardencity_enclave\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=dlf_gardencity_enclave.jpg&cut=true\" alt=\"DLF Gardencity Enclave\">        <div class=\"rate-info\">                    <h5>                                                ₹1.15                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>DLF Gardencity Enclave</h3>            <span><i class=\"la la-map-marker\"></i>Sector 93, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.3873647, 76.9475835],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/223/en/dlf_the_ultima\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=home_desktop_banner_image_21_07_2020.jpg&cut=true\" alt=\"DLF The Ultima\">        <div class=\"rate-info\">                    <h5>                                                ₹1.82                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>DLF The Ultima</h3>            <span><i class=\"la la-map-marker\"></i>Sector 81, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4950437, 77.104106114181],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/222/en/independent_floor_at_dlf_city\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=independent_floor_at_dlf_city.jpg&cut=true\" alt=\"Independent Floor at DLF City\">        <div class=\"rate-info\">                    <h5>                                                ₹4.41                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Independent Floor at DLF City</h3>            <span><i class=\"la la-map-marker\"></i>DLF City, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/221/en/aigin_royal\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=img_20220327_wa0028.jpg&cut=true\" alt=\"AIGIN Royal\">        <div class=\"rate-info\">                    <h5>                                                ₹73.5                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>AIGIN Royal</h3>            <span><i class=\"la la-map-marker\"></i>Greater Noida West</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/220/en/jaypee_greens_the_sun_court\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=images.jpg&cut=true\" alt=\"Jaypee Greens The Sun Court\">        <div class=\"rate-info\">                    <h5>                                                ₹P,ri,ce,on,Re,qu,est                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Jaypee Greens The Sun Court</h3>            <span><i class=\"la la-map-marker\"></i>Jaypee Greens, Greater Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/219/en/ska_divya_towers\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=2023_07_23.jpg&cut=true\" alt=\"SKA Divya Towers\">        <div class=\"rate-info\">                    <h5>                                                ₹94.5                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>SKA Divya Towers</h3>            <span><i class=\"la la-map-marker\"></i>Sector 16, Greater Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4095758, 77.5190728],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/218/en/gaur_yamuna_city_16th_park_view\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=16911219694074697041830623248030.jpg&cut=true\" alt=\"Gaur Yamuna City 16th Park View\">        <div class=\"rate-info\">                    <h5>                                                ₹40,-64.8                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Gaur Yamuna City 16th Park View</h3>            <span><i class=\"la la-map-marker\"></i>Yamuna Expressway, Greater Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/217/en/nimbus_express_park_view_2_low_rise\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=project_photo_6_express_park_view_ii_low_rise_greater_noida_5332493_600_800_310_462.jpg&cut=true\" alt=\"Nimbus Express Park View 2 Low Rise\">        <div class=\"rate-info\">                    <h5>                                                ₹61,L-1.42                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Nimbus Express Park View 2 Low Rise</h3>            <span><i class=\"la la-map-marker\"></i>Sector Chi 5, Greater Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/216/en/nimbus_express_park_view_2\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=2022_07_11.jpg&cut=true\" alt=\"Nimbus Express Park View 2\">        <div class=\"rate-info\">                    <h5>                                                ₹60.25                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Nimbus Express Park View 2</h3>            <span><i class=\"la la-map-marker\"></i>Sector Chi 5, Greater Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/215/en/fusion_the_brook\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=rear_gate.jpg&cut=true\" alt=\"Fusion The Brook\">        <div class=\"rate-info\">                    <h5>                                                ₹69.48                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Fusion The Brook</h3>            <span><i class=\"la la-map-marker\"></i>Greater Noida West</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/214/en/mangalya_ophira\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=2022_10_21.jpg&cut=true\" alt=\"Mangalya Ophira\">        <div class=\"rate-info\">                    <h5>                                                ₹P,ri,ce,on,Re,qu,est                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Mangalya Ophira</h3>            <span><i class=\"la la-map-marker\"></i>Sector 1 Greater Noida West</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/213/en/ats_nobility\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=about.jpg&cut=true\" alt=\"ATS Nobility\">        <div class=\"rate-info\">                    <h5>                                                ₹1.2                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ATS Nobility</h3>            <span><i class=\"la la-map-marker\"></i>Sector-4 Greater Noida West</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/212/en/anthem_french_apartments\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=french_apartment_noida_extention_resale_flat_2.jpeg&cut=true\" alt=\"Anthem French Apartments\">        <div class=\"rate-info\">                    <h5>                                                ₹P,ri,ce,on,Re,qu,est                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Anthem French Apartments</h3>            <span><i class=\"la la-map-marker\"></i>Sector 16 B, Greater Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/211/en/rg_luxury_homes\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=img_20220729_133409.jpg&cut=true\" alt=\"RG Luxury Homes\">        <div class=\"rate-info\">                    <h5>                                                ₹70,L-2.76                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>RG Luxury Homes</h3>            <span><i class=\"la la-map-marker\"></i>Sector 16 B, Greater Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.6711527, 77.4120356],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/210/en/sportshome_by_dev_sai_group\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=2022_07_10.jpg&cut=true\" alt=\"Sportshome by Dev Sai Group\">        <div class=\"rate-info\">                    <h5>                                                ₹86.13                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Sportshome by Dev Sai Group</h3>            <span><i class=\"la la-map-marker\"></i>Sector 1 Greater Noida West</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.6711527, 77.4120356],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/209/en/apex_the_kremlin\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=img_20210414_130818.jpg&cut=true\" alt=\"Apex The Kremlin\">        <div class=\"rate-info\">                    <h5>                                                ₹61.88                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Apex The Kremlin</h3>            <span><i class=\"la la-map-marker\"></i>Siddhartha Vihar, Ghaziabad</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.6711527, 77.4120356],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/208/en/sg_shikhar_height\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=banner_3%20%281%29.jpg&cut=true\" alt=\"SG Shikhar Height\">        <div class=\"rate-info\">                    <h5>                                                ₹68.51                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>SG Shikhar Height</h3>            <span><i class=\"la la-map-marker\"></i>Siddhartha Vihar, Ghaziabad</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.6711527, 77.4120356],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/207/en/ats_advantage\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=2021_10_17.jpg&cut=true\" alt=\"ATS Advantage\">        <div class=\"rate-info\">                    <h5>                                                ₹1.2                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ATS Advantage</h3>            <span><i class=\"la la-map-marker\"></i>Ahinsa Khand 1, Ghaziabad</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.6861763, 77.3994415],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/206/en/wave_city\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=wefs.jpg&cut=true\" alt=\"Wave City\">        <div class=\"rate-info\">                    <h5>                                                ₹34,L-3.9                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Wave City</h3>            <span><i class=\"la la-map-marker\"></i>NH 24 Highway, Ghaziabad</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.6861763, 77.3994415],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/205/en/ramprastha_pearl_club_residency\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=download.jpg&cut=true\" alt=\"Ramprastha Pearl Club Residency\">        <div class=\"rate-info\">                    <h5>                                                ₹P,ri,ce,on,Re,qu,est                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Ramprastha Pearl Club Residency</h3>            <span><i class=\"la la-map-marker\"></i>Ramprastha Greens, Ghaziabad</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.6861763, 77.3994415],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/204/en/landcraft_golflinks\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=2021_07_31.jpg&cut=true\" alt=\"Landcraft Golflinks\">        <div class=\"rate-info\">                    <h5>                                                ₹51.08                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Landcraft Golflinks</h3>            <span><i class=\"la la-map-marker\"></i>NH 24 Highway, Ghaziabad</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.6861763, 77.3994415],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/203/en/scc_blossom\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=2023_03_31_1.jpg&cut=true\" alt=\"SCC Blossom\">        <div class=\"rate-info\">                    <h5>                                                ₹42.23                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>SCC Blossom</h3>            <span><i class=\"la la-map-marker\"></i>Raj Nagar Extension, Ghaziabad</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.6423908, 77.3684892],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/202/en/vvip_namah\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=a87ff679a2.webp&cut=true\" alt=\"VVIP Namah\">        <div class=\"rate-info\">                    <h5>                                                ₹71.82                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>VVIP Namah</h3>            <span><i class=\"la la-map-marker\"></i>NH 24 Highway, Ghaziabad</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.6423908, 77.3684892],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/201/en/t_and_t_digitown\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=2023_10_11.jpg&cut=true\" alt=\"T and T Digitown\">        <div class=\"rate-info\">                    <h5>                                                ₹89.96                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>T and T Digitown</h3>            <span><i class=\"la la-map-marker\"></i>Siddhartha Vihar, Ghaziabad</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.6423908, 77.3684892],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/200/en/ats_floral_pathways\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=2022_09_21.jpg&cut=true\" alt=\"ATS Floral Pathways\">        <div class=\"rate-info\">                    <h5>                                                ₹1.07                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ATS Floral Pathways</h3>            <span><i class=\"la la-map-marker\"></i>NH 24 Highway, Ghaziabad</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.6423908, 77.3684892],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/199/en/magus_vedantam_minaret\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=2023_11_08.jpg&cut=true\" alt=\"Magus Vedantam Minaret\">        <div class=\"rate-info\">                    <h5>                                                ₹52,L-1.04                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Magus Vedantam Minaret</h3>            <span><i class=\"la la-map-marker\"></i>Indirapuram, Ghaziabad</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.62846855, 77.434156977811],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/198/en/apex_quebec\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=2023_08_22.jpg&cut=true\" alt=\"Apex Quebec\">        <div class=\"rate-info\">                    <h5>                                                ₹83.09                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Apex Quebec</h3>            <span><i class=\"la la-map-marker\"></i>Siddhartha Vihar, Ghaziabad</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.62846855, 77.434156977811],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/197/en/apex_d_rio\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=2023_04_26.jpg&cut=true\" alt=\"Apex D Rio\">        <div class=\"rate-info\">                    <h5>                                                ₹2.74                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Apex D Rio</h3>            <span><i class=\"la la-map-marker\"></i>Ahinsa Khand 2, Ghaziabad</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.62846855, 77.434156977811],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/196/en/asg_apple_7\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=whatsapp_image_2022_09_24_at_11647_pm.jpeg&cut=true\" alt=\"ASG APPLE 7\">        <div class=\"rate-info\">                    <h5>                                                ₹P,ri,ce,on,Re,qu,est                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ASG APPLE 7</h3>            <span><i class=\"la la-map-marker\"></i>Crossings Republik, Ghaziabad</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.6423908, 77.3684892],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/195/en/trine_towers\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=site_photos_25_trine_towers_ghaziabad_5324323_616_820_310_462.jpg&cut=true\" alt=\"Trine Towers\">        <div class=\"rate-info\">                    <h5>                                                ₹55.01                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Trine Towers</h3>            <span><i class=\"la la-map-marker\"></i>Ahinsa Khand 2, Ghaziabad</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.6423908, 77.3684892],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/194/en/mahagun_montagge\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=2020_03_08.jpg&cut=true\" alt=\"Mahagun Montagge\">        <div class=\"rate-info\">                    <h5>                                                ₹4,4-,53L                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Mahagun Montagge</h3>            <span><i class=\"la la-map-marker\"></i>Crossing Republik, Ghaziabad</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4558973, 77.1084759],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/193/en/dlf_the_aralias\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=dlf_aralias_elevation_images_03.jpg&cut=true\" alt=\"DLF The Aralias\">        <div class=\"rate-info\">                    <h5>                                                ₹22.2                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>DLF The Aralias</h3>            <span><i class=\"la la-map-marker\"></i>Sector 42, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.3864052, 77.0598046],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/192/en/ansal_api_esencia\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=333652.jpg&cut=true\" alt=\"Ansal API Esencia\">        <div class=\"rate-info\">                    <h5>                                                ₹P,ri,ce,on,Re,qu,est                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Ansal API Esencia</h3>            <span><i class=\"la la-map-marker\"></i>Sector 67, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.3846684, 77.0220391],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/191/en/bptp_astaire_gardens\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/files/strict_cache/575x500164301955620220124.webp\" alt=\"BPTP Astaire Gardens\">        <div class=\"rate-info\">                    <h5>                                                ₹2-4.54                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>BPTP Astaire Gardens</h3>            <span><i class=\"la la-map-marker\"></i>Sector 70A, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.4754872, 76.9711747],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/190/en/adani_m2k_oyster_grande\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=adani_m2k_oyster2.jpg&cut=true\" alt=\"Adani M2K Oyster Grande\">        <div class=\"rate-info\">                    <h5>                                                ₹1.82                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Adani M2K Oyster Grande</h3>            <span><i class=\"la la-map-marker\"></i>Sector 102, Gurgaon</span>        </div>    </a></div>", jpopup_customOptions);
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

