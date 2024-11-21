

$(document).ready(function () {
    $('.btn-ingresar').on('click', function () {
        const curso = $(this).data('curso');
        window.location.href = `curso.html?curso=${encodeURIComponent(curso)}`;
    });
});
