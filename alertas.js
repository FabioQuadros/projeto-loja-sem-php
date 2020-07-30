// Desativar envios de formulários se houver campos inválidos
      (function() {
        'use strict';
        window.addEventListener('load', function() {
          // Obtenha os formulários aos quais queremos adicionar estilos de validação
          var forms = document.getElementsByClassName('needs-validation');
          // Passe por cima deles e impeça o envio
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })();