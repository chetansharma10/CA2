$(document).ready(function(){

    $("#leftBtn").click(function(){
        $(".div1").hide("slow")
        $(".div2").show("slow")
    });
    $("#rightBtn").click(function(){
        $(".div2").hide("slow")
        $(".div1").show("slow")
    });
})