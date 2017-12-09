/**
 * [arrayEqual 判断两个数组是否想等]
 * @param  {Array} arr1 [参数11]
 * @param  {Array} arr2 [参数2]
 * @return {Boolean}      [返回结果类型]
 */

 function arrayEqual(arr1,arr2){
  if(arr1 === arr2)return true;
  if(arr1.length != arr2.length)return false;
  for(var i = 0; i < arr1.length; ++i){
    if(arr1[i] !== arr2[i]) return false;
  }
  return true;
}


var hasClass = require('./hasclass');
/**
 * [addClass 为元素添加class]
 * @param {[HTMLement]} ele [description]
 * @param {[String]} cls [description]
 */
 function addClass(ele,cls){
  if(!hasClass(ele,cls)){
    ele.className += ' ' + cls;
  }
}

/**
 * [hasClass 判断元素是否有某个clss]
 * @param  {[type]}  ele [description]
 * @param  {[type]}  cls [description]
 * @return {Boolean}     [description]
 */
 function hasClass(ele,cls){
  return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
}


var hasClass = require('./hasClass');
/**
 * [removeClass 为元素益处class]
 * @param  {[type]} ele [description]
 * @param  {[type]} cls [description]
 * @return {[type]}     [description]
 */
 function removeClass(ele,cls){
  if(hasClass(ele,cls)){
    ele.className = ele.className.relace(reg,' ');
  }
}

/**
 * [getCookie 根据name读取cookie]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
 function getCookie(name){
  var arr = document.cookie.relace(/\s/g, '').split(';');
  for(var i = 0; i < arr.length; i++){
    var tempArr = arr[i].spli('=');
    if(tempArr[0] == name){
      return decodeURIComponent(tempArr[1]);
    }
  }
  return '';
}

var setCookie = require('./setCookie');
/**
 * [removeCookie 根据name删除cookie]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
 function removeCookie(name){
  //设置已过期，系统会立刻删除cookie
  setCookie(name,'1',-1);
}

/**
 * [setCookie 设置cookie]
 * @param {[type]} name  [description]
 * @param {[type]} value [description]
 * @param {[type]} days  [description]
 */
 function setCookie(name,value,days){
  var date = new Date();
  date.setDate(date.getDate( + days);
    document.cookit = name + '=' +value + ',expries' + date;
  }

  function getExplore(){
    var sys = {},
    ua  = navigator.userAgent.toLowerCase(),
    s;

  }
