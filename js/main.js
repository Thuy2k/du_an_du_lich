$(document).ready(function () {
    $('.faq-header').click(function () {
        const body = $(this).next('.faq-body');
        const icon = $(this).find('.toggle-icon');

        body.slideToggle(200); // Hiệu ứng mở/đóng
        icon.text(icon.text() === '+' ? '−' : '+'); // Thay đổi biểu tượng
    });

    $(document).ready(function () {
        $('#sl-1').slick({
            slidesToShow: 3,  // Số lượng item hiển thị
            slidesToScroll: 3,  // Số lượng item trượt mỗi lần
            autoplay: false,  // Tự động chạy
            autoplaySpeed: 2000,  // Thời gian giữa các lần tự động
            dots: false,  // Hiển thị dấu chấm
            arrows: true,  // Hiển thị nút điều khiển
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,  // Hiển thị 2 item trên màn hình nhỏ
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,  // Hiển thị 1 item trên màn hình rất nhỏ
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
});

