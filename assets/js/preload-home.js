---
# jekyll
---

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
    html         = 'html', // http://www.w3schools.com/jsref/dom_obj_body.asp // http://www.w3schools.com/jsref/prop_html_id.asp
    progress     = '#progress',
    progressNumberAux = 0;




function setupManifest() {
  manifest = [
    // AMBB
    { id:   'smoke', src:  '{{ site.url }}/media/theme-bb/smoke.png' },
    { id:   'smoke_1', src:  '{{ site.url }}/media/theme-bb/smoke_1.png' },
    { id:   'smoke_2', src:  '{{ site.url }}/media/theme-bb/smoke_2.png' },
    { id:   'smoke_3', src:  '{{ site.url }}/media/theme-bb/smoke_3.png' },
    { id:   'periodic_table', src:  '{{ site.url }}/media/theme-bb/periodic_table.png' },
    { id:   'breaking_bad_audio_ogg', src:  '{{ site.url }}/media/audio/breaking_bad_intro.ogg' }, //http://www.createjs.com/tutorials/SoundJS%20and%20PreloadJS/
    { id:   'ambb.css', src:  '{{ site.url }}/assets/plugins/ambb/ambb.css' },
    { id:   'ambb.min.js', src:  '{{ site.url }}/assets/plugins/ambb/ambb.min.js'},

    // CSS
    { id:   'font-awesome.css', src:  '{{ site.url }}/assets/css/font-awesome.css' },
    { id:   'bootstrap-custom.css', src:  '{{ site.url }}/assets/css/bootstrap-custom.css' },
    { id:   'app.css', src:  '{{ site.url }}/assets/css/app.css' },

    // JS
    { id:   'main.min.js', src:  '{{ site.url }}/assets/js/main.min.js' },
    // IMAGES ASSETS
    { src:  '{{ site.url }}/media/periodic_table.png' },
    { src:  '{{ site.url }}/media/logo-bettercalladam.png' },
    { src:  '{{ site.url }}/media/logo-metilamina-xs.png' },
    // IMAGES BACKGROUNDS
    { src:  '{{ site.url }}/media/bg-breakingbad-001.png' },
    { src:  '{{ site.url }}/media/bg-breakingbad-002.png' },
    { src:  '{{ site.url }}/media/bg-breakingbad-001.png' },
    { src:  '{{ site.url }}/media/bg-breakingbad-003.png' },
    { src:  '{{ site.url }}/media/bg-breakingbad-004.png' }, // MAYBE
    { src:  '{{ site.url }}/media/bg-breakingbad-005.png' }, // MAYBE
    { src:  '{{ site.url }}/media/bg-breakingbad-006.png' }

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

    preload.loadManifest(manifest);
}


function onComplete(event) {
  //console.log('Complete', event);
  //$state.text( $state.text() + '[All loaded]' );
  //$progressbar.addClass('complete');

  console.log("crystal done!");
  $(html).addClass('loaded');
  //document.getElementById('audio-breakingbad').play();

  //setTimeout(function(){ $("#loading").hide(); }, 800);

  //$( "#loading" ).fadeOut( 2600 );
  //$( "#loading" ).slideUp(1000);


  //$(body).addClass('loaded');
  //document.body.className += " loaded";
  //setTimeout(function(){ $(body).addClass('loaded'); }, 3000);


   ///////////////////////////////// document.getElementById('audio-breakingbad').play();

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
  //console.log('General progress', progressNumber, Math.round(event.loaded) * 100, event);

  //$('#loading-screen').css('margin-top', '-='+progressNumber+'px');

  if( progressNumberAux < progressNumber){
    progressNumberAux = progressNumber;
    //$('#loading-screen').css('margin-top', (100 - (progressNumber) ) +'px');
    $(progress).text(progressNumber + '%');
  }

  ////////////////////////////////////////////////////////////if(progressNumber>99) { $(body).addClass('loaded'); }


}


setupManifest();
startPreload();
