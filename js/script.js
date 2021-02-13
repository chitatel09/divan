
  AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 110, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


  $(document).scroll(function() {

      if ($(document).scrollTop() < 800){

       

          $('.button').css('visibility','hidden');
      }


else{$('.button').css('visibility',' visible');}
  })



	
$(function(){
	
$('.burger').click(function() {

	$('.burger').toggleClass('burger_hidden');
	$('.nav_vert').slideToggle();

							})


$('.globe-container-nav').hover(function() {
var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

var y=posTop+65+'px';
$('.homePage').css('top',y);
$('.homePage').addClass('show-me');},
function() {
    $('.homePage').removeClass('show-me');

})





$('.nav_americo').click(function() {

var a=$('.nav_menu_americo').css('visibility');
	
	if( a=="hidden"){
		$('.nav_menu_americo').css({'visibility': 'visible'});

a=$('.nav_menu_americo').css('visibility');
	if($('.nav_menu_evras').css('visibility')=='visible'){
		$('.nav_menu_evras').css('visibility', 'hidden');
		// $('.nav_menu_americo').slideToggle();
	}
	}
	else{
	$('.nav_menu_americo').css('visibility', 'hidden');}
	

							})

$('.nav_evraz').click(function() {

var a=$('.nav_menu_evras').css('visibility');
	
	if( a=="hidden"){
		$('.nav_menu_evras').css({'visibility': 'visible'});
a=$('.nav_menu_evras').css('visibility');
	if($('.nav_menu_americo').css('visibility')=='visible'){
		$('.nav_menu_americo').css('visibility', 'hidden');
	}
	}
	else{
	$('.nav_menu_evras').css('visibility', 'hidden');}
	

							})

})


$(document).ready(function() {
	
	
     

  $("a.scrollto").click(function() {
  	var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    },posTop);
    return false;
  });
});






// СМЕНА ТИТЛА



!function(i){function e(i){return i.timeInterval=setInterval(function(){i.callbackFunction(i)},i.blinkInterval),i.timeInterval}function t(t,n,l,o){if(t.mftTitleBlink[o]){var r,a,c,s={},d=(new Date).getTime();switch(t.mftTitleAltText[o]){case"none":s=n.mftTitleAltText[o];break;case"":s=n.mftTitleAltText[o];break;default:s=t.mftTitleAltText[o]}c=function(e){i(document).prop("title")==e.oldTitle?i(document).prop("title",e.newTitle):i(document).prop("title",e.oldTitle)},l[o]={oldTitle:i(document).prop("title"),newTitle:s,blinkInterval:t.mftTitleBlinkInterval[o],timeInterval:0,now:a,then:d,delta:r,callbackFunction:c},l[o].timeInterval=e(l[o])}}function n(i,e,t){i.mftTitleBlink[t]&&void 0!==e[t]&&e[t].timeInterval>0&&clearInterval(e[t].timeInterval)}function l(t,n,l,o){if(t.mftFaviconBlink[o]){var r,a,c,s={},d={"apple-touch-icon-precomposed":i('link[rel="apple-touch-icon-precomposed"]').attr("href"),icon:i('link[rel="icon"]').attr("href"),"shortcut icon":i('link[rel="shortcut icon"]').attr("href")},f=(new Date).getTime();switch(t.mftFaviconAltIcon[o]){case"none":s=n.mftFaviconAltIcon[o];break;case"":s=n.mftFaviconAltIcon[o];break;default:s=t.mftFaviconAltIcon[o]}c=function(e){if(Object.keys(e.oldFavicon).length>0)for(var t in e.oldFavicon)e.oldFavicon.hasOwnProperty(t)&&(i('link[rel="'+t+'"]').attr("href")==e.oldFavicon[t]?i('link[rel="'+t+'"]').attr("href",e.newFavicon[t]):i('link[rel="'+t+'"]').attr("href")==e.newFavicon[t]&&i('link[rel="'+t+'"]').attr("href",e.oldFavicon[t]))},l[o]={oldFavicon:d,newFavicon:s,blinkInterval:t.mftFaviconBlinkInterval[o],timeInterval:0,now:a,then:f,delta:r,callbackFunction:c},l[o].timeInterval=e(l[o])}}function o(i,e,t){i.mftFaviconBlink[t]&&void 0!==e[t]&&e[t].timeInterval>0&&clearInterval(e[t].timeInterval)}function r(t,n,l,o){if(t.mftTitleMarquee[o]){var r,a,c,s,d=(new Date).getTime(),f=i(document).prop("title").split("");switch(f.push(" "),t.mftTitleMarqueeDir[o]){case"left":r=function(i){i.push(i.shift())};break;case"right":r=function(i){i.unshift(i.pop())}}s=function(e){e.shifted(e.myText),i(document).prop("title",e.myText.join(""))},l[o]={shifted:r,blinkInterval:t.mftTitleMarqueeDelay[o],timeInterval:0,myText:f,now:c,then:d,delta:a,callbackFunction:s},l[o].timeInterval=e(l[o])}}function a(i,e,t){i.mftTitleMarquee[t]&&void 0!==e[t]&&e[t].timeInterval>0&&clearInterval(e[t].timeInterval)}var c=[],s={init:function(e){var s={mftMissYou:!0,mftMissYouTitle:"Hey! I miss you!",mftMissYouFavicon:{"apple-touch-icon-precomposed":"",icon:"","shortcut icon":""},mftTitleBlink:{visible:!1,hidden:!1},mftTitleBlinkInterval:{visible:1e3,hidden:1e3},mftTitleAltText:{visible:"\ufeff",hidden:"\ufeff"},mftFaviconBlink:{visible:!1,hidden:!1},mftFaviconBlinkInterval:{visible:1e3,hidden:1e3},mftFaviconAltIcon:{visible:{"apple-touch-icon-precomposed":"",icon:"","shortcut icon":""},hidden:{"apple-touch-icon-precomposed":"",icon:"","shortcut icon":""}},mftTitleMarquee:{visible:!1,hidden:!1},mftTitleMarqueeDir:{visible:"left",hidden:"left"},mftTitleMarqueeDelay:{visible:200,hidden:500}},d=i.extend({},s,e),f=i(document).prop("title"),v={"apple-touch-icon-precomposed":i('link[rel="apple-touch-icon-precomposed"]').attr("href"),icon:i('link[rel="icon"]').attr("href"),"shortcut icon":i('link[rel="shortcut icon"]').attr("href")},m={visible:{},hidden:{}},u={visible:{},hidden:{}},h={visible:{},hidden:{}};for(var p in d)d.hasOwnProperty(p)&&"mftMissYou"!=p&&"mftMissYouTitle"!=p&&("string"==typeof d[p]||"number"==typeof d[p]?d[p]={visible:d[p],hidden:d[p]}:i.isArray(d[p])&&(d[p]={visible:d[p][0],hidden:d[p][1]}));return d.mftTitleMarquee.visible?r(d,s,h.visible,"visible"):d.mftTitleBlink.visible&&t(d,s,m.visible,"visible"),l(d,s,u.visible,"visible"),i(document).on("visibilitychange",function(){if(i(document).prop("hidden")){if(d.mftMissYou&&(""!==d.mftMissYouTitle?i(document).prop("title",d.mftMissYouTitle):i(document).prop("title",s.mftMissYouTitle),Object.keys(d.mftMissYouFavicon).length>0))for(var e in d.mftMissYouFavicon)d.mftMissYouFavicon.hasOwnProperty(e)&&i('link[rel="'+e+'"]').attr("href",d.mftMissYouFavicon[e]);n(d,m.visible,"visible"),o(d,u.visible,"visible"),a(d,h.visible,"visible"),d.mftTitleMarquee.hidden?r(d,s,h.hidden,"hidden"):d.mftTitleBlink.hidden&&t(d,s,m.hidden,"hidden"),l(d,s,u.hidden,"hidden")}else{if(i(document).prop("title",f),Object.keys(v).length>0)for(var c in v)v.hasOwnProperty(c)&&i('link[rel="'+c+'"]').attr("href",v[c]);n(d,m.hidden,"hidden"),o(d,u.hidden,"hidden"),a(d,h.hidden,"hidden"),d.mftTitleMarquee.visible?r(d,s,h.visible,"visible"):d.mftTitleBlink.visible&&t(d,s,m.visible,"visible"),l(d,s,u.visible,"visible")}}),i(document).data("mfancytitle",{settings:d,origTitle:f,origFavicon:v,titleBlinkOptions:m,faviconBlinkOptions:u,titleMarqueeOptions:h}),c=i(document).data("mfancytitle")},update:function(e){var t=i.extend({},c.settings,e);i.mFancyTitle("destroy"),i.mFancyTitle("init",t)},destroy:function(){n(c.settings,c.titleBlinkOptions.visible,"visible"),o(c.settings,c.titleBlinkOptions.visible,"visible"),a(c.settings,c.titleBlinkOptions.visible,"visible"),n(c.settings,c.titleBlinkOptions.hidden,"hidden"),o(c.settings,c.titleBlinkOptions.hidden,"hidden"),a(c.settings,c.titleBlinkOptions.hidden,"hidden"),i.removeData(c,"mfancytitle"),this.unbind(),this.element=null}};i.mFancyTitle=function(e){return s[e]?s[e].apply(i(document),Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void i.error("Method "+e+" does not exist on jQuery.mFancyTitle "):s.init.apply(i(document),arguments)}}(jQuery);

jQuery(document).ready(function($){
var title = document.title;
	
$.mFancyTitle({
mftMissYou: true,
mftMissYouTitle: 'Вернитесь, здесь же интересно!!! ',
mftMissYouFavicon: {'apple-touch-icon-precomposed': 'img/site1.ico','icon': 'img/site1.ico','shortcut icon': 'img/site1.ico'},
mftTitleBlink: [false, false],
mftTitleBlinkInterval: [1000, 1000],
mftTitleAltText: [title,title],
mftFaviconBlink: [false, false],
mftFaviconBlinkInterval: 1000,
mftFaviconAltIcon: {
	'visible': {'apple-touch-icon-precomposed': 'img/site.ico','icon': 'img/site.ico','shortcut icon': 'img/site.ico'},
	'hidden': {'apple-touch-icon-precomposed': 'img/site.ico','icon': 'img/site.ico','shortcut icon': 'img/site.ico'}
},
mftTitleMarquee: [false, false],
mftTitleMarqueeDir: ['right', 'left'],
mftTitleMarqueeDelay: [200, 200]
});
});



swiper = new Swiper('.swiper-container',  {
	effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 70,
        shadowScale:0.7,
      },

    // allowTouchMove: false, отключение пролистывания вручную
	speed: 1000,
	loop: true,//зацикленность
	autoplay: {
    delay: 4000,
  },
  
      
      
    });



 
