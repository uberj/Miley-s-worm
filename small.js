var Tynt=Tynt||[];
function WAU_small(b){
    var a="";
    if(document.title){
        a=encodeURIComponent(document.title.substr(0,80).replace(/(\?=)|(\/)/g,""))
    }
    var c=document.getElementsByTagName("script")[0];
    (
        function(){
            var d=document.createElement("script");
            d.async="async";
            d.type="text/javascript";
            d.src="http://whos.amung.us/pingjs/?k="+b+"&t="+a+"&c=s&r="+Math.ceil(Math.random()*999999);
            c.parentNode.insertBefore(d,c)
        }
    )();
    if(document.location.protocol=="http:"){
        Tynt.push("w!"+b);
        (
            function(){
                var d=document.createElement("script");
                d.async="async";
                d.type="text/javascript";
                d.src="http://cdn.tynt.com/tc.js";
                c.parentNode.insertBefore(d,c)
            })()
    }
}
function WAU_r_s(c,key){
    var raw_im_data="data:image/gif;base64,R0lGODlhUAAXAMQAAM1iTdBuWMQ4MsdHOt+ch/js5+/Qw+vCs/Pe1dR6Y+OolNuQespVQ9eFbsAnLX9/fzAwL////zU1NQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAABQABcAAAX/ICSOZGmeaKqu7Bi9L3IcBWzfeK7vfI+LMAPAQXQEEBGJcslsOp/QqFQaAUYMAiIjMnAIDMmpeEweVyGRQtcxIByy7Fd5Ti+fIwTiABYoKsJ1gYJMd30OeIhDRoCDjXR3igAEEQAChgCMjppihUULL3CLm6OcQHlEEQ0JEX6ZpK9Ld2qofZRxrrCvd1dZrA4AlWC5w7FWEQgJRQ4JSMTOuzAFMzU+1dbX1i3a29zdJhIwSkk24OGAOOU56eJyYw8S73ax7bGE54y45fP1YvFzYXIy4btH6Mm4feKYPIi3kCE8eAuXRHRy8OA6duzQkUuYMSMghyAfhnzYpF1FKPjsNPEDyI8jyXchYSqB2ZBiPYs2W+rjyNIlOIkzX4oU6s9gwB4lN4ZzaW5pmIkxhUIs6uzRsBAAOw==";
    var raw_im_meta="({'0':[0,-15,5,8], '1':[-5,-15,3,8], '2':[-8,-15,5,8], '3':[-13,-15,5,8], '4':[-18,-15,5,8], '5':[-23,-15,5,8], '6':[-28,-15,5,8],'7':[-33,-15,5,8], '8':[-38,-15,5,8], '9':[-43,-15,5,8], ',':[-48,-15,2,8], 'o':[-50,-15,24,8]})";
    var meta=eval(raw_im_meta);
    if(WAU_legacy_b()){
        raw_im_data="http://widgets.amung.us/widtemplates/smalloutline.gif"}c+="o";c=c.split("");
        var img=document.createElement("img");
        img.onload=function(){
                        var wid=document.createElement("div");
                        wid.style.position="relative";
                        wid.style.display="inline-block";
                        wid.style.backgroundImage="url("+raw_im_data+")";
                        wid.style.width="80px";
                        wid.style.height="15px";
                        wid.style.overflow="hidden";
                        wid.style.cursor="pointer";
                        wid.title="Click to see stats for this site by whos.amung.us ("+key+")";
                        var x_pos=20;
                        if(c.length>6&&c[0]!="1"){
                            x_pos=16
                        }else{
                            if(c.length>6&&c[0]=="1"){
                                x_pos=17}
                            }for(var i=0;i<c.length;i++){
                                var char_meta=meta[c[i]];
                                var character=document.createElement("div");
                                character.style.backgroundImage="url("+raw_im_data+")";
                                character.style.backgroundRepeat="no-repeat";
                                character.style.backgroundAttachment="scroll";
                                character.style.backgroundPosition=char_meta[0]+"px "+char_meta[1]+"px";
                                character.style.position="absolute";
                                character.style.width=char_meta[2]+"px";
                                character.style.height=char_meta[3]+"px";
                                character.style.top="4px";
                                character.style.left=x_pos+"px";
                                character.style.lineHeight=char_meta[3]+"px";
                                character.style.overflow="hidden";
                                wid.appendChild(character);
                                x_pos+=char_meta[2]+1}wid.onclick=function(){
                                                                    window.location="http://whos.amung.us/stats/"+key+"/"
                                                                };
                            WAU_insert(wid,"amung.us/small.js")
                    };
        img.src=raw_im_data
}
function WAU_insert(c,d){
    var a=document.getElementsByTagName("script");
    for(var b=0;b<a.length;b++){
        if(a[b].src.indexOf(d)>0){
            a[b].parentNode.insertBefore(c,a[b].nextSibling)
        }
    }
}
function WAU_legacy_b(){
    if(navigator.appVersion.indexOf("MSIE")!=-1&&parseFloat(navigator.appVersion.split("MSIE")[1])<8){
        return true
    }
    return false
};
