$(document).ready(function () {

    // click 11
    $('#undici').click(function () {

        $.get("../libri.json", function (data, status) {
            console.log(data);
            console.log(status);
        });

    });

    //click 12
    $('#dodici').click(function () {

        $.ajax(
            {
                async: true,
                type: "GET",
                url: "../persone.json",
                success: function (result) {
                    console.log(result);
                },
                error: function(xhr,status,error) {
                    console.log(xhr);
                    console.log(status);
                    console.log(error);
                }
            }
        );

    });
});
