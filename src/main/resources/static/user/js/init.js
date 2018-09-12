$(document).ready(function(){
 function loadMedia(){
     var contentId=$("#contentId").val();
     var mediaUrl='/getMediaList';
     $.ajax({
       type: 'POST',
       url: mediaUrl,
       data: {contentId:contentId},
       dataType:'json',
       success: function(res){
            if(res.success){
               var videoList=[];
               var data=res.result;
               var len=data.length;
               for(var i=0;i<len;i++){
                  var o={src:data[i].mediaUrl,type:'application/x-mpegURL'};
                  videoList.push(o);
               }

               if(len>0){
                setVideoPlay(videoList);
               }else{
                    $('#videoPlay').remove();
               }

            }
       }
     });

 }
 loadMedia();
 function setVideoPlay(videoList){
    var curr=1;
     //var videoList=[{src:'http://edubucket-1252307104.cosgz.myqcloud.com/videoPath/oceans.m3u8',type:'application/x-mpegURL'}];
     var player = videojs('videoPlay',{
                 width:600,//宽string|number
                 height:450,//高：string|number
                 controls:true,//控制条：boolean
                 preload:"none",//预加载：string；'auto'|'true'|'metadata'|'none'
                 poster:'/user/img/logo.png',//预览图：string
                 autoplay:false,//自动播放：boolean
                 loop:false,//循环：boolean
                 muted:false,//静音：boolean
                 sources:videoList,
                 controlBar: {
                     muteToggle: false,
                     volumeMenuButton:true//静音按钮
                 }
             },function onPlayerReady(){
                 var videoMe = this;
                 videojs.log('ok');
                 this.on('ended',function(){
                     videojs.log('ended')
                     debugger;
                     var videoMe=this;
                     var len=videoList.length;
                     if(curr>=len){
                        curr=0;
                     }else{
                         var url=videoList[curr];
                         videoMe.reset();
                         videoMe.src(url);
                         videoMe.load(url);
                         videoMe.play();
                     }
                     curr++;
                 })
                 this.on('timeupdate',function (e){
                     videojs.log(videoMe.currentTime())
                 })
            });
 }
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
