import { expect, it } from "vitest";

type BaseButton = {
  content: string,
  onClick: () => void,
}

//--------- ⬇️ Modifica el código de abajo ⬇️ ------------//

type PrimaryButton = 

type SecondaryButton = 

//--------- ⬆️ Modifica el código de arriba ⬆️ -----------//


type Button = PrimaryButton | SecondaryButton;

const button: Button = {
  content: 'irrelevantContent',
  onClick: () => {},
  variant: 'primary'
}

const isPrimaryButton = (element: Button): element is PrimaryButton => {
  return element.variant === 'primary';
}

it('should return expected result', () => {
  expect(isPrimaryButton(button)).toBeTruthy()
})