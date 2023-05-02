//Window.innerHeight : 브라우저에서 실제로 표시되고 있는 영역의 높이 즉, 사용자가 보고 잇는 영역의 높이
//Window.scrolly : 스크롤이 세로로 얼마나 이동했는지를 px로 나타냄 0부터 시작해서 스크롤을 내릴 수록 증가
//document.body.offseetHeight : offsetHeight는 요소의 실제 높이 요소의 실제 높이 = 보이는 영역 + 가려진 영역
// 표시되는 영역 + 스크롤 값이 콘텐츠 전체 높이보다 크면 더이상 내려갈 곳이 없다는 뜻이다.! 따라서 그때마다 새로운 요소를 추가해주면 무한 스크롤을 구현할 수 있다.!



var count = 2;
window.onscroll = function () {
    console.log(window.innerHeight);
    console.log(window.scrollY);
    console.log(document.body.offsetHeight);
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 300) {

        var toAdd = document.createElement("div")
        toAdd.classList.add("box")
        toAdd.textContent = `${++count}번째 블록`
        document.querySelector('Section').appendChild(toAdd)
    }
}
