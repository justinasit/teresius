import $ from "jquery";
import "popper.js";
import "bootstrap";
import "jquery.scrollto";

$(document).ready(function() {

    /* ======= Scrollspy ======= */
   $('body').scrollspy({ target: '#navbar-collapse', offset: 100});
    
    /* ======= ScrollTo ======= */
    $('.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
        $('body').scrollTo(target, 800, {offset: -60, 'axis':'y'});
        
    });
});
