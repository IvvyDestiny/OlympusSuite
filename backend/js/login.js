const usuarios = {
  'separacaocd@zeusdobrasil.com.br': {
    senha: '@Zeus.2025',
    destino: 'separacao.html'
  },
  'estoquecd@zeusdobrasil.com.br': {
    senha: '@Zeus.2025',
    destino: 'HTML Estoque v1.4.html'
  },
  'supervisoriocd@zeusdobrasil.com.br': {
    senha: '@Zeus.2025',
    destino: 'HTML - Supervisor.html'
  },
  'caboscd@zeusdobrasil.com.br': {
    senha: '@Zeus.2025',
    destino: 'HTML - cabos.html'
  },
  'olympus@olympuszeus.com.br': {
    senha: '@Olympus123',
    destino: 'separacao.html'
  },
  'olympus@olympuszeus.com.br': {
    senha: '@Olympus123',
    destino: 'adm.html'
  }
};

function validateLogin() {
  const email = document.querySelector('input[name="email"]').value.toLowerCase().trim();
  const senha = document.querySelector('input[name="pass"]').value;
  
  const usuario = usuarios[email];
  
  if (usuario && usuario.senha === senha) {
    window.location.href = usuario.destino;
    return false;
  } else {
    alert("Email ou senha incorretos!");
    return false;
  }
}

function passwordRecovery() {
  const email = prompt("Digite seu email para recuperar a senha:").toLowerCase().trim();
  const usuario = usuarios[email];

  if (usuario) {
    alert(`Sua senha é: ${usuario.senha}`);
  } else {
    alert("Email não encontrado!");
  }
}