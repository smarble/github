$(document).ready(function() {

    //Modal 1
    $("#recipe1").animatedModal();

    //Modal 2
    $("#recipe2").animatedModal({
        modalTarget:'modal-02',
        animatedIn:'fadeIn',
        animatedOut:'bounceOutDown',
        color:'#A7226E',
    });

    //Modal 3
    $("#recipe3").animatedModal({
        modalTarget:'modal-03',
        animatedIn:'lightSpeedIn',
        animatedOut:'fadeOutRight',
        color:'#EC2049',
    });

    //Modal 4
    $("#recipe4").animatedModal({
        modalTarget:'modal-04',
        animatedIn:'bounceInLeft',
        animatedOut:'bounceOutUp',
        color:'#F26B38',
    });

    //Modal 5
    $("#recipe5").animatedModal({
        modalTarget:'modal-05',
        animatedIn:'lightSpeedIn',
        animatedOut:'slideOutRight',
        color:'#F7DB4F',
    });

    //Modal 6
    $("#recipe6").animatedModal({
        modalTarget:'modal-06',
        animatedIn:'slideInLeft',
        animatedOut:'fadeOutLeft',
        color:'#2F9f99',
    });

    //Modal 7
    $("#recipe7").animatedModal({
        modalTarget:'modal-07',
        animatedIn:'slideInDown',
        animatedOut:'slideOutDown',
        color:'#A7226E',
    });

    $(document).on('click', '.add', function(){ 

        $.modal.close(); ;
        return true;
    });
});