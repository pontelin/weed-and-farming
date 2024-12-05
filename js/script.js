document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.getElementById('menu');

    // ハンバーガーメニューのクリックイベント
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('show');
        });
    }

    // 画面サイズ変更時のリセット処理
    window.addEventListener('resize', () => {
        if (window.innerWidth > 780) { 
            menu.classList.remove('show'); // PCサイズ時にメニューをリセット
        }
    });
});


//クリックした時に、説明を表示する//
document.addEventListener("DOMContentLoaded", function () {
    const weeds = document.querySelectorAll(".weed img");
    const modal = document.createElement("div");
    const overlay = document.createElement("div");

    modal.classList.add("modal");
    overlay.classList.add("modal-overlay");

    document.body.appendChild(modal);
    document.body.appendChild(overlay);

    weeds.forEach(weed => {
        weed.addEventListener("click", () => {
            modal.innerHTML = `
                <span class="close-button">&times;</span>
                <img src="${weed.src}" alt="${weed.alt}" class="modal-image">
                <p>${weed.alt}</p>
            `;
            modal.style.display = "block";
            overlay.style.display = "block";

            modal.querySelector(".close-button").addEventListener("click", closeModal);
            overlay.addEventListener("click", closeModal);
        });
    });

    function closeModal() {
        modal.style.display = "none";
        overlay.style.display = "none";
    }
});
