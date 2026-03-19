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

  /* --- Busca na página de Downloads --- */
  const searchInput = document.getElementById('search-downloads');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const query = this.value.toLowerCase().trim();
      const items = document.querySelectorAll('.download-item');
      items.forEach(function (item) {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });

      /* Mostrar/ocultar seções vazias */
      document.querySelectorAll('.download-section').forEach(function (section) {
        const visibleItems = section.querySelectorAll('.download-item:not([style*="display: none"])');
        if (visibleItems.length === 0) {
          section.style.display = 'none';
        } else {
          section.style.display = '';
        }
      });
    });
  }

  /* --- Formulário de Inscrição --- */
  const form = document.getElementById('inscricao-form');
  if (form) {
    /* Máscara CPF */
    const cpfInput = document.getElementById('cpf');
    if (cpfInput) {
      cpfInput.addEventListener('input', function () {
        let v = this.value.replace(/\D/g, '');
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
    const telInput = document.getElementById('telefone');
    if (telInput) {
      telInput.addEventListener('input', function () {
        let v = this.value.replace(/\D/g, '');
        if (v.length > 11) v = v.slice(0, 11);
        if (v.length > 6) {
          v = v.replace(/(\d{2})(\d{5})(\d{1,4})/, '($1) $2-$3');
        } else if (v.length > 2) {
          v = v.replace(/(\d{2})(\d{1,5})/, '($1) $2');
        }
        this.value = v;
      });
    }

    /* Envio via FormSpree */
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      /* Validação básica */
      const requiredFields = form.querySelectorAll('[required]');
      let valid = true;
      requiredFields.forEach(function (field) {
        if (!field.value.trim()) {
          field.classList.add('border-red-500');
          valid = false;
        } else {
          field.classList.remove('border-red-500');
        }
      });

      if (!valid) {
        return;
      }

      const formData = new FormData(form);
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            document.getElementById('form-container').innerHTML = '<div class="success-message"><svg class="mx-auto mb-4" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#C8A84B" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><h3 class="text-2xl font-bold mb-2" style="font-family: Playfair Display, serif;">Inscrição Enviada!</h3><p class="text-gray-300">Sua inscrição foi recebida com sucesso. Entraremos em contato em breve.</p><p class="text-gray-400 text-sm mt-4">100% gratuito — sem cobranças de qualquer tipo.</p></div>';
          } else {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            alert('Erro ao enviar. Tente novamente.');
          }
        })
        .catch(function () {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          alert('Erro de conexão. Verifique sua internet e tente novamente.');
        });
    });
  }

  /* --- Marcar link ativo na Navbar --- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

});
