$(document).ready(function(){


    // $("button").click(function(){
    //     $('#4').insertBefore('#1');
    // });

    var vals

    $("#gen").click(function(){
        $('.list').empty();
        text = $('#txt_name').val();
        vals = text.split(",");
        build_arr(vals)
    });

    function build_arr(arr){
        var pre_text = '<div class="list-index" id="'
        var res = ""
        var i;
        for (i = 0; i < arr.length; i++) {
          res += pre_text + i + '">' + arr[i] +'</div>' ;
        }
        $( ".list" ).append(res);
        $('#txt_name').val("");
    }

    $("#sort").click(function(){
        Quicksort(vals)
        build_arr(vals)
    });

    function Quicksort(arr) {
        Quicksort_h(arr, 0, arr.length)
        return arr
    }

    function Quicksort_h(arr, start_ind, end_ind){
        if (start_ind > end_ind){
            return null
        }
        var piv_index = pivot(arr, start_ind, end_ind)
        Quicksort_h(arr, start_ind, piv_index - 1)
        Quicksort_h(arr, piv_index + 1, end_ind)
        
    }

    function pivot(arr, start_ind, end_ind){
        piv = arr[end_ind]
        piv_index = start_ind;
        var i = 0;
        for (i = start_ind; start_ind < end_ind; i++){
            if (arr[i] < piv){
                arr[i], arr[piv_index] =  arr[piv_index], arr[i]
                piv_index++
            }
        }
        return piv_index
    }





  });
