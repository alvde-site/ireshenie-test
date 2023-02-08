interface IValues {
    login?: string;
    control?: string;
    password?: string;
    confirmation?: string;
  }
  
  export interface IErrors {
    login?: string;
    control?: string;
    password?: string;
    confirmation?: string;
  }
  
  export interface IFormValidator {
    values: IValues;
    errors: IErrors;
    isValid: boolean;
    setIsValid: (value: boolean) => void;
    setErrors: (value: IErrors) => void;
    handleChange: (event: React.FormEvent)=> void;
    resetForm: () => void;
  }