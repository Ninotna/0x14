import React, { useEffect } from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, children })
{
	useEffect(() => {
		function handleKeyDown(event)
		{
			if (event.key === 'Escape') {
				onClose();
			}
		}
		if (isOpen) {
			document.addEventListener('keydown', handleKeyDown);
		}
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button className="modal-close" onClick={onClose}>
					&times;
				</button>
				{children}
			</div>
		</div>
	);
}

export default Modal;
