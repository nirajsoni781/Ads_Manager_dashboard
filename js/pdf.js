
$("#pdf").on("click", function () {
    $("#tablee").tableHTMLExport({
        type: 'pdf',
        filename: 'sample.pdf'
    });
});