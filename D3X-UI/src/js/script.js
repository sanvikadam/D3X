$(document).ready(function(){
    var counter = 1;

    $("body").on("click", '#addrow', function () {
        var newRow = $("<tr>");
        var cols = "";

        cols += '<td><input type="text" class="form-control" name="sku' + counter + '"/></td>'
        cols += '<td><input type="text" class="form-control" name="name' + counter + '"/></td>';
        cols += '<td><input type="text" class="form-control" name="quantity' + counter + '"/></td>';
        cols += '<td><input type="text" class="form-control" name="price' +counter+ '"/></td>';
        cols += '<td><a href="#" class="btn btn-danger btn-icon-split ibtnDel">'+
                '<span class="icon text-white-50"><i class="fas fa-trash"></i></span>'+
                '</a></td>';
        newRow.append(cols);
        $("table.line-items").append(newRow);
        if(counter == 9) {
            $("#addrow").addClass('disabled').attr('disabled', true);
        }
        counter++;
    });

    $("body").on("click", "table.line-items .ibtnDel", function (event) {
        event.preventDefault();
        $(this).closest("tr").remove();
        counter -= 1
         if(counter <= 9) {
             $("#addrow").removeClass('disabled').attr('disabled', false);
         }
    });
})