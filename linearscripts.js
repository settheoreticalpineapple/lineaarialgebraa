var interval = setInterval(function(){
    if (document.getElementsByTagName("body")[0] != undefined) {
        clearInterval(interval);
        document.getElementsByTagName("body")[0].onload = function() {
            var header = document.getElementsByTagName("header")[0];
            var main = document.getElementsByTagName("main")[0];
            var footer = document.getElementsByTagName("footer")[0];
            document.getElementById("nappula").onclick = function() {
                linear(0);
                setTimeout(function () {
                    linear(1);
                    setTimeout(function () {
                        linear(2);
                        setTimeout(function () {
                            linear(3);
                            setTimeout(function () {
                                if (document.getElementsByClassName("nappula").length == 0) {
                                    var uusiNappula = document.createElement("div");
                                    document.getElementsByTagName("body")[0].appendChild(uusiNappula);
                                    uusiNappula.className = "nappula";
                                    uusiNappula.appendChild(document.createTextNode("Klikkaa tästä sivu alkutilaansa."));
                                    var i = 0;
                                    var transparencyAnimation = setInterval(function() {
                                        if (i == 100) {
                                            clearInterval(transparencyAnimation);
                                        } else {
                                            i++;
                                            uusiNappula.style.opacity = i/100;
                                        }
                                    }, 5);
                                    uusiNappula.onclick = function() {
                                        linear(4);
                                        setTimeout(function() {
                                            var nappulat = document.getElementsByClassName("nappula");
                                            for (var j = 0; j < nappulat.length; j++) {
                                                nappulat[j].parentNode.removeChild(nappulat[j]);
                                            }
                                        }, 600);
                                    };
                                }
                            }, 2000);
                        }, 1500);
                    }, 1500);
                }, 1500);
            };
        };
    }
}, 10);

function linear(n) {
    var header = document.getElementsByTagName("header")[0];
    var main = document.getElementsByTagName("main")[0];
    var footer = document.getElementsByTagName("footer")[0];

    var matrix1, matrix2, matrix3;

    switch (n) {
        case 0:
            matrix1 = "matrix3d(0.574289, 0.0500208, 0, 0.000727227, 0.0466367, 1.44736, 0, -0.0000446906, 0, 0, 1, 0, -539, 31, 0, 1)";
            matrix2 = "matrix3d(0.476135, 0.00672114, 0, -0.000355769, 0.0286702, 1.11646, 0, 0.0000238737, 0, 0, 1, 0, 534, -141, 0, 1)";
            matrix3 = "matrix3d(-0.480489, 0.670327, 0, 0.000722299, -1.57046, 1.2913, 0, -0.00105632, 0, 0, 1, 0, -409, -410, 0, 1)";
            break;
        case 1:
            matrix1 = "matrix3d(5.90539, 0, 0, 0.00766467, 0, -0.730125, 0, -0.00301941, 0, 0, 1, 0, 0, 0, 0, 1)";
            matrix2 = "matrix3d(1.12632, -0.009375, 0, -0.0000223454, -0.982625, 2.32192, 0, -0.00291004, 0, 0, 1, 0, -90, 6, 0, 1)";
            matrix3 = "matrix3d(1.03103, -0.016746, 0, 0.0000237532, -0.056802, -1.17924, 0, 0.0000565403, 0, 0, 1, 0, 800, -705, 0, 1)";
            break;
        case 2:
            matrix1 = "matrix3d(0.928845, -0.0119642, 0, -0.000295867, -1.22992, 1.17144, 0, 0.0113753, 0, 0, 1, 0, -468, 49, 0, 1)";
            matrix2 = "matrix3d(0.157717, -0.261571, 0, -0.00046247, -1.03803, -0.0890968, 0, -0.00105294, 0, 0, 1, 0, 589, 254, 0, 1)";
            matrix3 = "matrix3d(-0.401522, 0.187939, 0, 0.00120433, 38.472, 5.01218, 0, 0.0558603, 0, 0, 1, 0, 110, -416, 0, 1)";
            break;
        case 3:
            matrix1 = "matrix3d(1.02315, 1.15011, 0, 0.00124793, 2.12462, -1.09096, 0, -0.00120902, 0, 0, 1, 0, 366.833, 806.533, 0, 1)";
            matrix2 = "matrix3d(-1.4022, -0.657362, 0, -0.00187673, -1.22674, -0.526927, 0, -0.00128589, 0, 0, 1, 0, 714, 391.9, 0, 1)";
            matrix3 = "matrix3d(-1.12203, 0.0720819, 0, -0.000453047, -9.88685, 19.9446, 0, -0.0352806, 0, 0, 1, 0, 831, -520.517, 0, 1)";
            break;
        case 4:
            matrix1 = "none";
            matrix2 = "none";
            matrix3 = "none";
            break;
    }

    header.style.transform = matrix1;
    main.style.transform = matrix2;
    footer.style.transform = matrix3;
}

function linear2() {
}