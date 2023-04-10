export const getArchitects = () => {
    const architects = Array.from(document.getElementsByTagName('a'))
        .filter(a => a.textContent === 'Architect')
  
    const nonArchitects = Array.from(document.getElementsByTagName('span'))
        .filter(span => !span.classList.contains('name') || span.classList.contains('Architect'))
  
    return [architects, nonArchitects]
}
  
export const getClassical = () => {
    const classicalArchitects = Array.from(document.getElementsByClassName('classical'))
        .filter(a => a.textContent.includes('Architect'))
  
    const nonClassicalArchitects = Array.from(document.getElementsByTagName('a'))
        .filter(a => !a.classList.contains('classical') || !a.textContent.includes('Architect'))
  
    return [classicalArchitects, nonClassicalArchitects]
}
  
export const getActive = () => {
    const classicalArchitects = Array.from(document.getElementsByClassName('classical'))
        .filter(a => a.textContent.includes('Architect'))
  
    const activeArchitects = classicalArchitects.filter(a => !a.classList.contains('inactive'))
    const nonActiveArchitects = classicalArchitects.filter(a => a.classList.contains('inactive'))
  
    return [activeArchitects, nonActiveArchitects]
}
  
export const getBonannoPisano = () => {
    const bonannoPisano = document.getElementById('BonannoPisano')
    const activeClassicalArchitects = Array.from(document.querySelectorAll('.classical:not(.inactive)'))
        .filter(a => a.id !== 'BonannoPisano')
  
    return [bonannoPisano, activeClassicalArchitects]
}
  