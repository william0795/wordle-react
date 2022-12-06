import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Cómo jugar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Adivina la palabra oculta en cinco intentos. Cada intento debe ser una
        palabra válida de 5 letras. Después de cada intento el color de las
        letras cambia para mostrar qué tan cerca estás de acertar la palabra.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="G"
          status="correct"
        />
        <Cell value="A" isCompleted={true} />
        <Cell value="T" isCompleted={true} />
        <Cell value="O" isCompleted={true} />
        <Cell value="S" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra G está en la palabra y en la posición correcta.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="V" isCompleted={true} />
        <Cell value="O" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="C"
          status="present"
        />
        <Cell value="A" isCompleted={true} />
        <Cell value="L" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra C está en la palabra pero en la posición incorrecta.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="C" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell value="N" isCompleted={true} />
        <Cell isCompleted={true} value="T" />
        <Cell isRevealing={true} value="O" isCompleted={true} status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra O no está en la palabra.
      </p>

      <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        <a
          href="https://github.com/william0795/wordle-react"
          className="font-bold underline"
        >
          Obtener codigo aquí
        </a>{' '}
      </p>
    </BaseModal>
  )
}
