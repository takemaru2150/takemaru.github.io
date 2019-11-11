$(document).ready(function () {
    $("#contactForm").submit(function (event) {

       var data = new FormData;
       data.append('entry.1884295714', $("#contactForm input[name=name]").val()); //name 氏名
        data.append('emailAddress', $("#contactForm input[name=email]").val()); //email メールアドレス
        data.append('entry.424023361', $("#contactForm textarea[name=message]").val()); //message メッセージ本文

        // var name = $("input#name").val();
        // var email = $("input#email").val();
        // var message = $("textarea#message").val();

        // var firstName = name; // For Success/Failure Message
        // // Check for white space in name for Success/Fail message
        // if (firstName.indexOf(' ') >= 0) {
        //   firstName = name.split(' ').slice(0, -1).join(' ');
        // }
        // $this = $("#sendMessageButton");
        // $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
        $.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLSedS96p_hDtD_h45EvnE7BVPNW0QUbjBLfvzdWVhOkEOvGXqw/formResponse",
            // data: {
            //     "entry.1884295714": name,
            //     "entry.emailAddress": email,
            //     "entry.424023361": message
            // },
            data: data,
            processData: false,
            contentType: false,
            type: "POST",
            dataType: "xml",
            cache: false,
            // success: function() {
            //     // Success message
            //     $('#success').html("<div class='alert alert-success'>");
            //     $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            //       .append("</button>");
            //     $('#success > .alert-success')
            //       .append("<strong>あなたのメッセージは送信されました。</strong>");
            //     $('#success > .alert-success')
            //       .append('</div>');
            //     //clear all fields
            //     $('#contactForm').trigger("reset");
            //   },
            //   error: function() {
            //     // Fail message
            //     $('#success').html("<div class='alert alert-danger'>");
            //     $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            //       .append("</button>");
            //     $('#success > .alert-danger').append($("<strong>").text(firstName + "様 申し訳ありませんが, メールサーバーが応答していないようです。後でもう一度やり直してください！"));
            //     $('#success > .alert-danger').append('</div>');
            //     //clear all fields
            //     $('#contactForm').trigger("reset");
            //   },
            //   complete: function() {
            //     setTimeout(function() {
            //       $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
            //     }, 1000);
            //   },

            statusCode: {
                0: function () {//送信に成功
                    // $("#googleform").slideUp();
                    // $('#success').slideDown();
                    $("#contact_after").html( "お問い合わせの送信に成功しました。");
                },
                200: function () {//送信に失敗
                    // $("#googleform").slideUp();
                    // $('#sorry').slideDown();
                    $("#contact_after").html( "お問い合わせの送信に失敗しました。");
                },
                400: function () {//送信に失敗
                    // $("#googleform").slideUp();
                    // $('#sorry').slideDown();
                    $("#contact_after").html( "お問い合わせの送信に失敗しました。");
                }
            }
        });
        event.preventDefault();
    });

});