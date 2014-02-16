
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.getPlan = function(req,res) {
    res.json({
        "names":["唐敲敲","唐敲敲+1","唐敲敲+2","唐敲敲+3","唐敲敲+4"]
        ,"firstDay":["玩MH一整天","写个爬虫抓毛片","找妹子","使劲作死","傻笑"]
        ,"secondDay":["玩MH又一天","下毛片","把妹子","被发现","继续傻笑"]
        ,"thirdDay":["玩MH再一天","看毛片","表白","受死","继续傻笑"]
    });
}