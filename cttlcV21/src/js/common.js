// add header & footer

$('#header').load('../html/header.html');
$('#footer').load('../html/footer.html');

// breadCrumbs
let page = window.location.pathname.split('/')[4];
let hash = window.location.hash.split('#')[1];
let breadBase = '首頁';
switch (page) {
    case 'product.html':
        breadBase = '商品資訊';
        break;
}
$('.breadCrumbs').html('<a href="page">' + breadBase + '</a> > ' + hash);
