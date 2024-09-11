export function salaryMask(value: string): string {
  return value
    .replace(/\D/g, '') // Remove todos os caracteres que não são dígitos
    .replace(/(\d{2})$/, ',$1') // Insere a vírgula antes dos dois últimos dígitos (centavos)
    .replace(/(?=(\d{3})+(?!\d))/g, '.') // Insere pontos a cada três dígitos, sem permitir ponto no começo
    .replace(/^(\D+)/, '') // Remove quaisquer caracteres não numéricos que possam estar no início
}
