const gatos: string[] = [
    'Koda',
    'Cebolinha',
    'Negrito'
]

function exibe_gatos(gatos: string[]) {
    return `Os gatos são: ${gatos.join(', ')}`
}

console.log(exibe_gatos(gatos))