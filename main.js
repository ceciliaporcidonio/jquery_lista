// script.js
$(document).ready(function() {
    $('#form-tarefa').submit(function(e) {
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val();
        if (nomeTarefa.trim() !== '') {
            const novaTarefa = `<li>${nomeTarefa}</li>`;
            $('#lista-tarefas').append(novaTarefa);
            $('#nome-tarefa').val(''); // Limpa o campo após adicionar a tarefa
        }
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('concluida');
    });
});
