var Zimbio=Zimbio||{};Zimbio.ajaxNewsLetter=(function(){var a=function(d,e){if(d.error){if(d.error){switch(d.name){case"List_AlreadySubscribed":var c=$("#prompt-email-registration #newsletterSignup").attr("data-list-subscribed")||"You're already subscribed to this newsletter. Thanks again!";showNewsletterError(c);break;default:showNewsletterError(d.error);break}}Track.Click.syntheticGet("newsletterFail",true)}else{if(e){e()}else{b()}Track.Click.syntheticGet("newsletterSuccess",true)}},b=function(){$("#signUp").hide();$("#success").show()};subscribeUser=function(d,g,f,e){d.preventDefault();var c=$("#MERGE0").val();$.ajax({type:"GET",dataType:"json",url:"/tools/api",data:{method:"ui.tools.email_tools.views.mailchimp_signup",email:c,list_id:g||"",send_welcome:f&&1}}).done(function(h){a(h,e)}).fail(function(h){showNewsletterError("We encountered an error while trying to subscribe you to our newsletter. Please try again.")})},showNewsletterError=function(c){$("#newsletterError").text(c).show()};return{init:function(){$("#followBox").on("click",'input[type="submit"]',function(c){subscribeUser(c,false,1,false)})},subscribeUser:subscribeUser}})();$(document).ready(function(){Zimbio.ajaxNewsLetter.init()});