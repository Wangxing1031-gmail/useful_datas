// Find element in Google search console with class name and role attribute, event fire 'click' 
var url_input = document.querySelectorAll("div.ziL9ec.C6efae input.whsOnd.zHQkBf")[0];
url_input.value = "http://asd.natureandpeople.online";
var btn = document.querySelectorAll("div.ziL9ec.C6efae div[role=button]")[0];
btn.classList.remove("RDPZE");
function eventFire(el, etype){
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}
eventFire(btn, 'click');

// find the div that's innerHTML is "URL prefix", get the next sibling elements, event fire 'click'

function eventFire(el, etype){
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, true);
        el.dispatchEvent(evObj);
    }
}

var url_prefix_list = document.querySelectorAll("div");
for( var i = 0; i < url_prefix_list.length; i++){
    var cur_div = url_prefix_list[i];
    if( cur_div.innerHTML == "URL prefix"){
        if( cur_div.offsetWidth != 0 && cur_div.offsetHeight != 0){
            var input_container = cur_div.nextElementSibling.nextElementSibling;
            var input_box = input_container.getElementsByTagName("input")[0];
            input_box.value = "http://asd.natureandpeople.online";
            var button_container = input_container.nextElementSibling;
            button_container.classList.remove("RDPZE");
            setTimeout(function(){
                eventFire(input_container, 'click');
                eventFire(button_container, 'click');
            }, 1000);
            
            break;
        }
    }
}

// click Search property
function eventFire(el, etype){
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, true);
        el.dispatchEvent(evObj);
    }
}
var main_menu_list = document.querySelectorAll("div[role='button'][aria-label='Main menu']");
var main_menu = main_menu_list[0];
if( main_menu.getAttribute('aria-expanded') == 'false'){
    eventFire( main_menu, 'click');
    setTimeout(function(){
        var btn_search_list = document.querySelectorAll("div[role='button'][aria-label='Search property']");
        var btn = btn_search_list[0];
        eventFire(btn, 'click');
    }, 1000);
} else {
    var btn_search_list = document.querySelectorAll("div[role='button'][aria-label='Search property']");
    var btn = btn_search_list[0];
    eventFire(btn, 'click');
}
