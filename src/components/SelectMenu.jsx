import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ChevronDownIcon } from '@radix-ui/react-icons'

/**
 * SelectMenu - composant menu déroulant stylé
 * @arg: label - texte placeholder quand aucune valeur n’est sélectionnée
 * @arg: value - valeur sélectionnée actuellement
 * @arg: onChange - fonction de sélection d’une valeur
 * @arg: options - tableau d’objets { label, value }
 * Return: bouton et liste déroulante stylés
 */
export function SelectMenu({ label, value, onChange, options }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="w-full flex justify-between items-center border border-gray-300 px-4 py-2 rounded bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <span className={value ? '' : 'text-gray-400'}>{value || label}</span>
          <ChevronDownIcon className="w-4 h-4 text-gray-500 ml-2" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-white text-gray-900 border border-gray-300 rounded shadow-md z-50 w-full max-h-64 overflow-y-auto"
          sideOffset={4}
        >
          {options.map((option) => (
            <DropdownMenu.Item
              key={option.value}
              onSelect={() => onChange(option.value)}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 focus:outline-none focus:bg-gray-200"
            >
              {option.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default SelectMenu
