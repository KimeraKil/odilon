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

function clientes() {
    window.location.href = 'clientes.html'
}

function os() {
    window.location.href = 'allos.html'
}

function parts() {
    window.location.href = 'parts.html'
}

function configs() {
    /*fazer verificação*/
    window.location.href = 'adm.html'
}

function openNewOS() {
    window.location.href = 'newos.html'
}

function openNewClient() {
    window.location.href = 'newclient.html'
}

function openNewPart() {
    window.location.href = 'newpart.html'
}

function openOS(param) {
    //param = id OS
    window.location.href = 'os.html'
}

function openWhats(param) {
    //param = id span com numero do cliente
    /*Abrir Whats APP com numero do Contato*/
}

function openClientDetail(param) {
    //param = id cliente
    /*Abrir Detalhes do Cliente (nova janela ou na mesma)*/
}

function searchGeneral() {

}

function searchOS() {

}

function searchClient() {

}

function editProfile() {
    $('.btnOpt').html('<button onclick="salvarAltUser(0)">Salvar Alteração</button>')
    $('.box-adm').toggleClass('some')
    $('.optselect').toggleClass('some')
}

function newProfile() {
    $('.btnOpt').html('<button onclick="salvarNewUser(0)">Salvar Novo</button>')
    $('.box-adm').toggleClass('some')
    $('.optselect').toggleClass('some')
}

function exitSys() {

}

function printOS() {

}

function editOS(param) {
    //param = id OS
    /*Abrir nova os com os dados atuais*/
}

function sendLinkOS(param) {
    //param = id OS
    /*Enviar link da OS com ID*/
}

function salvarOS(parts) {
    //param = checkFields
}

function salvarClient(param) {
    //param = checkFields
}

function salvarPart(param) {
    //param = checkFields
}

function salvarAltUser(param) {
    //param = checkFields
    $('.box-adm').toggleClass('some')
    $('.optselect').toggleClass('some')
}

function salvarNewUser(param) {
    //param = checkFields
    $('.box-adm').toggleClass('some')
    $('.optselect').toggleClass('some')
}

function openInfo(param) {
    //param = id do produto a ser exibido
    $('.box').toggleClass('some')
    $('.moreInfo').toggleClass('some')
}

function closeInfo() {
    let opt = confirm('Click OK para Salvar ou CANCELAR para sair sem Salvar')
    if (opt) {

    } else {

    }
    $('.box').toggleClass('some')
    $('.moreInfo').toggleClass('some')
}