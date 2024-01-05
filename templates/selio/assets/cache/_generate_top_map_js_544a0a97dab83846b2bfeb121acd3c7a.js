


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
                        center: [28.5270198, 77.416845205635],
                        zoom: 8-2,
            scrollWheelZoom: scrollwheelEnabled,
            dragging: !L.Browser.mobile,

            
            tap: !L.Browser.mobile
        });     
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var positron = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png').addTo(map);

                                           
                        
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

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/13/en/godrej_woods_plaza\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=godrej_woods_plaza_1.jpg&cut=true\" alt=\"Godrej Woods Plaza\">        <div class=\"rate-info\">                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Godrej Woods Plaza</h3>            <span><i class=\"la la-map-marker\"></i>Sector 43, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Villas--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/15/en/ats_pristine_villas\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=ats_pristine_villas_1.jpg&cut=true\" alt=\"ATS Pristine Villas\">        <div class=\"rate-info\">                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ATS Pristine Villas</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/16/en/ats_destinaire\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=ats_destinaire_3.png&cut=true\" alt=\"ATS Destinaire\">        <div class=\"rate-info\">                    <h5>                                                ₹1.89                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ATS Destinaire</h3>            <span><i class=\"la la-map-marker\"></i>Sector 1, Greater Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/17/en/ats_picturesque\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=ats_picturesque_1.png&cut=true\" alt=\"ATS Picturesque\">        <div class=\"rate-info\">                    <h5>                                                ₹2.04                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ATS Picturesque</h3>            <span><i class=\"la la-map-marker\"></i>Sector 152, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/18/en/ats_kingston_heath\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=ats_kingston_heath_5.jpg&cut=true\" alt=\"ATS Kingston Heath\">        <div class=\"rate-info\">                    <h5>                                                ₹1.95                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ATS Kingston Heath</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Villas--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/19/en/godrej_golf_links\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=godrej_golf_links_1.jpg&cut=true\" alt=\"Godrej Golf Links\">        <div class=\"rate-info\">                    <h5>                                                ₹1.8                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Godrej Golf Links</h3>            <span><i class=\"la la-map-marker\"></i>Sector 27, Greater Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/30/en/godrej_palm_retreat\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=palm_retreat_gallery_w1200xh600_px_08.jpg&cut=true\" alt=\"Godrej Palm Retreat\">        <div class=\"rate-info\">                    <h5>                                                ₹1.14                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Godrej Palm Retreat</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/31/en/bhutani_city_center\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=bhutani_city_center_1.png&cut=true\" alt=\"Bhutani City Center\">        <div class=\"rate-info\">                    <h5>                                                ₹24L                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Bhutani City Center</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/32/en/lt_noida\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=lt_noida_1.jpg&cut=true\" alt=\"L&T Noida\">        <div class=\"rate-info\">                    <h5>                                                ₹5Cr                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>L&T Noida</h3>            <span><i class=\"la la-map-marker\"></i>Sector 128, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/33/en/kalpataru_vista\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=kalpataru_vista_1.jpg&cut=true\" alt=\"Kalpataru Vista\">        <div class=\"rate-info\">                    <h5>                                                ₹3.98                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Kalpataru Vista</h3>            <span><i class=\"la la-map-marker\"></i>Sector 128, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/34/en/ats_dolce\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=ats_dolce_6.jpg&cut=true\" alt=\"ATS Dolce\">        <div class=\"rate-info\">                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ATS Dolce</h3>            <span><i class=\"la la-map-marker\"></i>Greater Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5510172, 77.323759049076],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/35/en/m3m_the_cullinan\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=gallery10.jpg&cut=true\" alt=\"M3M The Cullinan\">        <div class=\"rate-info\">                    <h5>                                                ₹5.99                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>M3M The Cullinan</h3>            <span><i class=\"la la-map-marker\"></i>Sector 94 Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.59419145, 77.29462345],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/36/en/crc_joyous\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=crc_joyous7.jpg&cut=true\" alt=\"CRC Joyous\">        <div class=\"rate-info\">                    <h5>                                                ₹88.44                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>CRC Joyous</h3>            <span><i class=\"la la-map-marker\"></i>Noida Extension</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.52660665, 77.376793626645],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/37/en/parx_laureate\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=parx_laureate4.jpg&cut=true\" alt=\"Parx Laureate\">        <div class=\"rate-info\">                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Parx Laureate</h3>            <span><i class=\"la la-map-marker\"></i>Sector 108, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/38/en/ats_pious_orchards\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=ats_pious_orchards.png&cut=true\" alt=\"ATS Pious Orchards\">        <div class=\"rate-info\">                    <h5>                                                ₹2.33                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ATS Pious Orchards</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.545932, 77.376560965491],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/39/en/mahagun_medalleo\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=mahagun_medalleo3.jpg&cut=true\" alt=\"Mahagun Medalleo\">        <div class=\"rate-info\">                    <h5>                                                ₹3.12                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Mahagun Medalleo</h3>            <span><i class=\"la la-map-marker\"></i>Sector 107, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/40/en/ivory_county\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=county_107_e_brochure_20_01_20_2_1024x683.jpg&cut=true\" alt=\"Ivory County\">        <div class=\"rate-info\">                    <h5>                                                ₹2.55                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Ivory County</h3>            <span><i class=\"la la-map-marker\"></i>Sector 115 Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.50266325, 77.426255664966],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/41/en/ska_orion\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=ska_orion.jpg&cut=true\" alt=\"SKA Orion\">        <div class=\"rate-info\">                    <h5>                                                ₹1.84                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>SKA Orion</h3>            <span><i class=\"la la-map-marker\"></i>Sector 143, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.545932, 77.376560965491],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/42/en/county_107\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=county_107_1.jpg&cut=true\" alt=\"County 107\">        <div class=\"rate-info\">                    <h5>                                                ₹3.13                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>County 107</h3>            <span><i class=\"la la-map-marker\"></i>Sector 107, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/43/en/gulshan_dynasty\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=slider3.jpg&cut=true\" alt=\"Gulshan Dynasty\">        <div class=\"rate-info\">                    <h5>                                                ₹7.5                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Gulshan Dynasty</h3>            <span><i class=\"la la-map-marker\"></i>Sector 144, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/44/en/godrej_nest\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=godrej_nest.jpg&cut=true\" alt=\"Godrej Nest\">        <div class=\"rate-info\">                    <h5>                                                ₹1.78                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Godrej Nest</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/45/en/ace_parkway\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=ace_parkway1.jpg&cut=true\" alt=\"ACE Parkway\">        <div class=\"rate-info\">                    <h5>                                                ₹1.25                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ACE Parkway</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/46/en/eldeco_live\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=eldeco_live1.jpg&cut=true\" alt=\"Eldeco Live\">        <div class=\"rate-info\">                    <h5>                                                ₹1.09                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Eldeco Live</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.59419145, 77.29462345],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/47/en/sam_palm_olympia\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=sam_palm_olympia3.jpg&cut=true\" alt=\"Sam Palm Olympia\">        <div class=\"rate-info\">                    <h5>                                                ₹52.98                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Sam Palm Olympia</h3>            <span><i class=\"la la-map-marker\"></i>Noida Extension</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/48/en/ace_starlit\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=ace_starlit7.jpeg&cut=true\" alt=\"Ace Starlit\">        <div class=\"rate-info\">                    <h5>                                                ₹95.46                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Ace Starlit</h3>            <span><i class=\"la la-map-marker\"></i>Sector 152, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/49/en/ats_pious_hideaways\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=ats_pious_hideaways4.jpg&cut=true\" alt=\"ATS Pious Hideaways\">        <div class=\"rate-info\">                    <h5>                                                ₹1.2                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ATS Pious Hideaways</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/50/en/samridhi_luxuriya_avenue\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=luxuriya_avenue_images_for_elevation_of_samridhi_luxuriya_avenue_20017535.jpeg&cut=true\" alt=\"Samridhi Luxuriya Avenue\">        <div class=\"rate-info\">                    <h5>                                                ₹1.13                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Samridhi Luxuriya Avenue</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/51/en/eureka_park_by_tata\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=eureka_park_by_tata22.jpg&cut=true\" alt=\"Eureka Park By Tata\">        <div class=\"rate-info\">                    <h5>                                                ₹88.06                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Eureka Park By Tata</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/52/en/max_estates_128\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=max_estate_128_b3.jpg&cut=true\" alt=\"Max Estates 128\">        <div class=\"rate-info\">                    <h5>                                                ₹5.86                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Max Estates 128</h3>            <span><i class=\"la la-map-marker\"></i>Sector 128 Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/53/en/max_antara_noida\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=antara_senior_living_noida_banner.jpeg&cut=true\" alt=\"Max Antara Noida\">        <div class=\"rate-info\">                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Max Antara Noida</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5483036, 77.327805669377],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/54/en/ats_knightsbridge\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=banner_2_new.jpg&cut=true\" alt=\"ATS Knightsbridge\">        <div class=\"rate-info\">                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ATS Knightsbridge</h3>            <span><i class=\"la la-map-marker\"></i>Sector 124, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/55/en/godrej_nurture\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=nurture_gallery_1200x600_3.jpg&cut=true\" alt=\"Godrej Nurture\">        <div class=\"rate-info\">                    <h5>                                                ₹90.23                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Godrej Nurture</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/56/en/godrej_palm_retreat\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=palm_retreat_gallery_w1200xh600_px_08%20%282%29.jpg&cut=true\" alt=\"Godrej Palm Retreat\">        <div class=\"rate-info\">                    <h5>                                                ₹1.34                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Godrej Palm Retreat</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/57/en/dasnac_burj_noida\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=cf5d4a593fdf612.jpg&cut=true\" alt=\"Dasnac Burj Noida\">        <div class=\"rate-info\">                    <h5>                                                ₹3.01                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Dasnac Burj Noida</h3>            <span><i class=\"la la-map-marker\"></i>Sector 75, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.55216265, 77.360605661775],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/58/en/gardenia_glory\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=96a3be3cf2.jpg&cut=true\" alt=\"Gardenia Glory\">        <div class=\"rate-info\">                    <h5>                                                ₹3.01                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Gardenia Glory</h3>            <span><i class=\"la la-map-marker\"></i>Sector 46, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/59/en/mahagun_manorialle\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=gallery_img_1_zoom.jpg&cut=true\" alt=\"Mahagun Manorialle\">        <div class=\"rate-info\">                    <h5>                                                ₹4.04                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Mahagun Manorialle</h3>            <span><i class=\"la la-map-marker\"></i>Sector 128, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.58623125, 77.396593480953],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/60/en/rg_mirage\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/files/strict_cache/575x5001011839.jpeg\" alt=\"RG Mirage\">        <div class=\"rate-info\">                    <h5>                                                ₹1.91                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>RG Mirage</h3>            <span><i class=\"la la-map-marker\"></i>Sector 120, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/61/en/solitairian_city\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=solitairian_city_gal1.jpg&cut=true\" alt=\"Solitairian City\">        <div class=\"rate-info\">                    <h5>                                                ₹55,L-,2Cr                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Solitairian City</h3>            <span><i class=\"la la-map-marker\"></i>Yamuna Expressway, Greater Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/62/en/arihant_one\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=sdsadj1.jpg&cut=true\" alt=\"Arihant One\">        <div class=\"rate-info\">                    <h5>                                                ₹1.56                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Arihant One</h3>            <span><i class=\"la la-map-marker\"></i>Sector 1, Greater Noida West</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/63/en/panchsheel_greens\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=panchsheel_greens_2_noida_extension_noida_panchsheel_group.jpg&cut=true\" alt=\"Panchsheel Greens\">        <div class=\"rate-info\">                    <h5>                                                ₹57.65                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Panchsheel Greens</h3>            <span><i class=\"la la-map-marker\"></i>Greater Noida West</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/64/en/ace_divino\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=ace_divino_in_noida_extension.jpeg&cut=true\" alt=\"ACE Divino\">        <div class=\"rate-info\">                    <h5>                                                ₹89,L-2.68                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ACE Divino</h3>            <span><i class=\"la la-map-marker\"></i>Greater Noida West</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/65/en/sam_palm_olympia_2\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=palm_olympia_phase_2_details_page_08.jpg&cut=true\" alt=\"Sam Palm Olympia 2\">        <div class=\"rate-info\">                    <h5>                                                ₹88.62                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Sam Palm Olympia 2</h3>            <span><i class=\"la la-map-marker\"></i>Greater Noida West</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/66/en/the_islands_by_gaurs\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=gallery1%20%282%29.jpg&cut=true\" alt=\"The Islands by Gaurs\">        <div class=\"rate-info\">                    <h5>                                                ₹3.31                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>The Islands by Gaurs</h3>            <span><i class=\"la la-map-marker\"></i>Jaypee Greens, Greater Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/67/en/saya_status\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=e1c8048885%20%283%29.jpg&cut=true\" alt=\"Saya Status\">        <div class=\"rate-info\">                    <h5>                                                ₹35L                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Saya Status</h3>            <span><i class=\"la la-map-marker\"></i>Sector 129 Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/68/en/saya_piazza\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=449088438m_1696431379972.jpg&cut=true\" alt=\"Saya Piazza\">        <div class=\"rate-info\">                    <h5>                                                ₹48L                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Saya Piazza</h3>            <span><i class=\"la la-map-marker\"></i>Sector 131, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/69/en/gygy_mentis\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=e1c8048885%20%282%29.jpg&cut=true\" alt=\"GYGY Mentis\">        <div class=\"rate-info\">                    <h5>                                                ₹32.89                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>GYGY Mentis</h3>            <span><i class=\"la la-map-marker\"></i>Sector 140 Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-usd"></i></div><div class="back face"> <i class="fa fa-usd"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5510172, 77.323759049076],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/70/en/m3m_the_cullinan\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=gallery_1%20%281%29.jpg&cut=true\" alt=\"M3M The Cullinan\">        <div class=\"rate-info\">                    <h5>                                                ₹5.99                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>M3M The Cullinan</h3>            <span><i class=\"la la-map-marker\"></i>Sector 94 Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/71/en/crc_the_flagship\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=9ab62b5ef3.jpg&cut=true\" alt=\"CRC The Flagship\">        <div class=\"rate-info\">                    <h5>                                                ₹90L                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>CRC The Flagship</h3>            <span><i class=\"la la-map-marker\"></i>Sector 140A Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/72/en/ace_medley_avenue\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=gallery_1.jpg&cut=true\" alt=\"Ace Medley Avenue\">        <div class=\"rate-info\">                    <h5>                                                ₹66L                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Ace Medley Avenue</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-usd"></i></div><div class="back face"> <i class="fa fa-usd"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5361112, 77.359697172721],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/73/en/sikka_mall_of_noida\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=overview_img.jpg&cut=true\" alt=\"Sikka Mall of Noida\">        <div class=\"rate-info\">                    <h5>                                                ₹30L                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Sikka Mall of Noida</h3>            <span><i class=\"la la-map-marker\"></i>Sector 98, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/74/en/paras_one33\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=no_image.jpg&cut=true\" alt=\"Paras ONE33\">        <div class=\"rate-info\">                    <h5>                                                ₹55L                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Paras ONE33</h3>            <span><i class=\"la la-map-marker\"></i>Sector 133, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-usd"></i></div><div class="back face"> <i class="fa fa-usd"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5705399, 77.3228931],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/75/en/wave_one\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/files/strict_cache/575x500banner_2.jpg\" alt=\"Wave One\">        <div class=\"rate-info\">                    <h5>                                                ₹51.3                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Wave One</h3>            <span><i class=\"la la-map-marker\"></i>Sector 18, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-usd"></i></div><div class="back face"> <i class="fa fa-usd"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.51170585, 77.376784464483],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/76/en/urbtech_trade_centre\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=utc_9.jpg&cut=true\" alt=\"Urbtech Trade Centre\">        <div class=\"rate-info\">                    <h5>                                                ₹22.75                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Urbtech Trade Centre</h3>            <span><i class=\"la la-map-marker\"></i>Sector 132, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-usd"></i></div><div class="back face"> <i class="fa fa-usd"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.6211447, 77.3643493],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/77/en/grandslam_ithum\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=grandslam_ithum_project_tower_view1.jpg&cut=true\" alt=\"Grandslam IThum\">        <div class=\"rate-info\">                    <h5>                                                ₹50L                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Grandslam IThum</h3>            <span><i class=\"la la-map-marker\"></i>Sector 62, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/78/en/fairfox_eon\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=eon_office_space_2.jpg&cut=true\" alt=\"Fairfox EON\">        <div class=\"rate-info\">                    <h5>                                                ₹51.15                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Fairfox EON</h3>            <span><i class=\"la la-map-marker\"></i>Sector 140A, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/79/en/ace_153\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=gal1.jpg&cut=true\" alt=\"Ace 153\">        <div class=\"rate-info\">                    <h5>                                                ₹58L                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Ace 153</h3>            <span><i class=\"la la-map-marker\"></i>Sector 153 Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-usd"></i></div><div class="back face"> <i class="fa fa-usd"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.6211447, 77.3643493],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/80/en/bhutani_avenue_62\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=9302912_122954_bhutani62_1.jpg&cut=true\" alt=\"Bhutani Avenue 62\">        <div class=\"rate-info\">                    <h5>                                                ₹30L                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Bhutani Avenue 62</h3>            <span><i class=\"la la-map-marker\"></i>Sector 62, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Commercial--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/81/en/paras_avenue\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=gallery_thumb01.jpg&cut=true\" alt=\"Paras Avenue\">        <div class=\"rate-info\">                    <h5>                                                ₹32L                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Paras Avenue</h3>            <span><i class=\"la la-map-marker\"></i>Sector 129, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/82/en/ats_allure\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=04_bird_eye_view_min_1_600x450.jpg&cut=true\" alt=\"ATS Allure\">        <div class=\"rate-info\">                    <h5>                                                ₹63.88                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ATS Allure</h3>            <span><i class=\"la la-map-marker\"></i>Yamuna Expressway, Greater Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/83/en/ats_pristine_2\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=slide_2.jpg&cut=true\" alt=\"ATS Pristine 2\">        <div class=\"rate-info\">                    <h5>                                                ₹1.75                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ATS Pristine 2</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/84/en/ats_dolce\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=dolce2.jpeg&cut=true\" alt=\"ATS Dolce\">        <div class=\"rate-info\">                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ATS Dolce</h3>            <span><i class=\"la la-map-marker\"></i>Sector ZETA 1, Greater Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/85/en/prateek_canary\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=canary1.jpg&cut=true\" alt=\"Prateek Canary\">        <div class=\"rate-info\">                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Prateek Canary</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.6444638, 77.4097432],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/86/en/prateek_grand_carnesia\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=pgc_cu_9june22_big4.jpg&cut=true\" alt=\"Prateek Grand Carnesia\">        <div class=\"rate-info\">                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Prateek Grand Carnesia</h3>            <span><i class=\"la la-map-marker\"></i>Pratap Vihar, Ghaziabad</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.6444638, 77.4097432],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/87/en/prateek_grand_paeonia\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=pgc_cu_may22_bg15.jpg&cut=true\" alt=\"Prateek Grand Paeonia\">        <div class=\"rate-info\">                    <h5>                                                ₹P,ri,ce,on,Re,qu,est                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Prateek Grand Paeonia</h3>            <span><i class=\"la la-map-marker\"></i>Siddhartha Vihar, Ghaziabad</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.6444638, 77.4097432],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/88/en/prateek_grand_city\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=gallery1.jpg&cut=true\" alt=\"Prateek Grand City\">        <div class=\"rate-info\">                    <h5>                                                ₹46.7                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Prateek Grand City</h3>            <span><i class=\"la la-map-marker\"></i>Siddhartha Vihar, Ghaziabad</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.545932, 77.376560965491],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/89/en/sunworld_vanalika\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=vanalika_slide3.jpg&cut=true\" alt=\"Sunworld Vanalika\">        <div class=\"rate-info\">                    <h5>                                                ₹P,ri,ce,on,Re,qu,est                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Sunworld Vanalika</h3>            <span><i class=\"la la-map-marker\"></i>Sector 107, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/90/en/jaypee_greens_klassic_arcade\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=2021_07_19.jpg&cut=true\" alt=\"Jaypee Greens Klassic Arcade\">        <div class=\"rate-info\">                    <h5>                                                ₹P,ri,ce,on,Re,qu,est                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Jaypee Greens Klassic Arcade</h3>            <span><i class=\"la la-map-marker\"></i>Sector 134, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5229507, 77.386116526359],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/91/en/eldeco_utopia\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=1592808686816844935.jpg&cut=true\" alt=\"Eldeco Utopia\">        <div class=\"rate-info\">                    <h5>                                                ₹1.66                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Eldeco Utopia</h3>            <span><i class=\"la la-map-marker\"></i>Sector 93 A, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/92/en/escon_villas\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=b772d43b49.jpeg&cut=true\" alt=\"Escon Villas\">        <div class=\"rate-info\">                    <h5>                                                ₹1.51                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Escon Villas</h3>            <span><i class=\"la la-map-marker\"></i>Sector 150, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/93/en/express_zenith\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=express_zenith.jpg&cut=true\" alt=\"Express Zenith\">        <div class=\"rate-info\">                    <h5>                                                ₹71.28                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Express Zenith</h3>            <span><i class=\"la la-map-marker\"></i>Sector 77, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/94/en/supertech_orb\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=supertechorb3.jpg&cut=true\" alt=\"Supertech ORB\">        <div class=\"rate-info\">                    <h5>                                                ₹1.38                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Supertech ORB</h3>            <span><i class=\"la la-map-marker\"></i>Sector 74, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/95/en/ats_one_hamlet\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=ats_one_hamlet1.jpg&cut=true\" alt=\"ATS One Hamlet\">        <div class=\"rate-info\">                    <h5>                                                ₹2.29                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>ATS One Hamlet</h3>            <span><i class=\"la la-map-marker\"></i>Sector 104, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/96/en/equity_hardik_tower\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=szf9wlh_1692686666_441016420_optorig.jpg&cut=true\" alt=\"Equity Hardik Tower\">        <div class=\"rate-info\">                    <h5>                                                ₹17.9                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Equity Hardik Tower</h3>            <span><i class=\"la la-map-marker\"></i>Sector 101, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/97/en/3c_lotus_zing\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=wdsfvb.jpg&cut=true\" alt=\"3C Lotus Zing\">        <div class=\"rate-info\">                    <h5>                                                ₹P,ri,ce,on,Re,qu,est                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>3C Lotus Zing</h3>            <span><i class=\"la la-map-marker\"></i>Sector 168, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5091263, 77.409490575492],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/98/en/exotica_fresco\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=fresco1.jpg&cut=true\" alt=\"Exotica Fresco\">        <div class=\"rate-info\">                    <h5>                                                ₹94.35                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Exotica Fresco</h3>            <span><i class=\"la la-map-marker\"></i>Sector 137, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5091263, 77.409490575492],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/99/en/paramount_floraville\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=paramount_floraville2.jpg&cut=true\" alt=\"Paramount Floraville\">        <div class=\"rate-info\">                    <h5>                                                ₹73.15                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Paramount Floraville</h3>            <span><i class=\"la la-map-marker\"></i>Sector 137, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/100/en/the_hyde_park\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=the_hyde_park2.jpg&cut=true\" alt=\"The Hyde Park\">        <div class=\"rate-info\">                    <h5>                                                ₹81.7                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>The Hyde Park</h3>            <span><i class=\"la la-map-marker\"></i>Sector 78, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/101/en/gulshan_botnia\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=gulshan_botnia2.jpg&cut=true\" alt=\"Gulshan Botnia\">        <div class=\"rate-info\">                    <h5>                                                ₹86,L-1.24                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Gulshan Botnia</h3>            <span><i class=\"la la-map-marker\"></i>Sector 144, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/102/en/paras_seasons\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=paras_seasons_ov.jpg&cut=true\" alt=\"Paras Seasons\">        <div class=\"rate-info\">                    <h5>                                                ₹5,0-,90L                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Paras Seasons</h3>            <span><i class=\"la la-map-marker\"></i>Sector 168, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/103/en/gaurs_platinum_towers\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=overview.jpg&cut=true\" alt=\"Gaurs Platinum Towers\">        <div class=\"rate-info\">                    <h5>                                                ₹P,ri,ce,on,Re,qu,est                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Gaurs Platinum Towers</h3>            <span><i class=\"la la-map-marker\"></i>Sector 79, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.55060205, 77.350512786556],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/104/en/amrapali_sapphire\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/files/strict_cache/575x500amrapali_sapphire_noida_e2fc765e_c7e8_11e9_b728_1326979780a6.webp\" alt=\"Amrapali Sapphire\">        <div class=\"rate-info\">                    <h5>                                                ₹P,ri,ce,on,Re,qu,est                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Amrapali Sapphire</h3>            <span><i class=\"la la-map-marker\"></i>Sector 45, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.59419145, 77.29462345],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/105/en/gaur_city_2_14th_avenue\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=gal_th1.jpg&cut=true\" alt=\"Gaur City 2 14th Avenue\">        <div class=\"rate-info\">                    <h5>                                                ₹5,0-,80L                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Gaur City 2 14th Avenue</h3>            <span><i class=\"la la-map-marker\"></i>Noida Extension</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/106/en/elite_homz\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=homz_page_copy.webp&cut=true\" alt=\"Elite Homz\">        <div class=\"rate-info\">                    <h5>                                                ₹93.24                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Elite Homz</h3>            <span><i class=\"la la-map-marker\"></i>Sector 77, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.59419145, 77.29462345],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/107/en/stellar_one\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=stellar_one2.jpg&cut=true\" alt=\"Stellar One\">        <div class=\"rate-info\">                    <h5>                                                ₹67.13                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Stellar One</h3>            <span><i class=\"la la-map-marker\"></i>Noida Extension</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/108/en/jaypee_greens_kensington_boulevard\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=jaypee_greens_kensington4.jpg&cut=true\" alt=\"Jaypee Greens Kensington Boulevard\">        <div class=\"rate-info\">                    <h5>                                                ₹59,L-1.15                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Jaypee Greens Kensington Boulevard</h3>            <span><i class=\"la la-map-marker\"></i>Sector 131, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/109/en/jaypee_aman\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=59bba4de8e8ae.jpg&cut=true\" alt=\"Jaypee Aman\">        <div class=\"rate-info\">                    <h5>                                                ₹52,L-1.2                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Jaypee Aman</h3>            <span><i class=\"la la-map-marker\"></i>Sector 151, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/110/en/amrapali_silicon_city\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=amrapali_silicon_city2.jpg&cut=true\" alt=\"Amrapali Silicon City\">        <div class=\"rate-info\">                    <h5>                                                ₹73.42                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Amrapali Silicon City</h3>            <span><i class=\"la la-map-marker\"></i>Sector 76, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/111/en/aims_golf_avenue\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=yyom9e2c.jpg&cut=true\" alt=\"Aims Golf Avenue\">        <div class=\"rate-info\">                    <h5>                                                ₹38.81                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Aims Golf Avenue</h3>            <span><i class=\"la la-map-marker\"></i>Sector 75, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/112/en/golf_city\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=ak_1664_1344958596_1481014124_700x700.jpeg&cut=true\" alt=\"Golf City\">        <div class=\"rate-info\">                    <h5>                                                ₹37.05                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Golf City</h3>            <span><i class=\"la la-map-marker\"></i>Sector 75, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.545932, 77.376560965491],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/113/en/gfc_divine_homes\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=kayvo38v.jpg&cut=true\" alt=\"GFC Divine Homes\">        <div class=\"rate-info\">                    <h5>                                                ₹77.63                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>GFC Divine Homes</h3>            <span><i class=\"la la-map-marker\"></i>Sector 107, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="fa fa-building"></i></div><div class="back face"> <i class="fa fa-building"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.5091263, 77.409490575492],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/114/en/gulshan_vivante\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=gulshan_vivante.jpg&cut=true\" alt=\"Gulshan Vivante\">        <div class=\"rate-info\">                    <h5>                                                ₹1.08                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Gulshan Vivante</h3>            <span><i class=\"la la-map-marker\"></i>Sector 137, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="la la-home"></i></div><div class="back face"> <i class="la la-home"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.59419145, 77.29462345],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Villas--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/115/en/vrindavan_garden\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=2022_05_28.jpg&cut=true\" alt=\"Vrindavan Garden\">        <div class=\"rate-info\">                    <h5>                                                ₹30,-66.67                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Vrindavan Garden</h3>            <span><i class=\"la la-map-marker\"></i>Noida Extension</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/116/en/jaypee_greens_kosmos\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=embeddedimage.jpg&cut=true\" alt=\"Jaypee Greens Kosmos\">        <div class=\"rate-info\">                    <h5>                                                ₹55,L-1.45                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Jaypee Greens Kosmos</h3>            <span><i class=\"la la-map-marker\"></i>Sector 134, Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/117/en/catalyst_express_apartments\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=451443676t_1697518969456.jpg&cut=true\" alt=\"Catalyst Express Apartments\">        <div class=\"rate-info\">                    <h5>                                                ₹41.5                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Catalyst Express Apartments</h3>            <span><i class=\"la la-map-marker\"></i>Sector 127 Noida</span>        </div>    </a></div>", jpopup_customOptions);
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

            marker.bindPopup("<!--Widget-preview-category-path: Apartment--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/118/en/jaypee_greens_kalypso_court\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=kalypso_court_bg_3938_2641.jpg&cut=true\" alt=\"Jaypee Greens Kalypso Court\">        <div class=\"rate-info\">                    <h5>                                                ₹1.6                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Jaypee Greens Kalypso Court</h3>            <span><i class=\"la la-map-marker\"></i>Sector 128, Noida</span>        </div>    </a></div>", jpopup_customOptions);
            clusters.addLayer(marker);
            markers.push(marker);
                                           
                        
            var innerMarker = '<div class="marker-container"><div class="marker-card"><div class="front face"><i class="la la-home"></i></div><div class="back face"> <i class="la la-home"></i></div><div class="marker-arrow"></div></div></div>'    

            var marker = L.marker(
                [28.59419145, 77.29462345],
                {icon: L.divIcon({
                        html: innerMarker,
                        className: 'open_steet_map_marker google_marker',
                        iconSize: [40, 46],
                        popupAnchor: [1, -35],
                        iconAnchor: [20, 46],
                    })
                }
            )/*.addTo(map)*/;

            marker.bindPopup("<!--Widget-preview-category-path: Villas--><div class=\"infobox map-box\">    <a href=\"https://digipanda.biz/realEstate/index.php/property/119/en/omson_nature_valley\" class=\"listing-img-container\">        <div class=\"infoBox-close\"><i class=\"fa fa-times\"></i>        </div><img src=\"https://digipanda.biz/realEstate/strict_image_speed.php?d=575x500&f=img_20220831_wa0013.jpg&cut=true\" alt=\"Omson Nature Valley\">        <div class=\"rate-info\">                    <h5>                                                ₹41,L-1.08                                        </h5>                    <span class=\"purpose-Sale\">                Sale            </span>         </div>        <div class=\"listing-item-content\">            <h3>Omson Nature Valley</h3>            <span><i class=\"la la-map-marker\"></i>Noida Extension</span>        </div>    </a></div>", jpopup_customOptions);
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

