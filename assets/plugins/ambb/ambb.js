---
---
(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    settings = {
      color: {
        r: 254,
        g: 254,
        b: 51
      }
    },
    loading = true;

canvas.height = document.body.offsetHeight;
canvas.width = 300;

var parts = [],
    minSpawnTime = 40,
    lastTime = new Date().getTime(),
    maxLifeTime = Math.min(5000, (canvas.height / (1.5 * 60) * 1000)),
    emitterX = canvas.width / 2,
    emitterY = canvas.height - 10,
    smokeImage = new Image();

function spawn() {
  if (new Date().getTime() > lastTime + minSpawnTime) {
    lastTime = new Date().getTime();
    parts.push(new smoke(emitterX, emitterY));
  }
}

function render() {
  if(loading){
    load();
    return false;
  }

  var len = parts.length;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  while (len--) {
    if (parts[len].y < 0 || parts[len].lifeTime > maxLifeTime) {
      parts.splice(len, 1);
    } else {
      parts[len].update();

      ctx.save();
      var offsetX = -parts[len].size / 2,
          offsetY = -parts[len].size / 2;

      ctx.translate(parts[len].x - offsetX, parts[len].y - offsetY);
      ctx.rotate(parts[len].angle / 180 * Math.PI);
      ctx.globalAlpha = parts[len].alpha;
      ctx.drawImage(smokeImage, offsetX, offsetY, parts[len].size, parts[len].size);
      ctx.restore();
    }
  }
  spawn();
  requestAnimationFrame(render);
}

function smoke(x, y, index) {
  this.x = x;
  this.y = y;

  this.size = 1;
  this.startSize = 32;
  this.endSize = 40;

  this.angle = Math.random() * 359;

  this.startLife = new Date().getTime();
  this.lifeTime = 0;

  this.velY = -1 - (Math.random() * 0.5);
  this.velX = Math.floor(Math.random() * (-6) + 3) / 10;
}

smoke.prototype.update = function () {
  this.lifeTime = new Date().getTime() - this.startLife;
  this.angle += 0.2;

  var lifePerc = ((this.lifeTime / maxLifeTime) * 100);

  this.size = this.startSize + ((this.endSize - this.startSize) * lifePerc * .1);

  this.alpha = 1 - (lifePerc * .01);
  this.alpha = Math.max(this.alpha, 0);

  this.x += this.velX;
  this.y += this.velY;
}

smokeImage.src = document.getElementById("smoke").src;
//document.getElementsByTagName("img")[0];
smokeImage.onload = function(){
  loading = false;
}

function load(){
  if(loading){
    setTimeout(load, 2000);
  }else{
    render();
  }
}

render();

// save off the original image for colorizing
var origImage = smokeImage;

window.onresize = resizeMe;
window.onload = resizeMe;

function resizeMe() {
  canvas.height = document.body.offsetHeight;
}

function changeColor() {
  var tCanvas = document.createElement("canvas"),
      tCtx = tCanvas.getContext("2d"),
      color = settings.color;

  tCanvas.width = tCanvas.height = 32;
  tCtx.drawImage(origImage, 0, 0, 32, 32);

  var imgd = tCtx.getImageData(0, 0, 32, 32),
      pix = imgd.data;

  for (var i = 0, n = pix.length; i < n; i += 4) {
    pix[i] = color.r
    pix[i + 1] = color.g;
    pix[i + 2] = color.b;
  }

  tCtx.putImageData(imgd, 0, 0);
  return tCanvas.toDataURL();
}

// Settings
//smokeImage.src = changeColor();
var gui = new dat.GUI();
var colorController = gui.addColor(settings, 'color').onChange(function () {
  smokeImage.src = changeColor();
});





























var lastRender = new Date().getTime();
var context;
var smoke_1 = new ParticleEmitter();
var smoke_2 = new ParticleEmitter();
var smoke_3 = new ParticleEmitter();
var CANVAS_WIDTH = 1000;
var CANVAS_HEIGHT = 1000;
var dirtyLeft = 0;
var dirtyTop = 0;
var dirtyRight = CANVAS_WIDTH;
var dirtyBottom = CANVAS_HEIGHT;
var windVelocity = 0.01;
var count = 0;

window.requestAnimFrame = (function () {
    return  window.requestAnimationFrame   ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function ( c ) {
            window.setTimeout( c, 16.6 );
        };
})();

initxxx();
//setTimeout(initxxx, 3000);

function initxxx() {
    var canvas = $('#canvassmoke').get(0);
    if (canvas.getContext) {
        context = canvas.getContext('2d');
    } else {
        return;
    }

    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    var img_smoke_1 = new Image(),
        img_smoke_2 = new Image(),
        img_smoke_3 = new Image();

    img_smoke_1.src = '{{ site.url }}/media/theme-bb/smoke_1.png';
    img_smoke_2.src = '{{ site.url }}/media/theme-bb/smoke_2.png';
    img_smoke_3.src = '{{ site.url }}/media/theme-bb/smoke_3.png'; //'img/smoke_3.png';

    smoke_1.m_alpha = 0.2;
    smoke_3.m_speed = 0.001;
    smoke_1.initxxx(.142, .631, 90, img_smoke_1);

    smoke_2.m_alpha = 0.3;
    smoke_2.initxxx(.322, .753, 90, img_smoke_2);

    smoke_3.m_alpha = 0.1;
    smoke_3.m_speed = 0.02;
    smoke_3.initxxx(.222, .553, 90, img_smoke_3);

    requestAnimFrame(renderxxx);
}

function ParticleEmitter() {
    this.m_x;
    this.m_y;
    this.m_dieRate;
    this.m_image;
    this.m_speed = 0.04;
    this.m_alpha = 1.0;

    this.m_listParticle = [];

    // ParticleEmitter().init function
    // xScale = number between 0 and 1. 0 = on left side 1 = on top
    // yScale = number between 0 and 1. 0 = on top 1 = on bottom
    // particles = number of particles
    // image = smoke graphic for each particle
    this.initxxx = function(xScale, yScale, particles, image) {
        // the effect is positioned relative to the width and height of the
        // canvas
        this.m_x = CANVAS_WIDTH * xScale;
        this.m_y = CANVAS_HEIGHT * yScale;
        this.m_image = image;
        this.m_dieRate = 0.95;
        // start with smoke already in place
        for ( var n = 0; n < particles; n++) {
            this.m_listParticle.push(new Particle());
            this.m_listParticle[n].initxxx(this, n * 50000 * this.m_speed);
        }
    }

    this.updatexxx = function(timeElapsed) {
        for ( var n = 0; n < this.m_listParticle.length; n++) {
            this.m_listParticle[n].updatexxx(timeElapsed);
        }
    }

    this.renderxxx = function(context) {
        for ( var n = 0; n < this.m_listParticle.length; n++) {
            this.m_listParticle[n].renderxxx(context);
        }
    }
};

function Particle() {
    this.m_x;
    this.m_y;
    this.m_age;
    this.m_xVector;
    this.m_yVector;
    this.m_scale;
    this.m_alpha;
    this.m_canRegen;
    this.m_timeDie;
    this.m_emitter;

    this.initxxx = function(emitter, age) {
        this.m_age = age;
        this.m_emitter = emitter;
        this.m_canRegen = true;
        this.startRand();
    }

    this.isAlive = function() {
        return this.m_age < this.m_timeDie;
    }

    this.startRand = function() {
        // smoke rises and spreads
        this.m_xVector = Math.random() * 0.5 - 0.25;
        this.m_yVector = -1.5 - Math.random();
        this.m_timeDie = 20000 + Math.floor(Math.random() * 12000);

        var invDist = 1.0 / Math.sqrt(this.m_xVector * this.m_xVector
                + this.m_yVector * this.m_yVector);
        // normalise speed
        this.m_xVector = this.m_xVector * invDist * this.m_emitter.m_speed;
        this.m_yVector = this.m_yVector * invDist * this.m_emitter.m_speed;
        // starting position within a 20 pixel area
        this.m_x = (this.m_emitter.m_x + Math.floor(Math.random() * 20) - 10);
        this.m_y = (this.m_emitter.m_y + Math.floor(Math.random() * 20) - 10);
        // the initial age may be > 0. This is so there is already a smoke trail
        // in
        // place at the start
        this.m_x += (this.m_xVector + windVelocity) * this.m_age;
        this.m_y += this.m_yVector * this.m_age;
        this.m_scale = 0.01;
        this.m_alpha = 0.0;
    }

    this.updatexxx = function(timeElapsed) {
        this.m_age += timeElapsed;
        if (!this.isAlive()) {
            // smoke eventually dies
            if (Math.random() > this.m_emitter.m_dieRate) {
                this.m_canRegen = false;
            }
            if (!this.m_canRegen) {
                return;
            }
            // regenerate
            this.m_age = 0;
            this.startRand();
            return;
        }
        // At start the particle fades in and expands rapidly (like in real
        // life)
        var fadeIn = this.m_timeDie * 0.05;
        var startScale;
        var maxStartScale = 0.3;
        if (this.m_age < fadeIn) {
            this.m_alpha = this.m_age / fadeIn;
            startScale = this.m_alpha * maxStartScale;
            // y increases quicker because particle is expanding quicker
            this.m_y += this.m_yVector * 2.0 * timeElapsed;
        } else {
            this.m_alpha = 1.0 - (this.m_age - fadeIn)
                    / (this.m_timeDie - fadeIn);
            startScale = maxStartScale;
            this.m_y += this.m_yVector * timeElapsed;
        }
        // the x direction is influenced by wind velocity
        this.m_x += (this.m_xVector + windVelocity) * timeElapsed;
        this.m_alpha *= this.m_emitter.m_alpha;
        this.m_scale = 0.001 + startScale + this.m_age / 4000.0;
    }

    this.renderxxx = function(ctx) {
        if (!this.isAlive())
            return;
        ctx.globalAlpha = this.m_alpha;
        var height = this.m_emitter.m_image.height * this.m_scale;
        var width = this.m_emitter.m_image.width * this.m_scale;
        // round it to a integer to prevent subpixel positioning
        var x = Math.round(this.m_x - width / 2);
        var y = Math.round(this.m_y + height / 2);
        ctx.drawImage(this.m_emitter.m_image, x, y, width, height);
        if (x < dirtyLeft) {
            dirtyLeft = x;
        }
        if (x + width > dirtyRight) {
            dirtyRight = x + width;
        }
        if (y < dirtyTop) {
            dirtyTop = y;
        }
        if (y + height > dirtyBottom) {
            dirtyBottom = y + height;
        }
    }
};

function renderxxx() {
    // time in milliseconds
    var timeElapsed = new Date().getTime() - lastRender;
    lastRender = new Date().getTime();
    context.clearRect(dirtyLeft, dirtyTop, dirtyRight - dirtyLeft, dirtyBottom - dirtyTop);
    dirtyLeft = 1000;
    dirtyTop = 1000;
    dirtyRight = 0;
    dirtyBottom = 0;

    smoke_1.updatexxx(timeElapsed);
    smoke_1.renderxxx(context);

    smoke_2.updatexxx(timeElapsed);
    smoke_2.renderxxx(context);

    smoke_3.updatexxx(timeElapsed);
    smoke_3.renderxxx(context);

    windVelocity += (Math.random() - 0.5) * 0.002;
    if (windVelocity > 0.015) {
        windVelocity = 0.015;
    }
    if (windVelocity < 0.0) {
        windVelocity = 0.0;
    }

    requestAnimFrame(renderxxx);
}
