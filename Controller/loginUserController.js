"use strict";

$(document).ready(function () {
  $(document).on("click", "#btnIngresar", function (e) {
    e.preventDefault();
    var userName = $("#userName").val();
    var passw = $("#passw").val();
    console.log(!userName.trim());
    if (!userName.trim() || !passw.trim()) return;
    var user = {
      userName: userName,
      passw: passw,
    };
    console.log(user);
    $.ajax({
      type: "POST",
      url: "../Model/loginUserModel.php",
      data: user,
    })
      .done(function (result) {
        console.log("Retorno del server: ", result);
        var json = JSON.parse(result);
        console.log("Tamaño retorno convertido json: ", json.length);
        console.log("Datos en json: ", json);
        if (json.length) {
          Swal.fire({
            icon: "success",
            title: "INGRESO AL PROGRAMA",
            text: "Ha realizado el ingreso de forma exitosa",
          });
          //location.href("../index.html");
          //window.open("../index.html");
        } else {
          Swal.fire({
            icon: "error",
            title: "USUARIO NO REGISTRADO",
            text: "Por favor registrese en el sistema para poder ingresar.",
          });
        }
        $("#userName").val("");
        $("#passw").val("");
      })
      .fail(function (result) {
        Swal.fire({
          icon: "error",
          title: "NO SE PUEDE EJECUTAR LA OPERACION",
          text: "Recargue la pagina nuevamente.",
        });
      });
  });
});
