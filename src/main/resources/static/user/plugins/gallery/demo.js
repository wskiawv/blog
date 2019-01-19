/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {
  'use strict'

  // Load demo images from flickr:
  $.ajax({
    url: 'https://api.flickr.com/services/rest/',
    data: {
      format: 'json',
      method: 'flickr.interestingness.getList',
      api_key: '7617adae70159d09ba78cfec73c13be3' // jshint ignore:line
    },
    dataType: 'jsonp',
    jsonp: 'jsoncallback'
  }).done(function (result) {
    var carouselLinks = []
    var linksContainer = $('#links')
    var baseUrl
    // Add the demo images as links with thumbnails to the page:
    $.each(result.photos.photo, function (index, photo) {
      baseUrl = 'https://farm' + photo.farm + '.static.flickr.com/' +
      photo.server + '/' + photo.id + '_' + photo.secret
      $('<a/>')
        .append($('<img>').prop('src', baseUrl + '_s.jpg'))
        .prop('href', baseUrl + '_b.jpg')
        .prop('title', photo.title)
        .attr('data-gallery', '')
        .appendTo(linksContainer)
      carouselLinks.push({
        href: baseUrl + '_c.jpg',
        title: photo.title
      })
    })
    // Initialize the Gallery as image carousel:
    blueimp.Gallery(carouselLinks, {
      container: '#blueimp-image-carousel',
      carousel: true
    })
  })
  /*var videoplayList=[{
        sources: [{
          src: 'http://10.39.194.186:8080/big_buck_bunny.m3u8',
          type: 'application/x-mpegURL'
        }],
        poster: 'http://media.w3.org/2010/05/bunny/poster.png'
      },{
        sources: [{
          src: 'http://10.39.194.186:8080/fndxn.m3u8',
          type: 'application/x-mpegURL'
        }],
        poster: 'http://media.w3.org/2010/05/sintel/poster.png'
      },  {
        sources:[{
          src: 'http://10.39.194.186:8080/bhsj3A.m3u8',
          type:'application/x-mpegURL'
        }],
        poster: 'http://www.videojs.com/img/poster.jpg'
      }];*/
  var videoplayList=[
    {
      title: 'madagascar3',
      href: 'http://192.168.43.200:8080/madagascar3.m3u8',
      type: 'video/mp4',
      poster: 'http://media.w3.org/2010/05/sintel/poster.png'
    },
    {
      title: 'bhsj3A',
      href: 'http://192.168.43.200:8080/bhsj3A.m3u8',
      type: 'video/mp4',
      poster: 'https://i.imgur.com/MUSw4Zu.jpg'
    },    
    {
      title: 'fndxn',
      href: 'http://192.168.43.200:8080/fndxn.m3u8',
      type: 'video/mp4',
      poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/' +
        'Elephants_Dream_s1_proog.jpg/800px-Elephants_Dream_s1_proog.jpg'
    },
    {
      title: 'big_buck_bunny',
      href: 'http://192.168.43.200:8080/big_buck_bunny.m3u8',
      type: 'video/mp4',
      poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/' +
        'Elephants_Dream_s1_proog.jpg/800px-Elephants_Dream_s1_proog.jpg'
    }
  ];
  var gallery= blueimp.Gallery(videoplayList, {
    container: '#blueimp-video-carousel',
    carousel: true,    
    videoClass:'video-js vjs-default-skin vjs-big-play-centered'    
  });
  function setvideoPlayList(){
      
      var videoArray=$('video');
      for(var i=0;i<videoArray.length;i++){
        $(videoArray[i]).attr('id','video'+i);
        var videoId='video'+i;
        var obj=videoplayList[i];        
        var player=videojs(videoId,{
                  fluid: true,
                  controls:true,//控制条：boolean
                  preload:"none",//预加载：string；'auto'|'true'|'metadata'|'none'
                  poster:obj.poster,//预览图：string
                  autoplay:false,//自动播放：boolean
                  loop:false,//循环：boolean
                  muted:false,//静音：boolean
                  //sources:videoList,
                  controlBar: {
                      muteToggle: false,
                      volumeMenuButton:true//静音按钮
                  }
        });
        player.on([
                 'duringplaylistchange',
                 'playlistchange',
                 'beforeplaylistitem',
                 'playlistitem',
                 'playlistsorted'
               ], function(e) {
                 videojs.log('player saw "' + e.type + '"');
               });
        var videoList=[{
          sources: [{
            src: obj.href,
            type: 'application/x-mpegURL'
          }],
          poster: obj.poster
        }];
        player.playlist(videoList);
      }
      
    }
    setvideoPlayList();
  /*videojs('videoPlay',{
                  fluid: true,
                  controls:true,//控制条：boolean
                  preload:"none",//预加载：string；'auto'|'true'|'metadata'|'none'
                  poster:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/' +'Elephants_Dream_s1_proog.jpg/800px-Elephants_Dream_s1_proog.jpg',//预览图：string
                  autoplay:false,//自动播放：boolean
                  loop:false,//循环：boolean
                  muted:false,//静音：boolean
                  //sources:videoList,
                  controlBar: {
                      muteToggle: false,
                      volumeMenuButton:true//静音按钮
                  }
 });*/
  // Initialize the Gallery as video carousel:
  /*
  blueimp.Gallery([
    {
      title: 'Sintel',
      href: 'https://archive.org/download/Sintel/' +
        'sintel-2048-surround.mp4',
      type: 'video/mp4',
      poster: 'https://i.imgur.com/MUSw4Zu.jpg'
    },
    {
      title: 'Big Buck Bunny',
      href: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/' +
        'Big_Buck_Bunny_4K.webm',
      type: 'video/webm',
      poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/' +
        'Big_Buck_Bunny_4K.webm/4000px--Big_Buck_Bunny_4K.webm.jpg'
    },
    {
      title: 'Elephants Dream',
      href: 'https://upload.wikimedia.org/wikipedia/commons/8/83/' +
        'Elephants_Dream_%28high_quality%29.ogv',
      type: 'video/ogg',
      poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/' +
        'Elephants_Dream_s1_proog.jpg/800px-Elephants_Dream_s1_proog.jpg'
    },
    {
      title: 'LES TWINS - An Industry Ahead',
      type: 'text/html',
      youtube: 'zi4CIXpx7Bg'
    },
    {
      title: 'KN1GHT - Last Moon',
      type: 'text/html',
      vimeo: '73686146',
      poster: 'https://secure-a.vimeocdn.com/ts/448/835/448835699_960.jpg'
    }
  ], {
    container: '#blueimp-video-carousel',
    carousel: true
  })*/
})
