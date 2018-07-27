window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    liff.openWindow({url: 'line://ti/p/@mwr2507g'});
}
