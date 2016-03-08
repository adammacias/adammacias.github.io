//---
//# jekyll
//---

//http://code.tutsplus.com/tutorials/using-createjs-preloadjs-soundjs-and-tweenjs--net-36292
//http://jsfiddle.net/uTc54/2/
//http://createjs.com/docs/preloadjs/classes/LoadQueue.html
//http://createjs.com/
// http://www.studiolk.com.br/2013/ --- http://www.studiolk.com.br/2013/html/js/app.js --- https://gist.github.com/anonymous/8553fed5a6a4afa783f3
// https://api.jquery.com/jquery.getscript/
// https://api.jquery.com/load/
//http://stackoverflow.com/questions/2725523/how-to-include-css-and-js-files-via-https-when-needed
//https://api.jquery.com/wrap/ -- https://api.jquery.com/wrapAll/


var preload, // queue        = new createjs.LoadQueue(),
    manifest,
    manifestHome,
    $html         = $('html'), // http://www.w3schools.com/jsref/dom_obj_body.asp // http://www.w3schools.com/jsref/prop_html_id.asp
    progress     = '#progress',
    progressNumberAux = 0;

function setupManifest() {
  manifest = [
    // CSS
    { id:   'css-app', src:  urlSite + '/assets/css/app.css' },
    // IMAGES ASSETS
    { src:  urlSite + '/uploads/breakingbad-assets/periodic_table-bg.png' },
    { src:  urlSite + '/uploads/breakingbad-assets/logo-bettercalladam.png' },
    { src:  urlSite + '/uploads/breakingbad-assets/logo-metilamina-xs.png' },
    // IMAGES BACKGROUNDS
    { src:  urlSite + '/uploads/header-breakingbad-1.png' },
    { src:  urlSite + '/uploads/header-breakingbad-2.png' },
    { src:  urlSite + '/uploads/header-breakingbad-3.png' },
    { src:  urlSite + '/uploads/header-breakingbad-4.png' },
    { src:  urlSite + '/uploads/header-breakingbad-5.png' },
    { src:  urlSite + '/uploads/header-breakingbad-6.png' }
  ];

  manifestHome = [
  // AMBB
    { id:   'periodic_table', src:  urlSite + '/uploads/breakingbad-assets/periodic_table.png' },
    { id:   'ambb.min.js', src:  urlSite + '/assets/js/home.min.js'},
    { id:   'smoke', src:  urlSite + '/uploads/breakingbad-assets/smoke.png' },
    { id:   'smoke_1', src:  urlSite + '/uploads/breakingbad-assets/smoke_1.png' },
    { id:   'smoke_2', src:  urlSite + '/uploads/breakingbad-assets/smoke_2.png' },
    { id:   'smoke_3', src:  urlSite + '/uploads/breakingbad-assets/smoke_3.png' },
    { id:   'breaking_bad_audio_ogg', src:  urlSite + '/uploads/breakingbad-assets/audio/breaking_bad_intro.ogg' } //http://www.createjs.com/tutorials/SoundJS%20and%20PreloadJS/
  ];

  //for(var i=1;i<=13;i++)
          //manifest.push({src:"c"+i+".png"})
}



function startPreload() {
   //To use LoadQueue, create a LoadQueue instance. If you want to force tag loading where possible, set the preferXHR argument to false.
    preload = new createjs.LoadQueue(true); // preload = new createjs.LoadQueue(true);
    preload.on('complete',     onComplete);
    preload.on('error',        onError);
    preload.on('fileload',     onFileLoad);
    preload.on('fileprogress', onFileProgress);
    preload.on('progress',     onProgress);


    if( $html.hasClass('page-home') ){
      preload.loadManifest(manifestHome);
      $('body, html').css('overflow-x','hidden');
      $('body, html').css('overflow-y','hidden');
      $('body, html').css('overflow','hidden');
      $('#ascrail2000').hide();
      $('#ascrail2000-hr').hide();
    }
    preload.loadManifest(manifest);
}


function onComplete(event) {
  //console.log('Complete', event);
  //$state.text( $state.text() + '[All loaded]' );
  //$progressbar.addClass('complete');

  if( $html.hasClass('page-home') ){
    document.getElementById('audio-breakingbad').play();
  }
  console.log("BluSky done!");
  $html.removeClass('loading').addClass('loaded');



  //setTimeout(function(){ $("#loading").hide(); }, 800);

  //$( "#loading" ).fadeOut( 2600 );
  //$( "#loading" ).slideUp(1000);


  //$(body).addClass('loaded');
  //document.body.className += " loaded";
  //setTimeout(function(){ $(body).addClass('loaded'); }, 3000);


   ///////////////////////////////// document.getElementById('audio-breakingbad').play();
   //document.getElementById('audio-breakingbad').play();

}

function onError(event) {
  // console.log('Error', event);
  // $state.text( $state.text() + '[' + event.item.id + ' errored] ');
}

function onFileLoad(event) {
  //console.log('File loaded', event);
  //$state.text( $state.text() + '[' + event.item.id + ' loaded] ');
}

function onFileProgress(event) {
  //console.log('File progress', event);
}


function onProgress(event) {
  var progressNumber = Math.round(event.loaded * 100);

  //console.log('General progress', Math.round(event.loaded) * 100, event);
  //$progress.text(progress + '%');
  //$progressbar.css({
    //'width': progress + '%'
  //});

  //$(progress).text(progressNumber + '%');
  ///////////////////////////////////////console.log('General progress', progressNumber, Math.round(event.loaded) * 100, event);

  //$('#loading-screen').css('margin-top', '-='+progressNumber+'px');

  if( progressNumberAux < progressNumber){
    progressNumberAux = progressNumber;
    //$('#loading-screen').css('margin-top', (100 - (progressNumber) ) +'px');
    $(progress).text(progressNumber + '%');
  }
  //console.log(progressNumber);

  ////////////////////////////////////////////////////////////if(progressNumber>99) { $(body).addClass('loaded'); }


}

setupManifest();
startPreload();

