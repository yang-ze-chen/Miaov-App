(function(win) {
        var docEl = win.document.documentElement;
        var time;

        function refreshRem() {
                var width = docEl.getBoundingClientRect().width;
                if (width > 768) { // 最大宽度
                        width = 768;
                }
                var rem = width / 375*50;
                docEl.style.fontSize = rem + 'px';
                ///rem用font-size:50px来进行换算

        }

        win.addEventListener('resize', function() {
                clearTimeout(time);
                time = setTimeout(refreshRem, 1);
        }, false);
        win.addEventListener('pageshow', function(e) {
                if (e.persisted) {
                        clearTimeout(time);
                        time = setTimeout(refreshRem, 1);
                }
        }, false);
        //当屏幕尺寸发生改变的时候  当页面重新加载的时候 都重新计算一下rem的值

        refreshRem();
})(window);

