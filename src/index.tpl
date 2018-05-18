<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0,user-scalable=no,minimal-ui">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="format-detection" content="telephone=no">
    <meta name="Expires" content="-1">
    <meta name="Pragma" content="no-cache">
    <meta name="full-screen" content="yes">
    <meta name="browsermode" content="application">
    <meta name="x5-orientation" content="portrait">
    <meta name="Keywords" content="<% this.keywords %>">
    <meta name="description" content="<% this.description %>">
    <script type="text/javascript">
      (function(){
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
        function addElementMeta(name,content) {
          var head = document.getElementsByTagName('head')[0];
          var meta = document.createElement('meta');
          meta.setAttribute('name', name);
          meta.setAttribute('content', content);
          head.appendChild(meta);
        }
        if(isAndroid){
          addElementMeta('x5-fullscreen', 'true');
          addElementMeta('x5-page-mode', 'app');
        }
      })();
    </script>
    <link rel="apple-touch-icon" href="<% this.appleTouchIcon %>">
    <link rel="shortcut icon" type="image/x-icon" href="<% this.shortcutIcon %>">
    <title><% this.title %></title>
  </head>
  <body>
    <div id="root"></div>
    <span class="fullpage-arrow"><i></i></span>
    <script src="js/index.js"></script>
  </body>
</html>
