$(document).ready(function () {
    $("#demo2 .stars").click(function () {
        $.post("tools-ajaxrating", { rate: $(this).val() }, function (data) {
            if (data) {
                $("#success").html(data);
            } else {
                $("#success").html(data);
            }
        });
        $(this).attr("checked");
    });
});


 (function($,W,D)
    {
	var JQUERY4U = {};
    
	JQUERY4U.UTIL =
	{
	    setupFormValidation: function()
	    {
		//form validation rules
		$("#leave-a-review").validate({
		    rules: {
			name: {
			      required: true,
				  lettersonly: true
				  
			      },
			email: {
			      required: true,
				  email: true,
						emailExt: true
			      },
			comment: {
			      required: true,
				  minlength: 15
			      },
			rating: {
			      required: true
			      },
			      
		    },
		    messages: {
                   	name: {
                           required: "Enter your name",
			},
                   	email: {
                           required: "Enter your email",
			},
			 	comment: {
                           required: "Enter your review",
						   minlength: "Minimum 15 characters required"
			},
			rating: {
			     required: "Select your rating",
			      },
           	    },
		    
		    submitHandler: function(form) {
				var name = $("#name").val();
				var email = $("#email").val();
				var comment = $("#comment").val();
				var rating = $("input:radio[name=rating]:checked").val();
				var page_url = $("#page_url").val();
				var rating_check = $('input[name="rating"]:checked').length;
				var rating = $('input:radio[name=rating]:checked').val();
				var rating_check = $('input[name="rating"]:checked').length;
		
				var response=grecaptcha.getResponse();
				if (response.length==1) {
					$(':input[type="submit"]').prop('disabled', false);
					$(".captcha_error").show();
				}
				else {
					$(".captcha_error").hide();
					
					if(rating_check != '0') {
						$.ajax({
							
							type: "POST",
							url: "tools-ajaxcomments",
							data: { name: name, email: email, comment: comment, rating: rating, page_url: page_url },
							
										
							success: function (response, textStatus) {
								//alert(response.status);
								//return false;
								grecaptcha.reset();
								$(':input[type="submit"]').prop('disabled', false);
								if(response=='0'){
									$("#response").addClass("success-msg");
						$("#response").html("Thanks for your rating!");
						$("#error").hide();
						$(".comment_form")[0].reset();
						response.abort();
				 
								}

							}
						});
					}
					else {
						$(".error_rating").show();
						$(".error_rating").html("This field is required.");
					}
				}
		    }
		});
		
		
		
	    }
	}
    
	//when the dom has loaded setup form validation rules
	$(D).ready(function($) {
	    JQUERY4U.UTIL.setupFormValidation();
	});
	jQuery.validator.addMethod("emailExt", function(value, element, param) {
				return value.match(/^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/);
			},'You have entered an invalid email address');
	jQuery.validator.addMethod("lettersonly", function(value, element) 
{
return this.optional(element) || /^[a-z ]+$/i.test(value);
}, "Enter letters and spaces only");		
    })(jQuery, window, document);
	
	
$(document).ready(function () {
    var commentsCount = $("#comments-list").children(".mainlist").length;

    if (commentsCount > 5) {
        $("div.comment-pagination").jPages({
            containerID: "comments-list",
            perPage: 5,
            keyBrowse: true,
            scrollBrowse: false
        });
    } else {
        // If there are 5 or fewer comments, hide the pagination controls
        $("div.comment-pagination").hide();
    }
});

// Instagram Video Downloader Button
$(document).ready(function() {
    if ($('.mm_instagram_tool').length && window.toolsConfig.buttonText) {  // Check if we're on the correct page and buttonText exists
        $('.mm_instagram_tool button').after(
            '<a href="' + window.toolsConfig.baseurl + window.toolsConfig.buttonLink +
            '" class="styled-button mt-2">' + window.toolsConfig.buttonText + '</a>'
        );
    }
});
