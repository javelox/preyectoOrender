function Mos() {
    swal({
            title: "Estás seguro que deseas salirte?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal({
                    title: "Finalizando sesión",
                    text: "Lo extrañaremos querido usuario",
                    icon: "success",

                });

                window.location.href = "http://localhost/Orender/Inicio.html";
                let x = document("http://localhost/Orender/Inicio.html").getElementById("cargar ");
                x.checked = true;


            } else {
                swal("Sabia elección querido usuario");
            }
        });
}