$(function(){
    var clientH=$(window).height();
    var num=0;
    var flag=true;
    touch.on("body","swipeup","#fullpage",function(e){
        if(!flag){
            return;
        }
        num++;
        if(num>=$("section").length){
            num=$("section").length-1;
            return;
        }
        $("#fullpage").css({
            marginTop:-num*clientH
        })
        flag=false;
    })
    touch.on("body","swipedown","#fullpage",function(e){
        if(!flag){
            return;
        }
        num--;
        if(num<=-1){
            num=0;
            return;
        }
        $("#fullpage").css({
            marginTop:-num*clientH
        })
        flag=false;
    })
$("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
    flag=true;
});
    //鼠标滚轮换屏
    $("#fullpage").fullpage({
        'navigation': true,
    });
    var flag2=true;
    $(".flog").click(function(){
        if(flag2){
        $(".box01").css({
            transform:"translate(0,5px) rotate(45deg)"
        })
        $(".box02").css({
            transform:"translate(0,-5px) rotate(-45deg)"
        })
            $(".header1").css({
               display:"block"
            })
            flag2=false;
        }else{
            $(".box01").css({
                transform:"translate(0,0) rotate(0deg)"
            })
            $(".box02").css({
                transform:"translate(0,0) rotate(0deg)"
            })
            $(".header1").css({
                display:"none"
            })
            flag2=true;
        }

    });

    $("#fullpage")[0].addEventListener("webkitTransitionEnd", function () {
        flag = true;
        $(".section").each(function (index, obj) {

                if (index==num) {
                    $(obj).find(".img01").css({
                        marginLeft:80
                    }),
                    $(obj).find(".img02").css({
                        transform:"translate(-80px,0)",
                        transition:"transform 2s ease"

                    })
                } else {
                    $(obj).find(".img01").css({
                        marginLeft:0
                    }),
                        $(obj).find(".img02").css({
                            transform:"translate(0,0)",
                            transition:"transform 2s ease"
                        })
                }

        })
    })
})

