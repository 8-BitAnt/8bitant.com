// Mouse Comet II script by kurt.grigg@virgin.net

colours = new Array('#ff0000', '#00ff00', '#ffffff', '#ff00ff', '#ffa500', '#ffff00', '#00ff00', '#ffffff', 'ff00ff')
n = 10;
y = 0;
x = 0;
n6 = (document.getElementById && !document.all);
ns = (document.layers);
ie = (document.all);
d = (ns || ie) ? 'document.' : 'document.getElementById("';
a = (ns || n6) ? '' : 'all.';
n6r = (n6) ? '")' : '';
s = (ns) ? '' : '.style';
if (ns) {
    for (i = 0; i < n; i++)
        document.write('<layer name="dots' + i + '" top=0 left=0 width=' + i / 2 + ' height=' + i / 2 + ' bgcolor=#ff0000></layer>');
}
if (ie)
    document.write('<div id="con" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
if (ie || n6) {
    for (i = 0; i < n; i++)
        document.write('<div id="dots' + i + '" style="position:absolute;top:0px;left:0px;width:' + i / 2 + 'px;height:' + i / 2 + 'px;background:#ff0000;font-size:' + i / 2 + '"></div>');
}
if (ie)
    document.write('</div></div>');
(ns || n6) ? window.captureEvents(Event.MOUSEMOVE) : 0;
function Mouse(evnt) {
    y = (ns || n6) ? evnt.pageY + 4 - window.pageYOffset : event.y + 4;
    x = (ns || n6) ? evnt.pageX + 1 : event.x + 1;
}
(ns) ? window.onMouseMove = Mouse : document.onmousemove = Mouse;
function animate() {
    o = (ns || n6) ? window.pageYOffset : 0;
    if (ie) con.style.top = document.body.scrollTop;
    for (i = 0; i < n; i++) {
        var temp1 = eval(d + a + "dots" + i + n6r + s);

        randcolours = colours[Math.floor(Math.random() * colours.length)];
        (ns) ? temp1.bgColor = randcolours : temp1.background = randcolours;
        if (i < n - 1) {
            var temp2 = eval(d + a + "dots" + (i + 1) + n6r + s);
            temp1.top = parseInt(temp2.top);
            temp1.left = parseInt(temp2.left);
        }
        else {
            temp1.top = y + o;
            temp1.left = x;
        }
    }
    setTimeout("animate()", 10);
}
animate();