const validateEmail = (email: string): boolean => {
  // validateEmail("john@example")); // false
  // validateEmail("john@example.com")); // true

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(email);
  return isValidEmail;
};

const validatePhoneNumberOrEmail = (input: string): boolean => {
  // validatePhoneNumberOrEmail("john@example.com")); // false
  // validatePhoneNumberOrEmail("1234567890")); // true

  const phoneNumberOrEmailRegex =
    /^(?:(?:\+|00)\d{1,3}\s?)?(?:\d{1,4})?[\s.-]?\(?(?:\d{1,3})?\)?[\s.-]?\d{1,4}[\s.-]?\d{1,9}$/;
  return phoneNumberOrEmailRegex.test(input);
};

export { validateEmail, validatePhoneNumberOrEmail };
