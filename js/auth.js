// Inicializar Firebase (com os SDKs compat)
const firebaseConfig = {
  apiKey: "AIzaSyB7udSG4CvFqyq9uW35IfywI5IgtpMBxQY",
  authDomain: "prompthub-a5c6a.firebaseapp.com",
  projectId: "prompthub-a5c6a",
  storageBucket: "prompthub-a5c6a.firebasestorage.app",
  messagingSenderId: "390996860790",
  appId: "1:390996860790:web:f281cacd7cd02417402457",
  measurementId: "G-J9H0M7WDVG"
};

// Inicializar Firebase App
firebase.initializeApp(firebaseConfig);

// Obter auth e provedor
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Botão de login
const btn = document.getElementById('googleLoginBtn');
btn.addEventListener('click', () => {
  auth.signInWithPopup(provider)
    .then(result => {
      const user = result.user;

      // Armazenar dados localmente
      localStorage.setItem('usuario', JSON.stringify({
        nome: user.displayName,
        email: user.email,
        foto: user.photoURL,
        uid: user.uid
      }));

      // Redirecionar para home
      window.location.href = "/index.html";
    })
    .catch(error => {
      console.error("Erro no login:", error);
      document.getElementById('errorMsg').classList.remove('hidden');
    });
});

