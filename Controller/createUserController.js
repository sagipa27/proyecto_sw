"use strict";

$(document).ready(function () {
  $(document).on("click", "#btnGuardar", function (e) {
    e.preventDefault();
    var documento = $("#documento").val();
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var perfil = $("#perfil").val();
    var passw = $("#passw").val();
    var sede = $("input:radio[name=btnradio]:checked").val();
    var birthDate = $("#birthDate").val();

    if (
      !documento.trim() ||
      !nombre.trim() ||
      !apellido.trim() ||
      !passw.trim() ||
      !birthDate.trim()
    )
      return;

    var user = {
      documento: documento,
      nombre: nombre,
      apellido: apellido,
      perfil: perfil,
      passw: passw,
      sede: sede,
      birthDate: birthDate,
    };
    console.log(user);
    $.ajax({
      type: "POST",
      url: "../Model/createUserModel.php",
      data: user,
    })
      .done(function (result) {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "DATOS GUARDADOS",
          text: "La informacion se almaceno en la DB",
        });
        $("#documento").val("");
        $("#nombre").val("");
        $("#apellido").val("");
        $("#passw").val("");
        $("#birthDate").val("");
      })
      .fail(function (result) {
        Swal.fire({
          icon: "error",
          title: "DATOS NO GUARDADOS",
          text: "La informacion no se pudo almacenar en la DB",
        });
      });
  });
});
