$(function(){
    $("#show-tel").on("click", function ()
    {
        var $this= $(this);
        $this.find("span").text($this.data("telephone"));


    });
    
    $("#toggledetails").on("click", function(){
        var details = $ ("#prop-details");
        
        details.toggleClass("open");
        if(details.hasClass("open"))
        {
            $(this).text("Show Less");
        } 
        else 
        {
            $(this).text("Show More");
        }

    });
    
    $("#send-message-to-agent").on("click", function () {
        var agent_id = $("#agent_id").val(),
            first_name= $("#message-first-name").val(),
            last_name=$("#message-last-name").val(),
            email = $("#message-email").val(),
            message=$("#message-text").val();

        $.ajax({
            url: "/agent/contact",
            method: "POST",
            dataType: "json",
            data: {
              agent_id: agent_id,
              first_name: first_name,
              email: email,
              last_name: last_name,
              message: message 
            },
            success: function(data){
                console.log(data);
            }
        });
    });

    $('#contact-modal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var modal = $(this);

    });
    
});