$(function () {
    $("#start_date").on("change",function () {
        var date = $(this).val();
        if(!validateDate(date)) {
            $(".alert-danger").html("日期输入有问题……").removeClass("hidden");
            $("#first").empty();
            $("#second").empty();
            $("#third").empty();
            return false;
        }
        $.post("/getPlan", {"date": date})
            .done(loadData).fail(function () {
                $(".alert-danger").html("出错啦！快去看看日志！").removeClass("hidden");
            });
    }).on("keypress", function (event) {
            var date = $(this).val();
            if(event.keyCode == 13) {
                if(!validateDate(date)) {
                    $(".alert-danger").html("日期输入有问题……").removeClass("hidden");
                    $("#first").empty();
                    $("#second").empty();
                    $("#third").empty();
                    return false;
                }
                $.post("/getPlan", {"date": date})
                    .done(loadData).fail(function () {
                        $(".alert-danger").html("出错啦！快去看看日志！").removeClass("hidden");
                    });
                return false;
            }
        });

    var validateDate = function(date) {
        var reg = new RegExp("^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$");
        return reg.test(date);
    };
    var loadData = function (data) {
        var results = eval(data);
        var names = results.names;
        var first = results.firstDay;
        var second = results.secondDay;
        var third = results.thirdDay;
        var firstBody = "";
        var secondBody = "";
        var thirdBody = "";
        //组装 table
        for (var i in names) {
            firstBody += "<tr class='tr_" + i + "'><td>" + names[i] + "</td><td>" + first[i] + "</td></tr>";
            secondBody += "<tr class='tr_" + i + "'><td>" + second[i] + "</td></tr>";
            thirdBody += "<tr class='tr_" + i + "'><td>" + third[i] + "</td></tr>";
        }
        $("#first").empty().append(firstBody);
        $("#second").empty().append(secondBody);
        $("#third").empty().append(thirdBody);

        $("tbody tr").on("mouseover", function () {
            var className = $(this).attr("class");
            $("." + className).addClass("active");
        });

        $("tbody tr").on("mouseout", function () {
            var className = $(this).attr("class").replace(" active", "");
            $("." + className).removeClass("active");
        });

        $(".alert-danger").addClass("hidden");
    };
});