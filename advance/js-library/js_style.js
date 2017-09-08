/**
 * Created by Ly on 11/08/2017.
 */
/*
 对象式封装
*/

  var obj1 = (function(){

      var init_param = {
          color:'',
          title:''
      };

      var init_func ={

          init:function(){
             return  init_param.color
          },

          doSome:function(){
              new Object();
              return
          }

      };

      return {
          init_param: init_param,
          init_func: init_func
      };
  })();

