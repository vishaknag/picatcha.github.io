/// <reference path="jquery-2.1.4.js" />
var $thme, $settings, $comments;
var $authPopup = function () {
    var w = 475;
    var h = 450;
    var left = ($(window).width() / 2) - (w / 2),
    top = ($(window).height() / 2) - (h / 2);
    window.open("/auth/login", "thmewindow", "resizable,scrollbars,status, width=" + w + ", height=" + h + " top=" + top + ", left=" + left);
};

$(document).ready(function () {
    // #region settings

    var updateCounter = function UpdateCounter() {
        var c = $(".thme-count");
        var cVal = parseInt(c.html()) + 1;
        c.html(cVal);
    }
    $thme = $("#thme-comments");

    // #endregion
    // #region Default Load

    $.ajax({
        cache: false,
        url: '/discussions/get',
        type: 'POST',
        data: JSON.stringify({
            url: $url,
            site: $site,
        }),
        contentType: 'application/json; charset=utf-8'
    }).success(function (data) {
        $thme.html(data);
        $settings = JSON.parse($("#settings").html());
        $thme.find(".thme-count").html($settings.PostCount)
        $comments = $("#comments");

    });

    // #endregion
    // #region events

    $thme.on("click", ".reply-btn", function (event) {
        event.preventDefault()
        var $reply = $(this);
        $reply.toggleClass("thme-b");
        $reply.closest(".reply-wrapper")
            .find(".reply")
            .toggleClass("hidden")
            .focus();
    });
    $thme.on("click", "#login", function (e) {
        $authPopup();
    });
    $thme.on("click", "#logout", function (e) {
        $.ajax({
            cache: false,
            url: '/auth/logout',
            type: 'POST',
            contentType: 'application/json; charset=utf-8'
        }).done(function (data) {
            window.location.reload(true);
        });
    });
    $thme.on("click", "#flag a", function (event) {
        event.preventDefault();
        var $flag = $(this);
        var $flagVal = $flag.data("flag")
        var $media = $flag.closest(".media");
        $.ajax({
            cache: false,
            url: '/discussions/flag',
            type: 'POST',
            data: JSON.stringify({
                config: $settings,
                flag: $flagVal,
                slug: $media.data("slug")
            }),
            contentType: 'application/json; charset=utf-8'
        }).success(function (data) {
            //$comments.html(data);
        });
    });
    $thme.on("click", "#sortby a", function () {
        var $sortedBy = $(this).html();
        $("#btn-loadmore").data("skip", 0);
        //set text
        $("#sorted").html($sortedBy);
        $(".loading").toggleClass("hide");
        $.ajax({
            cache: false,
            url: '/discussions/comments',
            type: 'POST',
            data: JSON.stringify({
                config: $settings,
                sortedBy: $sortedBy,
                skip: 0
            }),
            contentType: 'application/json; charset=utf-8'
        }).success(function (data) {
            $(".loading").toggleClass("hide");
            $("#btn-loadmore").data("skip", 0);
            $comments.html(data);
        });
    });

    $thme.on("click", "#btn-loadmore", function (event) {
        event.preventDefault();
        var $sortedBy = $("#sorted").html();
        var $skip = $(this);
        var $skipVal = $skip.data("skip");
        var $btn = $(this).button('loading');

        $.ajax({
            cache: false,
            url: '/discussions/comments',
            type: 'POST',
            data: JSON.stringify({
                config: $settings,
                sortedBy: $sortedBy,
                skip: $skipVal + 1
            }),
            contentType: 'application/json; charset=utf-8'
        }).done(function (data) {
            $comments.append(data);
            $skip.data("skip", $skipVal + 1);
            $btn.button('reset');
        });
    });
    $thme.on("click", ".reply-comment", function (event) {
        event.preventDefault()
        var $reply = $(this);
        var $media = $reply.closest(".media");
        var $slug = $media.data("slug");
        var $depth = $media.data("depth");
        var $replyId = $media.data("id");
        var $textarea = $reply.closest(".reply-wrapper").find(".textarea");
        var $alertMessage = $(this).prev(".alert");
        var $btn = $(this).button('loading');

        var $comment = {
            Body: $textarea.val(),
            ConfigId: $settings.Id,
            Slug: $slug,
            ParentId: $replyId,
            Depth: $depth + 1
        };

        $.ajax({
            url: '/discussions/post',
            type: 'POST',
            data: JSON.stringify({
                config: $settings,
                comment: $comment,
                isReply: true
            }),
            contentType: 'application/json; charset=utf-8'
        }).success(function (data) {
            if (data.IsValid) {
                $textarea.val("");
                $alertMessage.addClass("hide");
                $media.find(".reply").toggleClass("hidden");
                $media.after(data.View);
                $btn.button("reset");
                updateCounter();
            }
            else {
                $alertMessage.find(".message").html(data.ErrorMessage)
                $alertMessage.removeClass("hide");
                $btn.button("reset");
            }
        });


    });
    $thme.on("click", "#btn-post", function (event) {
        event.preventDefault();
        //var $button = $(this).button('loading');
        var $alertMessage = $(this).prev(".alert");
        var $textarea = $("#post");
        var $btn = $(this).button('loading');

        var $comment = {
            Body: $textarea.val(),
            ConfigId: $settings.Id
        };

        $.ajax({
            url: '/discussions/post',
            type: 'POST',
            data: JSON.stringify({
                config: $settings,
                comment: $comment
            }),
            contentType: 'application/json; charset=utf-8'
        }).success(function (data) {
            if (data.IsValid) {
                $alertMessage.addClass("hide");
                $textarea.val("");
                $comments.prepend(data.View);
                $btn.button("reset");
                updateCounter();
            }
            else {
                $alertMessage.find(".message").html(data.ErrorMessage)
                $alertMessage.removeClass("hide");
                $btn.button("reset");
            }
        });
    });
    // #endregion
});