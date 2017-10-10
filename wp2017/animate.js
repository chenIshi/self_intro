//flip_state紀錄現在問問題的翻轉狀態
var flip_state = 0;
//每個state 0的話表示沒有
var Q1_state = 0;
var Q2_state = 0;
var Q3_state = 0;
var Q4_state = 0;    
//next_state的表現，亦即被改到什麼狀態
var change_state = 0;     
//統計該問題被問了幾次，要給出對應的回應；但是要在每次flip的時候refresh
var quest_btn_pressed = 0;
//來玩個彩蛋拉
var easter_times = 0;

//網頁初始設定，把所有response隱藏起來（其實可以考慮直接等事件觸發再append?）
$( document ).ready(function() {
  $('.shape').shape();
  $('.message').transition('hide');
  flip_state = 0;
  change_state = 0;
});


//按鈕動畫
$('.pulsable').mousedown(function(){
  $('.pulsable').transition('pulse');  
  $('#ask_btn').transition('scale');
})

$('.clickable').click(function(){

  //清空上一個filp_state留下來的回應
  quest_btn_pressed = 0;
  $('.answer').transition('hide');

  //清空每次flip的append，同時也要隱藏element
  if(!flip_state){
    Q1_state = 0;
    $('#rel_pos_11').transition('hide');
    $('#append_content_01').remove();
    Q2_state = 0;
    $('#rel_pos_12').transition('hide');
    $('#append_content_02').remove();
  }else{
    Q3_state = 0;
    $('#rel_pos_13').transition('hide');
    $('#append_content_03').remove();
    Q4_state = 0;
    $('#rel_pos_14').transition('hide');
    $('#append_content_04').remove();
  }
  $('.shape').shape('flip back');
  //flip_state如果是0代表沒被翻過，反之亦然
  flip_state = (flip_state)?0:1;
  $('#ask_btn').transition('scale');
})  

//btn改doc tree實例
$("#ask_btn").click(function(){

  $('#ask_btn').transition('jiggle');

  //所有不小心跑出來的回應都要消失掉
  quest_btn_pressed = 0;
  $('.answer').transition('hide');

  if(!flip_state){
    if(!Q1_state){
      Q1_state = 1;
      change_state = 1;
      //flip到Q1_state的時候要隱藏Q2的東西
      Q2_state = 0;
      $('#rel_pos_12').transition('hide');
      $('#append_content_02').remove();
    }else if(!Q2_state){
      Q2_state = 1;
      change_state = 2;
      //disable Q1
      Q1_state = 0;
      $('#rel_pos_11').transition('hide');
      $('#append_content_01').remove();
    }
  }else{
    if(!Q3_state){
      Q3_state = 1;
      change_state = 3;
      //disable Q4
      Q4_state = 0;
      $('#rel_pos_14').transition('hide');
      $('#append_content_04').remove();      
    }else if(!Q4_state){
      Q4_state = 1;
      change_state = 4;
      //disable Q3
      Q3_state = 0;
      $('#rel_pos_13').transition('hide');
      $('#append_content_03').remove();      
    }
  }

  switch(change_state){
    case 1:
      $('#Quest1').append(function(){
        return "<div id="+"append_content_01"+"><p>I'm Quest 01</p></div>";
      });
      $('#rel_pos_11').transition('show');
      change_state = 0;
      break;
    case 2:
      $('#Quest2').append(function(){
        return "<div id="+"append_content_02"+"><p>I'm Quest 02</p></div>";
      });
      $('#rel_pos_12').transition('show');
      change_state = 0;
      break;
    case 3:
      $('#Quest3').append(function(){
        return "<div id="+"append_content_03"+"><p>I'm Quest 03</p></div>";
      });
      $('#rel_pos_13').transition('show');
      change_state = 0;
      break;
    case 4:
      $('#Quest4').append(function(){
        return "<div id="+"append_content_04"+"><p>I'm Quest 04</p></div>";
      });
      $('#rel_pos_14').transition('show');
      change_state = 0;
      break;
    default:
      //理論上不發生，所以reset
      change_state = 0;
      break;
  }

})

//按鈕依序顯示

$('#rel_pos_11').click(function(){
  quest_btn_pressed = (quest_btn_pressed + 1) % 5;
  switch(quest_btn_pressed){
    case 1:
      $('#rel_pos_00').transition('show');
      //其他不該出現的回應應該要消失掉
      $('#rel_pos_02').transition('hide');
      $('#rel_pos_03').transition('hide');
      $('#rel_pos_08').transition('hide');
      $('#rel_pos_09').transition('hide');
      break;
    case 2:
      $('#rel_pos_02').transition('show');
      //其他消失
      $('#rel_pos_00').transition('hide');
      $('#rel_pos_03').transition('hide');
      $('#rel_pos_08').transition('hide');
      $('#rel_pos_09').transition('hide');      
      break;
    case 3:
      $('#rel_pos_03').transition('show');
      $('#rel_pos_00').transition('hide');
      $('#rel_pos_02').transition('hide');
      $('#rel_pos_08').transition('hide');
      $('#rel_pos_09').transition('hide');
      break;
    case 4:
      $('#rel_pos_08').transition('show');
      $('#rel_pos_00').transition('hide');
      $('#rel_pos_02').transition('hide');
      $('#rel_pos_03').transition('hide');
      $('#rel_pos_09').transition('hide');
      break;
    case 0:
      $('#rel_pos_09').transition('show');
      $('#rel_pos_00').transition('hide');
      $('#rel_pos_02').transition('hide');
      $('#rel_pos_03').transition('hide');
      $('#rel_pos_08').transition('hide');
      break;
    default:
      //理論上這不應該發生，所以就reset計數器就好
      quest_btn_pressed = 0;
      break;
  }
});

$('#rel_pos_12').click(function(){

});

$('#rel_pos_13').click(function(){
  quest_btn_pressed = quest_btn_pressed + 1;
  switch(quest_btn_pressed){
    case 0:
      $('.ui.modal').modal('show');
      break;
    case 1:
      $('.ui.modal').modal('show');
      break;
    case 2:
      $('.ui.modal').modal('show');
      break;
    case 3:
      $('.ui.modal').modal('show');
      break;
    case 4:
      $('.ui.modal').modal('show');
      break;
    case 5:
      $('.ui.modal').modal('show');
      break;
    default:
      alert("很抱歉，頁面無法使用！！");
      break;
  }  

});

$('#rel_pos_14').click(function(){
  
});

$('#easter_egg_01_yes').click(function(){
  alert("你是個好小孩＝）");
});

$('#easter_egg_01_no').click(function(){
  
  $('#easter_appended').remove();
  easter_times = easter_times + 1;
  var string = "";
  switch(easter_times){
    case 1:
      string = "<p id="+"easter_appended"+">不要在堅持下去了！不會有彩蛋的！</p>";
      break;
    case 2:
      string = "<p id="+"easter_appended"+">就說了不會有彩蛋還試？想程式碼怎麼寫，css該怎麼擺已經夠煩了<br>還要想彩蛋，您覺得這可能嗎？</p>"
      break;
    case 3:
      string = "<p id="+"easter_appended"+">是不是以為多試幾次會找到彩蛋？</p>"
      break;
    case 4:
      string = "<p id="+"easter_appended"+">彩蛋這邊可能還要想一下，<a href="+"https://chenishi.000webhostapp.com/"+">我先放個之前做的網頁壓壓驚</a></p>"
      break;
    default:
      break;
  }
  $('#easter_egg_01').append(function(){
    return string;
  });  
});

//限制字體大小
$("*").each( function () {
  var $this = $(this);
  if (parseInt($this.css("fontSize")) < 12) {
    $this.css({ "font-size": "12px" });   
  }
  if (parseInt($this.css("fontSize")) > 60) {
    $this.css({ "font-size": "60px" });   
  }
});
