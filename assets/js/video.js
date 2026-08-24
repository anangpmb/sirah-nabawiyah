'use strict';
/* VideoLayer — latar video sinematik per-node.
   Node yang punya field `vid` akan memutar klip sekali lalu MENAHAN frame
   terakhir (tidak loop). Node berurutan yang merujuk klip sama tidak
   me-restart video (tetap beku di frame terakhir). Node tanpa `vid` → fade out
   dan latar WebGL/SVG kembali tampak.
   Berkas ada di: assets/video/<story>/<vid>.mp4
   Video di-mute + playsinline agar boleh autoplay di semua peramban. */
var VideoLayer = (function(){
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var _el = null, _curKey = null, _clearT = 0;

  function init(){ if(!_el) _el = document.getElementById('scene-video'); return !!_el; }

  return {
    /* Tampilkan video untuk `node` pada cerita `story`. Bila node tak punya
       `vid`, sembunyikan layer. */
    set: function(node, story){
      if(!init()) return;
      var stem = node && node.vid;
      var key  = stem ? (story + '/' + stem) : null;
      if(key === _curKey) return;                 // klip sama → biarkan main/beku
      _curKey = key;
      clearTimeout(_clearT);

      if(!key){                                    // node tanpa video → fade out
        _el.classList.remove('on');
        _clearT = setTimeout(function(){
          if(_curKey === null){ _el.pause(); _el.removeAttribute('src'); _el.load(); }
        }, 650);
        return;
      }

      _el.src = 'assets/video/' + key + '.mp4';
      _el.classList.add('on');
      if(!RM){                                     // hormati prefers-reduced-motion
        var p = _el.play();
        if(p && p.catch) p.catch(function(){});    // abaikan penolakan autoplay
      }
    },

    hide: function(){
      if(!init()) return;
      _curKey = null;
      clearTimeout(_clearT);
      _el.classList.remove('on');
      _el.pause();
    }
  };
})();
