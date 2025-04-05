export function ConvertMoney(value: number){
    return value.toLocaleString("pt-BR", {
        minimumFractionDigits: 2
    })
}