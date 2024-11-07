# 🌙 Dark Mode en JavaScript 🌙

Le dark mode est une fonctionnalité populaire qui permet aux utilisateurs de basculer entre un thème clair et un thème sombre. En JavaScript, vous pouvez facilement implémenter cette fonctionnalité en manipulant les classes CSS et en stockant les préférences de l'utilisateur.

## 💡 Comment ça marche ?

1. **Ajouter une classe CSS** : Créez une classe CSS pour le thème sombre.
2. **Manipuler les classes** : Utilisez JavaScript pour ajouter ou supprimer cette classe en fonction des préférences de l'utilisateur.
3. **Stocker les préférences** : Utilisez `localStorage` pour sauvegarder les préférences de l'utilisateur afin qu'elles persistent entre les sessions.

## 🚀 Exemple de code simplifié

```javascript
// Activer le dark mode
document.getElementById('darkModeToggle').addEventListener('click', ()=> {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Charger les préférences au démarrage
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

```

![AUR License](https://img.shields.io/aur/license/c)


