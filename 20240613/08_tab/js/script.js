$(function(){
    //#tab1以外を非表示にする
    $('#contents div[id != "tab1"]').hide();

    //タブをクリック
    $("a").click(function(){
        //一度全てのコンテンツを非表示にする
        $("#contents div").hide();

        $($(this).attr("href")).show();

        $(".current").removeClass("current");

        $(this).addClass("current");

        return false;
    });
});

