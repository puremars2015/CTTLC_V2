// add header & footer

$('#header').load('../html/header.html');
$('#footer').load('../html/footer.html');

// breadCrumbs
let page = window.location.pathname.split('/')[2];
let hash = window.location.hash.split('#')[1];
let breadBase = '首頁';
let url = '<a href="home.html">' + breadBase + '</a>';
switch (page.toLowerCase()) {
    case 'material.html':
        hash = '矽晶圓材料';
        url = url + '> <a href="agenda.html">產品與服務</a>' + '> <a href="' + page + '">' + hash + '</a>';
        break;
    case 'service.html':
        hash = '功率元件與模塊設計服務';
        url = url + '> <a href="agenda.html">產品與服務</a>' + '> <a href="' + page + '">' + hash + '</a>';
        break;
    case 'agenda.html':
        hash = '產品與服務';
        url = url + '> <a href="' + page + '">' + hash + '</a>';
        break;
    case 'timeline.html':
        hash = '發展歷程';
        url = url + '> <a href="' + page + '">' + hash + '</a>';
        break;
    case 'companyintroduction.html':
        hash = '公司簡介';
        url = url + '> <a href="' + page + '">' + hash + '</a>';
        break;
    case 'contact.html':
        hash = '聯繫我們';
        url = url + '> <a href="' + page + '">' + hash + '</a>';
        break;
    case 'home.html':
        break;
}
$('.breadCrumbs').html(url);

