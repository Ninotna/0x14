const validators = {
  firstName: (value) =>
    !value.trim() ? "Le prénom est requis." : "",
  lastName: (value) =>
    !value.trim() ? "Le nom est requis." : "",
  street: (value) =>
    !value.trim() ? "L'adresse est requise." : "",
  city: (value) =>
    !value.trim() ? "La ville est requise." : "",
  zipCode: (value) =>
    !/^[0-9]{5}$/.test(value) ? "Code postal invalide." : ""
};

export default validators;
