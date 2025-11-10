const firebaseConfig = {
  apiKey: "AIzaSyARRQYXTSbad5XGk4YTGwUhcI_xEMLoOa0",
  authDomain: "projetin-84c60.firebaseapp.com",
  projectId: "projetin-84c60",
  storageBucket: "projetin-84c60.firebasestorage.app",
  messagingSenderId: "407912886058",
  appId: "1:407912886058:web:2e36c5d6da4fdbc9123853"
}

firebase.initializeApp(firebaseConfig);

// 3. Cria uma referência para o serviço de autenticação
const auth = firebase.auth();


// --- Lógica de Cadastro ---
const formCadastro = document.getElementById('form-cadastro');

if (formCadastro) {
    formCadastro.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Impede o recarregamento da página

        const email = evento.target.email.value;
        const senha = evento.target.password.value;

        // Função de cadastro do Firebase
        auth.createUserWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                // Cadastro bem-sucedido
                alert("Usuário cadastrado com sucesso! Faça o login.");
                window.location.href = "index.html"; // Redireciona para o login
            })
            .catch((error) => {
                // Trata os erros
                alert("Erro ao cadastrar: " + error.message);
                console.error("Erro de cadastro:", error);
            });
    });
}


// --- Lógica de Login ---
const formLogin = document.getElementById('form-login');

if (formLogin) {
    formLogin.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const email = evento.target.email.value;
        const senha = evento.target.password.value;

        // Função de login do Firebase
        auth.signInWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                // Login bem-sucedido
                const user = userCredential.user;
                alert("Login realizado com sucesso! Bem-vindo, " + user.email);

                // DESAFIO: Criar um 'dashboard.html' e redirecionar para ele
                // window.location.href = "dashboard.html";
                console.log("Usuário logado:", user);
            })
            .catch((error) => {
                // Trata os erros (senha errada, usuário não encontrado)
                alert("Erro ao logar: Por favor, verifique seu e-mail e senha.");
                console.error("Erro de login:", error.message);
            });
    });
}