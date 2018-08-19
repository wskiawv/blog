$(document).ready(function(){

 function init(){
          var imgArray=$('#post-content img');
          var imgSrcArray=[];
          var items=[];
          $.each(imgArray, function(){
                var img=$(this);
                debugger;
                var imgSrc=img.attr('src');
                var width=img[0].naturalWidth;
                var height=img[0].naturalHeight;
                debugger;
                imgSrcArray.push(imgSrc);
                var item={src:imgSrc,w:width,h:height};
                items.push(item);
           });
           var openPhotoSwipe=function(){
           	   var pswpElement=document.querySelectorAll('.pswp')[0];
               var options={history:false,focus:false,showAnimationDuration:0,hideAnimationDuration:0};
           	   var gallery=new PhotoSwipe(pswpElement,PhotoSwipeUI_Default,items,options);
           	   gallery.init();
           	   return gallery;
           	   debugger;
           	  // gallery.goTo(index):
           };
           var len=imgSrcArray.length;
           if(len==null||len<1){
            $('.jq22-container').remove();
           }else{
            var ul=$('.sw-slides');
            var i=0;
            debugger;
            $.each(imgSrcArray, function(){
                var html='<li class="sw-slide"><img src="'+imgSrcArray[i]+'" alt="Home"/></li>';
                i++;
                ul.append(html);
            });
            var imgArrayShow=$('#post-content img');
            $.each(imgArrayShow, function(index){
                var img=$(this);
                if(index==len){
                    index=0;
                }
                img.click(function(){
                    var gallery=openPhotoSwipe();
                    gallery.goTo(index);
                });

           });
           }
        }
        init();
        $('#full_feature').swipeslider();
      $('#content_slider').swipeslider({
        transitionDuration: 600,
        autoPlayTimeout: 10000,
        sliderHeight: '300px'
      });
      $('#responsiveness').swipeslider();
      $('#customizability').swipeslider({
        transitionDuration: 1500,
        autoPlayTimeout: 4000,
        timingFunction: 'cubic-bezier(0.38, 0.96, 0.7, 0.07)',
        sliderHeight: '30%'});
});
/*$(window).load(function() {

      $('#full_feature').swipeslider();
      $('#content_slider').swipeslider({
        transitionDuration: 600,
        autoPlayTimeout: 10000,
        sliderHeight: '300px'
      });
      $('#responsiveness').swipeslider();
      $('#customizability').swipeslider({
        transitionDuration: 1500,
        autoPlayTimeout: 4000,
        timingFunction: 'cubic-bezier(0.38, 0.96, 0.7, 0.07)',
        sliderHeight: '30%'});



 });*/
