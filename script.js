document.addEventListener('DOMContentLoaded', function() {
    // ページロード完了時のアニメーション
    document.body.style.opacity = '1';

    // スクロールに応じたコンテンツの表示
    window.addEventListener('scroll', function() {
        // ここにスクロールに応じたアニメーション表示のロジックを追加
    });

    // ナビゲーションメニューのスムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
