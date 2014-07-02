//var mycolorscheme = ['rgb(215,48,39)','rgb(244,109,67)','rgb(253,174,97)','rgb(254,224,144)','rgb(255,255,191)','rgb(224,243,248)','rgb(171,217,233)','rgb(116,173,209)','rgb(69,117,180)'].reverse();
var mycolorscheme = ['rgb(255,255,204)','rgb(255,237,160)','rgb(254,217,118)','rgb(254,178,76)','rgb(253,141,60)','rgb(252,78,42)','rgb(227,26,28)','rgb(189,0,38)','rgb(128,0,38)'];
var options = {url_geoson: "data/countries2.geo.json",min_zoom: 1,max_zoom: 9, color_scale: mycolorscheme};
var map = $("#eidmap").mapcolorizer(options).data("mapcolorizer");
map.init(function() {
	map.loadData("data/data2.json", function(bounds){});
        map.setTileServer("mapquest");
});

animate_pieces();

   // animate areas in if first time + load tiles
    var firsttime = true;
    function animate_pieces() {
        if (!firsttime)
            return;

        firsttime = false;
        $("#eidmap g").each(function(i){
            var t = $(this);
            t.css("webkitTransitionDelay", Math.random()+"s");
            t.css("TransitionDelay", Math.random()+"s");
        });
        $("#eidmap").addClass("animend");

        setTimeout(function() {
            // remove anim styles just in case
            $("#eidmap").removeClass("animstart animend");

            // finally load tiles
            //select_tile_server();
        }, 2000);
    }

