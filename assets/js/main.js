/* ================================================
   IECH - Instituto Evangelístico Charley Huffman
   JavaScript Principal
   ================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* --- Inicialização do AOS --- */
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }

  /* --- Navbar: sombra ao rolar --- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  /* --- Menu Mobile --- */
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
      const icon = menuBtn.querySelector('svg');
      if (mobileMenu.classList.contains('open')) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
      } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
      }
    });

    /* Fechar menu ao clicar em link */
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        const icon = menuBtn.querySelector('svg');
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
      });
    });
  }

  /* --- Marcar link ativo na Navbar --- */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  if (currentPage === '') currentPage = 'index.html';

  /* Links normais (.nav-link) */
  document.querySelectorAll('.nav-link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
      link.style.color = '#C8A84B';
    }
  });

  /* Botão Inscreva-se: destacar quando em inscricao.html */
  if (currentPage === 'inscricao.html') {
    var inscricaoBtns = document.querySelectorAll('.btn-inscricao-ativo');
    inscricaoBtns.forEach(function (btn) {
      btn.style.backgroundColor = '#E8C96A';
      btn.style.boxShadow = '0 0 0 3px rgba(200,168,75,0.4)';
    });
  }

  /* --- Busca na página de Downloads --- */
  var searchInput = document.getElementById('search-downloads');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      var query = this.value.toLowerCase().trim();
      var items = document.querySelectorAll('.download-item');
      items.forEach(function (item) {
        var text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? '' : 'none';
      });

      /* Mostrar/ocultar seções vazias */
      document.querySelectorAll('.download-section').forEach(function (section) {
        var visibleItems = section.querySelectorAll('.download-item:not([style*="display: none"])');
        section.style.display = visibleItems.length === 0 ? 'none' : '';
      });
    });
  }

  /* --- Formulário de Inscrição --- */
  var form = document.getElementById('inscricao-form');
  if (form) {

    /* Auto-preencher campo oculto "turno" conforme modalidade */
    var modalidadeSelect = document.getElementById('modalidade');
    var turnoHidden = document.getElementById('turno');
    if (modalidadeSelect && turnoHidden) {
      function atualizarTurno() {
        var val = modalidadeSelect.value;
        if (val.indexOf('Noite') !== -1) {
          turnoHidden.value = 'Noite';
        } else {
          turnoHidden.value = 'Manhã';
        }
      }
      modalidadeSelect.addEventListener('change', atualizarTurno);
      atualizarTurno(); /* inicializar */
    }

    /* Máscara CPF */
    var cpfInput = document.getElementById('cpf');
    if (cpfInput) {
      cpfInput.addEventListener('input', function () {
        var v = this.value.replace(/\D/g, '');
        if (v.length > 11) v = v.slice(0, 11);
        if (v.length > 9) {
          v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
        } else if (v.length > 6) {
          v = v.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
        } else if (v.length > 3) {
          v = v.replace(/(\d{3})(\d{1,3})/, '$1.$2');
        }
        this.value = v;
      });
    }

    /* Máscara Telefone */
    var telInput = document.getElementById('telefone');
    if (telInput) {
      telInput.addEventListener('input', function () {
        var v = this.value.replace(/\D/g, '');
        if (v.length > 11) v = v.slice(0, 11);
        if (v.length > 6) {
          v = v.replace(/(\d{2})(\d{5})(\d{1,4})/, '($1) $2-$3');
        } else if (v.length > 2) {
          v = v.replace(/(\d{2})(\d{1,5})/, '($1) $2');
        }
        this.value = v;
      });
    }

    /* Validação antes do envio nativo FormSpree */
    form.addEventListener('submit', function (e) {
      var requiredFields = form.querySelectorAll('[required]');
      var valid = true;
      requiredFields.forEach(function (field) {
        if (!field.value.trim()) {
          field.classList.add('border-red-500');
          valid = false;
        } else {
          field.classList.remove('border-red-500');
        }
      });
      if (!valid) {
        e.preventDefault();
      }
    });
  }

});
