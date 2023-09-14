/**
 * 
 */

        function salvarProduto() {
            var id = $("#id").val();
            var nome = $("#nomeProduto").val();
            var descricao = $("#descricao").val();
            var valor = $("#valor").val();

            if (nome == null || nome != null && nome.trim() == '') {
                $("#nome").focus();
                alert("Informe o nome do produto");
                return
            }

            if (descricao == null || descricao != null && descricao.trim() == '') {
                $("#descricao").focus();
                alert("Descreva o produto");
                return
            }

            if (valor == null || valor != null && valor.trim() == '') {
                $("#valor").focus();
                alert("Informe o valor do produto");
                return
            }


            $.ajax({
                method: "POST",
                url: "salvar",
                data: JSON.stringify({
                    id: id,
                    nome: nome,
                    descricao: descricao,
                    valor: valor
                }),
                contentType: "application/json; charset=utf-8",
                success: function (response) {
                    $("#id").val(response.id);
                    alert("Gravou com sucesso!");
                },
            }).fail(function (xhr, status, errorThrown) {
                alert("Erro ao salvar produto" + xhr.responseText);
            });
        }

        function pesquisarProduto() {
            var nome = $("#nameBusca").val();
            if (nome != null && nome.trim() != " ") {
                $.ajax({
                    method: "GET",
                    url: "buscarPorNome",
                    data: "name=" + nome,
                    success: function (response) {
                        $("#tabelaresultados > tbody > tr").remove();

                        for (var i = 0; i < response.length; i++) {
                            $("#tabelaresultados > tbody").append(
                                "<tr><td>" +
                                response[i].id +
                                "</td><td>" +
                                response[i].nome +
                                '</td><td><button type="button" onclick="colocarEmEdicao(' +
                                response[i].id +
                                ')" class="btn btn-primary">Visualizar</button></td>' +
                                '<td><button onclick="deletarProduto(' + response[i].id + ')"' +
                                'type="button" class="btn btn-danger">Deletar</button></td></tr>'
                            );
                        }
                    },
                }).fail(function (xhr, status, errorThrown) {
                    alert("Erro ao salvar produto" + xhr.responseText);
                });
            }
        }


        function colocarEmEdicao(id) {
            $.ajax({
                method: "GET",
                url: "buscarProdutoPorId",
                data: "idProduto=" + id,
                success: function (response) {
                    $("#id").val(response.id);
                    $("#nomeProduto").val(response.nome);
                    $("#descricao").val(response.descricao);
                    $("#valor").val(response.valor);

                    $("#modalPesquisaProduto").modal("hide");
                },
            }).fail(function (xhr, status, errorThrown) {
                alert("Erro ao buscar produto por id: " + xhr.responseText);
            });
        }


        function deletarProduto(id) {
            if (confirm("Deseja realmente deletar esse produto?")) {
                $.ajax({
                    method: "DELETE",
                    url: "delete",
                    data: "idProduto=" + id,
                    success: function (response) {
                        $('#' + id).remove();
                        alert(response);
                    },
                }).fail(function (xhr, status, errorThrown) {
                    alert("Erro ao deletar produto por id: " + xhr.responseText);
                });
            }

        }

        function botaoDeletarDaTela() {
            var id = $("#id").val();

            if (id != null && id.trim() != "") { }
            deletarProduto(id);
            document.getElementById("formCadastroProduto").reset();
        }  
   