let icon_mode = document.querySelector("button .material-symbols-outlined");
let content = document.querySelectorAll("p")
let list = document.querySelectorAll("ul li")

export const toggleMode = () => {
    
    const currentMode = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    const newMode = currentMode === 'dark-mode' ? 'light-mode' : 'dark-mode';
    
    // Basculer le mode sur le body
    document.body.classList.remove(currentMode);
    document.body.classList.add(newMode);
    icon_mode.classList.toggle("filter-light-mode");
    
    for(let row of content){ /* itérer sur les collections */
        row.classList.toggle("filter-light-mode");
    }
    for(let row of list){ 
        row.classList.toggle("filter-light-mode");
    }
  
    
    
    // Sauvegarder le mode actuel dans localStorage
    localStorage.setItem('theme', newMode);
    localStorage.setItem('light', list);
    localStorage.setItem('lights', content);
};