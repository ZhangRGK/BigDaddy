$(function () {
    $("#start_date").on("change",function () {
        var date = $(this).val();
        if (!validateDate(date)) {
            $(".alert-danger").html("日期输入有问题……").removeClass("hidden");
            $("#content").empty();
            return false;
        }
        $.post("/loadPlan", {"date": date})
            .done(loadPlan).fail(function () {
                $(".alert-danger").html("出错啦！快去看看日志！").removeClass("hidden");
            });
        return false;
    }).on("keypress", function (event) {
            var date = $(this).val();
            if (event.keyCode == 13) {
                if (!validateDate(date)) {
                    $(".alert-danger").html("日期输入有问题……").removeClass("hidden");
                    $("#content").empty();
                    return false;
                }
                $.post("/loadPlan", {"date": date})
                    .done(loadPlan).fail(function () {
                        $(".alert-danger").html("出错啦！快去看看日志！").removeClass("hidden");
                    });
            }
            return false;
        });

    var validateDate = function (date) {
        var reg = new RegExp("^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$");
        return reg.test(date);
    };
    var loadPlan = function (data) {
        var date = new Date($("#start_date").val());
        var yearAndMonth = (1900+date.getYear()) + "-" + (date.getMonth()+1) + "-";
        $(".firstDay").html(yearAndMonth+date.getDate());
        $(".secondDay").html(yearAndMonth+(date.getDate()+1));
        $(".thirdDay").html(yearAndMonth+(date.getDate()+2));
        $(".fourthDay").html(yearAndMonth+(date.getDate()+3));
        $(".fifthDay").html(yearAndMonth+(date.getDate()+4));
        $(".sixthDay").html(yearAndMonth+(date.getDate()+5));
        $(".seventhDay").html(yearAndMonth+(date.getDate()+6));

        var results = eval(data);
        var content = "";
        for (var i in results) {
            var record = results[i];
            content += "<tr><td>" + record.name + "</td><td>" + record.firstDay + "</td><td class='visible-sm visible-md visible-lg'>" + record.secondDay + "</td><td class='visible-sm visible-md visible-lg'>" + record.thirdDay + "</td><td class='visible-md visible-lg'>" + record.fourthDay + "</td><td class='visible-md visible-lg'>" + record.fifthDay + "</td><td class='visible-lg'>" + record.sixthDay + "</td><td class='visible-lg'>" + record.seventhDay + "</td></tr>";
        }
        $("#content").empty().append(content);
        $(".alert-danger").addClass("hidden");
    };
});
