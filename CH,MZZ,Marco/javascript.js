function Login() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario === "recepção" && senha === "recepção123") {
    
        window.location.href = "Pousada_Cadastro.html"; 
    } else {
        alert("Credenciais inválidas.");
    }
}





function cadastrar(){
    var nome = document.getElementById("nome");

    if(nome.value == "" ){
        alert("Campo vazio! Preencha o nome.");
        nome.focus();
        return;
    }

    var telefone = document.getElementById("telefone");

    if(telefone.value == "" ){
        alert("Campo vazio! Preencha o telefone.");
        telefone.focus();
        return;
    }

    var cep = document.getElementById("cep");

    if(cep.value == "" ){
        alert("Campo vazio! Preencha a seu cep.");
        cep.focus();
        return;
    }


    var rua = document.getElementById("rua");

    if(rua.value == "" ){
        alert("Campo vazio! Preencha sua rua.");
        rua.focus();
        return;
    }
    var numero = document.getElementById("numero");

    if(numero.value == "" ){
        alert("Campo vazio! Preencha seu número.");
        numero.focus();
        return;
    }
    var complemento = document.getElementById("complemento");

    if(complemento.value == "" ){
        alert("Campo vazio! Preencha seu complemento.");
        complemento.focus();
        return;
    }
    var bairro = document.getElementById("bairro");

    if(bairro.value == "" ){
        alert("Campo vazio! Preencha seu bairro.");
        bairro.focus();
        return;
    }
    var cidade = document.getElementById("cidade");

    if(cidade.value == "" ){
        alert("Campo vazio! Preencha sua cidade.");
        cidade.focus();
        return;
    }
    var uf = document.getElementById("uf");

    if(uf.value == "" ){
        alert("Campo vazio! Preencha sua uf.");
        uf.focus();
        return;
    }
    
    alert("Cliente inscrito com sucesso!");
}
function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
        //document.getElementById('ibge').value=(conteudo.ibge);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}
    
function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";
            //document.getElementById('ibge').value="...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};
