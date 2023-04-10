export const getArchitects = () => {
    const architects = Array.from(document.querySelectorAll('a')).filter(
        node => node.textContent === 'Architect'
    )
  
    const notArchitects = Array.from(
        document.querySelectorAll(':not(.not-architect)')
    )
  
    return [architects, notArchitects]
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
  