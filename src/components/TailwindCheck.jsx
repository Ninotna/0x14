
import React, { useState } from 'react';
import { Modal } from '@dev87/react-smart-modal';
import '@dev87/react-smart-modal/style.css';

export default function TailwindCheck() {
  return (
    <div className="space-y-4 p-4">
      <div className="bg-blue-200 max-w-sm p-2">max-w-sm</div>
      <div className="bg-green-200 max-w-md p-2">max-w-md</div>
      <div className="bg-yellow-200 max-w-lg p-2">max-w-lg</div>
      <div className="bg-pink-200 max-w-xl p-2">max-w-xl</div>
      <div className="bg-red-200 w-full h-20 p-2">w-full h-20</div>
    </div>
  );
}

export function ModalPositionTest() {
  const [position, setPosition] = useState('center');
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Test de position de la modale</h2>
      <div className="space-x-2">
        <button
          onClick={() => {
            setPosition('center');
            setShowModal(true);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Centrer
        </button>
        <button
          onClick={() => {
            setPosition('top');
            setShowModal(true);
          }}
          className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Haut
        </button>
      </div>

      {showModal && (
        <Modal
          isOpen={true}
          onClose={() => setShowModal(false)}
          position={position}
          title={`Position actuelle : ${position}`}
        >
          <div className="p-4">
            <p>Test de positionnement dynamique</p>
            <button
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              onClick={() => setShowModal(false)}
            >
              Fermer
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
