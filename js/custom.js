$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
        return false;
      }
    }
  });
});

$(function () {
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("body, main").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
    oldObjChild = $(".active > a"); //gets active nav-item child nav-link
    oldObj = $(".active"); //gets the active nav-item
    oldObj.removeClass("active"); //remove active from old nav-item
    oldObjChild.css("background-color", "transparent"); //clear old active nav-item and nav-link style for bg color
    $(this).parent().addClass("active"); //set the active class on the nav-item that called the function
    $(this).css("background-color", "#666;"); //set active clas background to red
  });
});

/* SMTPJS */

function sendEmail() {
  var name = document.getElementById("name").value;
  var country = document.getElementById("countries").value;
  /* console.log(country.value); */
  var email = document.getElementById("email").value;
  var WhatsApp = document.getElementById("WhatsApp").value;
  var phone = document.getElementById("phone").value;
  var subject = document.getElementById("subject").value;
  var teacher = document.getElementById("teacher").value;
  var message = document.getElementById("message").value;

  Email.send({
    Host: "smtp.gmail.com",
    Username: "nebrass.academy@gmail.com",
    Password: "Nebrass.Academy2021ASDFG",
    To: "nebrass.academy@gmail.com",
    From: "nebrass.academy@gmail.com",
    Subject: subject,
    Body: ` Name: ${name} <br>
                Country: ${country} <br>
                E-mail: ${email} <br>
                WhatsApp number: ${WhatsApp} <br>
                Phone number: ${phone} <br>
                Subject: ${subject} <br> 
                Teacher Name: ${teacher} <br>
                Message: ${message} `,
  }).then((message) => alert("Thank You, Your Mail sent successfully"));
}

function sendReachus() {
  var know = document.getElementById("know-us").value;
  var comment = document.getElementById("comment").value;

  Email.send({
    Host: "smtp.gmail.com",
    Username: "nebrass.academy@gmail.com",
    Password: "Nebrass.Academy2021ASDFG",
    To: "nebrass.academy@gmail.com",
    From: "nebrass.academy@gmail.com",
    Subject: "Reach Us",
    Body: ` know: ${know} <br>
                comment: ${comment} <br> `,
  }).then((message) => alert("Thank You, Your Help sent successfully"));
}
