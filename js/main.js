// 滚动事件开始
$(window).scroll(function(){
  HeaderInit();
});
function  HeaderInit(){
  if($(this).scrollTop()>0){
    $("body").addClass("fiexed-header-on");
  }else{
    $("body").removeClass("fiexed-header-on");
  }
}
HeaderInit();

// 首页事件
var images=["img/banner.jpg","img/bg-image-1.jpg","img/bg-image-2.jpg"];

$(".index").backstretch(images,{
  fade:750,
  duration:3000,
  preload:1,
  start:2
});


// 关于页面
if($("[data-animation-effect]").length>0){
  $("[data-animation-effect]").each(function (index,el) {
    var $this=$(this);
    var animationEffect=$this.attr["data-animation-effect"];
    setTimeout(function(){
      $this.removeClass("object-non-visiable").addClass('object-visiable');
      $this.addClass('animated '+animationEffect);
    },500);
   })
}

// 滚动监听
$('body').scrollspy({ target: '#my-navbar' })

// 平滑滚动
$('.navbar a').click(function(event){
  console.log(this.hash);
  var target=$(this.hash);
  $("html").animate({
    scrollTop:target.offset().top
  },1000);


})


//图集



$('.filter li a').click(function(){
  var filterValue=$(this).attr('data-filter');

  $(".isotope-container").isotope({
    filter:filterValue
  });
  $(this).parent().addClass('active').siblings().removeClass('active');
  return false;
})
