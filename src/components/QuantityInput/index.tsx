import { BaseInput } from "./style"

interface ButtonProps {
  inIncrease: () => void
  inDecrease: () => void
  quantity: number
}

const QuantityInput = ({ inIncrease, inDecrease, quantity }: ButtonProps) => {
  return (
    <div>
      <BaseInput>
        <button type="button" onClick={inDecrease} disabled={quantity <= 1}>-</button>
        <input type="text" value={quantity} readOnly />
        <button type="button" onClick={inIncrease}>+</button>
      </BaseInput>
    </div>
  )
}

export default QuantityInput
