
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.loadPlan = function(req,res) {
    res.json([{
        "name":"唐超",
        "firstDay":"喵喵喵",
        "secondDay":"汪汪汪",
        "thirdDay":"吱吱吱",
        "fourthDay":"咕咕咕",
        "fifthDay":"嘤嘤嘤",
        "sixthDay":"嗡嗡嗡",
        "seventhDay":"咚咚咚"
    },{
        "name":"唐超+1",
        "firstDay":"喵喵喵+1",
        "secondDay":"汪汪汪+1",
        "thirdDay":"吱吱吱+1",
        "fourthDay":"咕咕咕+1",
        "fifthDay":"嘤嘤嘤+1",
        "sixthDay":"嗡嗡嗡+1",
        "seventhDay":"咚咚咚+1"
    },{
        "name":"唐超+2",
        "firstDay":"喵喵喵+2",
        "secondDay":"汪汪汪+2",
        "thirdDay":"吱吱吱+2",
        "fourthDay":"咕咕咕+2",
        "fifthDay":"嘤嘤嘤+2",
        "sixthDay":"嗡嗡嗡+2",
        "seventhDay":"咚咚咚+2"
    }]);
};