// components/SelectMenu.jsx
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from '@radix-ui/react-icons';


const SelectMenu = ({ label, options, value, onChange }) => {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger className="flex items-center justify-between border p-2 w-full rounded bg-white">
				{value || label}
				<ChevronDownIcon className="ml-2" />
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content className="bg-white border rounded shadow-md z-50">
					{options.map((opt) => (
						<DropdownMenu.Item
							key={opt.value}
							onSelect={() => onChange(opt.value)}
							className="px-4 py-2 cursor-pointer hover:bg-gray-100"
						>
							{opt.label}
						</DropdownMenu.Item>
					))}
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default SelectMenu;
