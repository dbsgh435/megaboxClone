$(function () {
    $(".ad-close").click(function() {
        $(".ad").hide()
    })

    

    // 팝업 자바스크립트로 구현해보기
    const modal = document.querySelector(".modal");
    const heart = document.querySelector(".movie-button");
    const search = document.querySelector(".search");
    

    //이벤트 랜덤으로 표시하기
    let ranNum = Math.ceil(Math.random()*7);
    let imgTag = "<img src=\"images/event1-" + ranNum + ".jpg\" alt=\"신규/휴먼 계정 이벤트\">"
    $("#campaign li:first-child").html(imgTag)
    


    function modalHandle(e) {
        e.preventDefault();
        const x = modal.querySelector(".popup>div>p:last-child");
        const ok = modal.querySelector(".popup button");
        const modalText = modal.querySelector(".modal-text")
        const searchInput = document.querySelector(".search-input");

        modal.style.display = "block";

        if (this.classList.contains("search") && searchInput.innerText == "") {
            modalText.innerText = "영화명을 입력해주세요."
        } else if (!searchInput.innerText == "") {
            console.log("영화명을 입력했어요...")
        } else {
            modalText.innerText = "로그인 후 이용가능한 서비스 입니다."
        }

        function closeHandle() {
            modal.style.display = "none";
        } 

        x.addEventListener("click", closeHandle);

        ok.addEventListener("click", closeHandle);
    }

    heart.addEventListener("click", modalHandle);
    search.addEventListener("click", modalHandle);


})