$(document).ready(function () {
    chk()
})

function chk() {
    $.ajax({
        url: "./config/system.php",
        type: "POST",
        data: {
            action: 't401'
        },
        success: (result) => {
            if (result) {
                window.location.replace("allos.html");
            }
        }
    })
}

function logar(start) {
    if (checkfields(start)) {
        console.log('Logar')
    }
}

$('#login').on('keypress', function (event) {
    let att = $('#login').val()
    $('#login').val(att.replace(/\s/g, ''))
})

function cadastrar(start) {
    $('#spanInfo').html('')
    if (checkfields(start)) {
        if ($('#senha').val() == $('#confirmSenha').val()) {
            let newUser = createObject(0)
            $.ajax({
                url: "./config/system.php",
                type: "POST",
                data: {
                    action: 'newUser', dadosUser: newUser
                },
                success: (result) => {
                    let eResult = JSON.parse(result)
                    if (eResult) {
                        window.location.href = 'allos.html'
                    } else {
                        $('#spanInfo').html('Usuário já cadastrado!')
                    }
                }
            })
        } else {
            alert('Campos: Senha e Confirmação de Senha não correspondem')
        }
    }
}

function recoverpws(start) {
    if (checkfields(start)) {
        if ($('#senha').val() == $('#confirmSenha').val()) {
            console.log('Recuperar')
        } else {
            alert('Campos: Senha e Confirmação de Senha não correspondem')
        }
    }
}

function createObject(param, param2 = null) {
    // param = inicio contador
    // param2 = incluir no objeto

    /*if (param2 == null) {
        console.log('não usar segundo parametro')
    } else {
        console.log('usar: ' + param2)
    }*/

    const objNew = new Object();
    let inps = $('input')

    for (i = param; i < $('input').length; i++) {
        var inpID = $(inps[i]).attr("id")
        objNew[inpID] = $('#' + inpID).val()
    }

    return objNew

}

function checkfields(start) {
    var fields = $('input');
    for (i = start; i < fields.length; i++) {
        var idFields = $(fields[i]).attr("id");
        if ($(fields[i]).prop('required')) {
            if ($('#' + idFields).val() == '') {
                alert('Campo: ' + $(fields[i]).attr('placeholder') + ' é Obrigatório');
                var x = false;
                break;
            } else {
                var x = true;
            }
        }
    }
    return x;
}