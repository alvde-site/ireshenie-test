interface IValues {
    login?: string;
    control?: string;
    password?: string;
    confirmation?: string;
  }
  
  interface IErrors {
    login?: string;
    control?: string;
    password?: string;
    confirmation?: string;
  }
  
  export interface IFormValidator {
    values: IValues;
    errors: IErrors;
    isValid: boolean;
    handleChange: (event: React.FormEvent)=> void;
  }