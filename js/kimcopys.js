var act = 0;

$(document).ready(function () {
    carregando()
    const urlParams = new URLSearchParams(window.location.search);
    const products = urlParams.get("item")
    if (urlParams.size > 0) {
        if (products != '') {
            $.ajax({
                url: "./config/system.php",
                type: "POST",
                data: {
                    action: 'openDetail', detail: products
                },
                success: (result) => {
                    createDetail(result)
                }
            })
        } else {
            window.location.replace("index.html");
        }
    }
    conChk()
})

function cpainelThis() {
    $.ajax({
        url: "./config/system.php",
        type: "POST",
        data: {
            action: 'chkTrust'
        },
        success: (result) => {
            var eResult = JSON.parse(result)
            for (i = 0; i < eResult.length; i++) {
                $('#x' + i).html(eResult[i])
            }

        }
    })
}

function conChk() {
    $.ajax({
        url: "./config/system.php",
        type: "POST",
        data: {
            action: 't404'
        },
        success: (result) => {
            var eResult = JSON.parse(result)
            if (eResult == true) {
                $('#userIn').attr('href', 'sair.html')
                $('#userIn').html('Sair')
                $('.links').append('<a href="cpainel.html">Painel</a>')
            }
        }
    })
}

$('#userIn').on('click', function (e) {
    e.preventDefault();
    if ($('#userIn').attr('href') == 'login.html') {
        window.location.href = "login.html";
    } else {
        $.ajax({
            url: "./config/system.php",
            type: "POST",
            data: {
                action: 'logout'
            },
            success: (result) => {
                window.location.href = "index.html";
            }
        })
    }
})

function carregando() {
    $('#backLoad').toggleClass('some')
}

function createDetail(item) {
    var eResult = JSON.parse(item)
    $('.col2').html(eResult[0])
    $('#af1').attr('src', eResult[1])
    $('#af2').attr('src', eResult[2])
    $('#af3').attr('src', eResult[3])
    $('#af4').attr('src', eResult[4])
    $('#af5').attr('src', eResult[5])
    $('#coverThis').attr('src', eResult[1])
}

setInterval(function () {
    if (act < 2) {
        act = act + 1
        slides(act)
    } else {
        act = 0
        slides(act)
    }
}, 15000)

alterar = [
    {
        "id": "Curriculo",
        "imagem": "./img/CurriculumOnline.png",
        "texto": "Crie seu currículo online, e tenha sempre que precisar, salve e envie em formato PDF!"
    },
    {
        "id": "LC",
        "imagem": "./img/ListadeCompras.png",
        "texto": "Lista de Compras no celular sem caderninhos, saiba o valor da compra antes de chegar no Caixa"
    },
    {
        "id": "OS",
        "imagem": "./img/OS.png",
        "texto": "Crie seus orçamentos e ordem de serviço online, envie para seu cliente em PDF e com sua chave PIX para pagamento"
    }
]

function slides(slide) {
    var btn = '<button onclick="visitar(\'' + alterar[slide]['id'] + '\')">Eu Quero</button>'
    var text = '<h2>' + alterar[slide]['texto'] + '</h2>'
    var div = text + btn
    $('.slide img').attr('src', alterar[slide]['imagem'])
    $('.slide span').html(div)
}

function backSlide(slide) {
    if (act <= 2 && act > 0) {
        act = act - slide
        slides(act)
    }
}

function nextSlide(slide) {
    if (act >= 0 && act < 2) {
        act = act + slide
        slides(act)
    }
}

function visitar(detail) {
    var win = window.open("detalhes.html?item=" + detail, '_blank');
    win.focus();
}

$('#f1').on('click', function () {
    var inCli = ($('#f1').attr('src'))
    $('#dim').attr('src', inCli)
    $('.fDetal').toggleClass('some')
})

$('#f2').on('click', function () {
    var inCli = ($('#f2').attr('src'))
    $('#dim').attr('src', inCli)
    $('.fDetal').toggleClass('some')
})

$('#f3').on('click', function () {
    var inCli = ($('#f3').attr('src'))
    $('#dim').attr('src', inCli)
    $('.fDetal').toggleClass('some')
})

$('#dim').on('click', function () {
    $('.fDetal').toggleClass('some')
})

$('#btnClose').on('click', function () {
    $('.detalhes').toggleClass('some')
    $('#btnBuy').remove();
    $('#btnChat').remove();
})

//Cur

function next(page) {
    var next = page + 1
    var back = page - 1
    if (page == 1) {
        $('#p1').addClass('some')
        $('#p2').removeClass('some')
        var butOns = '<button onclick="back(' + back + ')">Voltar</button><button onclick="next(' + next + ')">Próximo</button>'
        $('.butons').html(butOns)
    } else if (page == 2) {
        $('#p2').addClass('some')
        $('#p3').removeClass('some')
        var butOns = '<button onclick="back(' + back + ')">Voltar</button><button onclick="next(' + next + ')">Próximo</button>'
        $('.butons').html(butOns)
    } else if (page == 3) {
        $('#p3').addClass('some')
        $('#p4').removeClass('some')
        var butOns = '<button onclick="back(' + back + ')">Voltar</button><button onclick="saveCur()">Salvar</button>'
        $('.butons').html(butOns)
    }
}

function back(page) {
    var next = page + 1
    var back = page - 1
    if (page == 0) {
        $('#p2').addClass('some')
        $('#p1').removeClass('some')
        var butOns = '<button onclick="next(' + next + ')">Próximo</button>'
        $('.butons').html(butOns)
    } else if (page == 1) {
        $('#p3').addClass('some')
        $('#p2').removeClass('some')
        var butOns = '<button onclick="back(' + back + ')">Voltar</button><button onclick="next(' + next + ')">Próximo</button>'
        $('.butons').html(butOns)
    } else if (page == 2) {
        $('#p4').addClass('some')
        $('#p3').removeClass('some')
        var butOns = '<button onclick="back(' + back + ')">Voltar</button><button onclick="next(' + next + ')">Próximo</button>'
        $('.butons').html(butOns)
    }
}

$('#estado').on('change', function () {
    $('#estadoSel').val($('#estado option:selected').text())
})

$('#sltEnsino').on('change', function () {
    $('#ensinoSel').val($('#sltEnsino option:selected').text())
})


function chk() {
    var inps = $('input')
    curriculum = []
    for (i = 1; i < inps.length; i++) {
        var inpID = $(inps[i]).attr("id")
        if ($(inps[i]).prop('required')) {
            if ($('#' + inpID).val() == '') {
                alert('Campo: ' + $(inps[i]).attr("id") + ' Obrigatório')
                x = false;
                break
            } else {
                x = true;
            }
        } else {
            //x = true;
        }
    }
    return x;
}

function saveCur() {
    if (chk()) {
        var inps = $('input')
        curriculum = new Object()
        for (i = 1; i < inps.length; i++) {
            var inpID = $(inps[i]).attr("id")
            curriculum[inpID] = $('#' + inpID).val();
        }
        var json = JSON.stringify(curriculum)
        saveServer(json, 'saveCur')
    }
}

function cadastrarNew() {
    if ($('#password').val() == $('#passwordConfirm').val()) {
        if ($('#cpf').val().length != 11) {
            alert('Campo CPF deve conter 11 digitos')
        } else {
            if (chk()) {
                var inps = $('input')
                cadastro = new Object()
                for (i = 1; i < inps.length; i++) {
                    var inpID = $(inps[i]).attr("id")
                    cadastro[inpID] = $('#' + inpID).val();
                }
                var json = JSON.stringify(cadastro)
                saveServer(json, 'newClient')
            }
        }
    } else {
        alert('Campo Senha e Confirmção de Senha deve ser Igual!')
    }
}

function login() {
    if ($('#login').val() != '' && $('#passwrd').val() != '') {
        $('.formLogin button').html('Aguarde...');
        $('.formLogin button').prop('disabled', true);
        $.ajax({
            url: "./config/system.php",
            type: "POST",
            data: {
                action: 'login', dados: [$('#login').val(), $('#passwrd').val()]
            },
            success: (result) => {
                if (Array.isArray(JSON.parse(result))) {
                    $('.formLogin section').html('<span style="background-color: yellow;">Usuário não Cadastrado</span>')
                    $('#login').val('')
                    $('#passwrd').val('')
                } else {
                    if (JSON.parse(result)) {
                        window.location.href = "index.html";
                    } else {
                        $('.formLogin section').html('<span style="background-color: yellow;">Usuário ou senha incorreto</span>')
                        $('#login').val('')
                        $('#passwrd').val('')
                    }
                }
                $('.formLogin button').html('Login');
                $('.formLogin button').prop('disabled', false);
            }
        })
    } else {
        $('.formLogin section').html('<span style="background-color: yellow;">Todos os campos são obrigatórios</span>')
    }
}

$('#cep').on('keyup', function () {
    if ($(this).val().length == 8) {
        carregando()
        var jqxhr = $.get("https://brasilapi.com.br/api/cep/v2/" + $('#cep').val(), function (data) {
            $('#rua').val(data['street'])
            $('#bairro').val(data['neighborhood'])
            $('#cidade').val(data['city'])
            $('#uf').val(data['state'])
        })
            .done(function () {
                //alert( "second success" );
            })
            .fail(function () {
                alert("CEP Inválido");
                $('#rua').val('')
                $('#bairro').val('')
                $('#cidade').val('')
                $('#uf').val('')
            })
            .always(function () {
                carregando()
            });
    }
})

function saveContract() {
    /*if(chk()){
        var inps = $('input')
        curriculum = new Object()
        for(i=1; i<inps.length; i++){
            var inpID = $(inps[i]).attr("id")
            curriculum[inpID] = $('#'+inpID).val() ;
        }
        var json = JSON.stringify(curriculum)
        saveServer(json, 'saveContract')
    }   */
}

function saveServer(dados, name) {
    var enviar = [JSON.parse(dados)]
    $.ajax({
        url: "./config/system.php",
        type: "POST",
        data: {
            action: name, dados: enviar
        },
        success: (result) => {
            var eResult = JSON.parse(result)
            console.log(eResult)
        }
    })
}

/*Contrato*/

function nextp(page) {
    var next = page + 1
    var back = page - 1
    if (page == 1) {
        $('.locador').addClass('some')
        $('.locatario').removeClass('some')
        var butOns = '<button onclick="backp(' + back + ')">Voltar</button><button onclick="nextp(' + next + ')">Próximo</button>'
        $('.butons').html(butOns)
    } else if (page == 2) {
        $('.locatario').addClass('some')
        $('.objeto').removeClass('some')
        var butOns = '<button onclick="backp(' + back + ')">Voltar</button><button onclick="nextp(' + next + ')">Próximo</button>'
        $('.butons').html(butOns)
    } else if (page == 3) {
        $('.objeto').addClass('some')
        $('.doObjeto').removeClass('some')
        var butOns = '<button onclick="backp(' + back + ')">Voltar</button><button onclick="saveContract()">Salvar</button>'
        $('.butons').html(butOns)
    }
}

function backp(page) {
    var next = page + 1
    var back = page - 1
    if (page == 0) {
        $('.locatario').addClass('some')
        $('.locador').removeClass('some')
        var butOns = '<button onclick="nextp(' + next + ')">Próximo</button>'
        $('.butons').html(butOns)
    } else if (page == 1) {
        $('.objeto').addClass('some')
        $('.locatario').removeClass('some')
        var butOns = '<button onclick="backp(' + back + ')">Voltar</button><button onclick="nextp(' + next + ')">Próximo</button>'
        $('.butons').html(butOns)
    } else if (page == 2) {
        $('.doObjeto').addClass('some')
        $('.objeto').removeClass('some')
        var butOns = '<button onclick="backp(' + back + ')">Voltar</button><button onclick="nextp(' + next + ')">Próximo</button>'
        $('.butons').html(butOns)
    }
}

$('#stlCivilProp').on('change', function () {
    $('#estadoCivilp').val($('#stlCivilProp option:selected').text())
})

$('#stlCivilInqui').on('change', function () {
    $('#estadoCivili').val($('#stlCivilInqui option:selected').text())
})

$('#sltObject').on('change', function () {
    $('#objLoc').val($('#sltObject option:selected').text())
})

$('#sltDesp').on('change', function () {
    $('#objDesp').val($('#sltDesp option:selected').text())
})

$('#sltDespl').on('change', function () {
    $('#objDesplv').val($('#sltDespl option:selected').text())
})


/*Detail*/

$('.album img').on('click', function (event) {
    var sel = '#' + event.target.id
    $('#coverThis').attr('src', $(sel).attr('src'))
});

function comprar(id) {
    $.ajax({
        url: "./config/system.php",
        type: "POST",
        data: {
            action: 't404'
        },
        success: (result) => {
            var eResult = JSON.parse(result)
            if (eResult == true) {
                window.location.replace("cpainel.html");
            } else {
                window.location.replace("login.html");
            }
        }
    })
}

function acessar(id) {
    $.ajax({
        url: "./config/system.php",
        type: "POST",
        data: {
            action: 'linkthis', id: id
        },
        success: (result) => {
            var eResult = JSON.parse(result)
            window.location.href = eResult
        }
    })
}

function consultarDev(id) {
    $.ajax({
        url: "./config/system.php",
        type: "POST",
        data: {
            action: 'contato', id: id
        },
        success: (result) => {
            var eResult = JSON.parse(result)
            var texto = encodeURIComponent(
                `\u{2705} *Nova Solicitação Kimcode.com.br*
Serviço: *${eResult[1]}*
`);
            var link = 'https://wa.me/' + eResult[0] + '?text=' + texto;

            window.open(link)
        }
    })
}


////// Painel
function openS(ids) {
    $.ajax({
        url: "./config/system.php",
        type: "POST",
        data: {
            action: 'showopt', id: ids
        },
        success: (result) => {
            var eResult = JSON.parse(result)
            cpainelThis()
            if (eResult[0]) {
                window.location.href = eResult[1]
            } else {
                alert(eResult[1])
            }

        }
    })
}

function editS(ids) {

}

function saveS(ids) {

}