//--------------------------
// This file loads all other scripts, including application.js.
// See http://yepnopejs.com/
//--------------------------------

yepnope([
  {
    load : ['http://use.typekit.com/jbr6axj.js', 'wait!http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js'],
  }, {
    load: ['ielt7!js/libs/dd_belatedpng.js', 'js/application.js']
  }
]);
