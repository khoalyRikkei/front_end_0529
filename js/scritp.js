$(document).ready(function () {
  //   alert("Hello Jquery");

  $("#btn-1").click(() => {
    alert("I'm Jquery");
  });

  //   Làm việc với toggle
  const pElement = $("#result-1");

  $("#btn-toggle").click(() => {
    $("#result-1").toggle();
  });

  //   Ví dụ thêm về keydown
  $("#input-1").keydown(() => {
    // sử dụng để random màu sắc

    $("#result-2").css("color", "green");
  });

  //   Bắt sự kiện change

  $("#input-1").change(() => {
    // oninput trong js
    const value = $("#input-1").val();
    $("#input-2").val(value);
    console.log("change", value);
  });

  //   Bắt sự kiện blur

  $("#input-1").blur(() => {
    //onchange trong js
    const value = $("#input-1").val();
    console.log("blur", value);

    $("#result-2").append(value);
  });

  //   Toggle class

  $("#toggle-box").click(() => {
    $("#box").toggleClass("box");
  });

  $(window).scroll(() => {
    console.log("scroll");
  });

  //   Dùng hiệu ứng với Jquery

  $("#notify").hide();
  $("#btn-3").click(() => {
    $("#notify").show(2000, () => {
      $("#notify").fadeToggle(1000);
    });
    // $("#notify").hide(1000, () => {
    //   //   $("#notify").hide();
    // });

    $("#change-box").animate(
      {
        width: "200px",
        height: "200px",
        borderRadius: "8px",
      },
      1000
    );
  });
});

const btnElement = document.querySelector("#btn-2");
btnElement.addEventListener("click", () => {
  alert("I'm JavaScript");
});
