;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-triangle-r" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M336.75 174.113l-0.004 0.002c-6.638-5.428-15.12-8.688-24.364-8.688-21.271 0-38.516 17.244-38.52 38.514l-0.166 0.078 0.171 659.888c0.081 21.204 17.292 38.37 38.515 38.37 10.089 0 19.268-3.883 26.136-10.23l385.962-328.345c9.223-7.038 15.18-18.139 15.18-30.636 0-12.134-5.617-22.951-14.385-30.012v-0.010l-388.201-328.655c-0.084-0.070-0.166-0.142-0.25-0.212l-0.074-0.063z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xiayiye" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M753.728 511.97l-447.559-447.556-35.192 35.193 412.041 412.041-412.747 412.747 35.194 35.193 413.070-412.425z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
