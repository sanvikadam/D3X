$(document).ready(function(){
    var counter = 1;

    $("#addrow").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

        cols += '<td><input type="text" class="form-control" name="sku' + counter + '"/></td>'
        cols += '<td><input type="text" class="form-control" name="name' + counter + '"/></td>';
        cols += '<td><input type="text" class="form-control" name="quantity' + counter + '"/></td>';
        cols += '<td class="input-group"><span class="input-group-addon">$</span><input type="text" class="form-control" value="0" name="price' +counter+ '"/></td>';
        cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list").append(newRow);
        if(counter == 9) {
            $("#addrow").addClass('disabled').attr('disabled', true);
        }
        counter++;
    });

    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();
        counter -= 1
         if(counter <= 9) {
             $("#addrow").removeClass('disabled').attr('disabled', false);
         }
    });
})