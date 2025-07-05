import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export function SelectMenu({ label, value, onChange, options })
{
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button
					className="w-full flex justify-between items-center border border-gray-300 px-4 py-2 rounded bg-white text-sm"
				>
					<span>{value || <span className="text-gray-400">{label}</span>}</span>
					<ChevronDownIcon className="w-4 h-4 text-gray-500 ml-2" />
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content
					className="bg-white border border-gray-300 rounded shadow-md z-50 w-full max-h-64 overflow-y-auto"
					sideOffset={4}
				>
					{options.map((option) => (
						<DropdownMenu.Item
							key={option.value}
							onSelect={() => onChange(option.value)}
							className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
						>
							{option.label}
						</DropdownMenu.Item>
					))}
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
}




export default SelectMenu;
