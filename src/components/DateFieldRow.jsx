import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

/**
 * DateFieldRow - 2 champs DatePicker côte à côte
 * @arg: label1 - texte du placeholder du 1er champ
 * @arg: label2 - texte du placeholder du 2nd champ
 * @arg: value1 - valeur du 1er champ
 * @arg: value2 - valeur du 2nd champ
 * @arg: onChange1 - fonction de modification du 1er champ
 * @arg: onChange2 - fonction de modification du 2nd champ
 * Return: groupe de 2 inputs date en ligne avec affichage cohérent
 */
export default function DateFieldRow({
  label1,
  label2,
  value1,
  value2,
  onChange1,
  onChange2,
}) {
  return (
    <div className="grid grid-cols-2 gap-4 col-span-2 w-full">
      <div className="relative w-full min-w-0">
        <DatePicker
          selected={value1}
          onChange={onChange1}
          className="input w-full"
          placeholderText={label1}
          popperPlacement="bottom-start"
          popperModifiers={[
            {
              name: 'preventOverflow',
              options: {
                boundariesElement: 'viewport',
              },
            },
          ]}
          required
        />
      </div>
      <div className="relative w-full min-w-0">
        <DatePicker
          selected={value2}
          onChange={onChange2}
          className="input w-full"
          placeholderText={label2}
          popperPlacement="bottom-start"
          popperModifiers={[
            {
              name: 'preventOverflow',
              options: {
                boundariesElement: 'viewport',
              },
            },
          ]}
          required
        />
      </div>
    </div>
  )
}
