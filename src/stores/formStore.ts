// stores/formStore.ts
import { defineStore } from 'pinia';
import axios from 'axios';

interface FormData {
    investment: number;
    name: string;
    phone: string;
    email: string;
    idNumber: string;
    birthDate: string;
    idCard: string;
    street: string;
    city: string;
    zip: string;
    bankAccount: string;
}

interface FormStoreState {
    currentStep: number;
    formData: FormData;
    errors: Partial<Record<keyof FormData, string>>;
}


export const useFormStore = defineStore('form', {
  state: () : FormStoreState => ({
    currentStep: 1, 
    formData: {
        investment: 0,
        name: '',
        phone: '',
        email: '',
        idNumber: '',
        birthDate: '',
        idCard: '',
        street: '',
        city: '',
        zip: '',
        bankAccount: '',
    },
    errors: {},
  }),
  actions: {

    async submitForm() {
        try {
          const response = await axios.post('https://jsonplaceholder.typicode.com/posts', this.formData);
          console.log('Úspešne odoslané:', response.data);
          return response.data;
        } catch (error) {
          console.error('Chyba pri odosielaní:', error);
          throw new Error('Nepodarilo sa odoslať formulár.');
        }
    },
  
    async fetchSummary() {
    try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
            console.log('Načítané dáta:', response.data);
            return response.data;
        } catch (error) {
            console.error('Chyba pri načítaní:', error);
            throw new Error('Nepodarilo sa načítať dáta.');
        }
    },

    updateField(field: string, value: string) {
      if (this.formData.hasOwnProperty(field)) {
        (this.formData[field as keyof FormData] as unknown as string) = value;
      }
    },

    
    // Validačné metódy
    validateInvestment() {
        if (this.formData.investment <= 0) {
            this.errors.investment = 'Zadajte spravnu sumu investície.';
        } else {
            this.errors.investment = '';
        }
    },
    validateName() {
        if (this.formData.name.trim() === '') {
            this.errors.name = 'Vaše meno musí byť zadané.';
        } else {
            this.errors.name = '';
        }
    },
    validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.formData.email)) {
            this.errors.email = 'Zadajte platnú e-mailovú adresu.';
        } else {
            this.errors.email = '';
        }
    },
    validatePhone() {
        const phoneRegex = /^[0-9]{6,15}$/;
        if (!phoneRegex.test(this.formData.phone)) {
            this.errors.phone = 'Zadajte platné telefónne číslo.';
        } else {
            this.errors.phone = '';
        }
      },
    validateIdNumber() {
        const idNumberRegex = /\d{2}(0[1-9]|1[0-2]|5[1-9]|6[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/?\d{3,4}/gmi;
        if (!idNumberRegex.test(this.formData.idNumber)) {
            this.errors.idNumber = 'Zadajte platné rodné číslo.';
        } else {
            this.errors.idNumber = '';
        }
    },
    validateBirthDate() {
        console.log(this.formData.birthDate.trim());
        const birthDateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!birthDateRegex.test(this.formData.birthDate.trim())) {
            this.errors.birthDate = 'Zadajte platný dátum narodenia.';
        } else {
            this.errors.birthDate = '';
        }
    },
    validateIdCard() {
        const idCardRegex = /^[A-Z]{2}\d{6}$/;
        if (!idCardRegex.test(this.formData.idCard)) {
            this.errors.idCard = 'Zadajte platné číslo občianskeho preukazu.';
        } else {
            this.errors.idCard = '';
        }
    },
    validateStreet() {
        if (this.formData.street.trim() === '') {
            this.errors.street = 'Zadajte ulicu.';
        } else {
            this.errors.street = '';
        }
    },
    validateCity() {
        if (this.formData.city.trim() === '') {
            this.errors.city = 'Zadajte mesto.';
        } else {
            this.errors.city = '';
        }
    },
    validateZip() {
        const zipRegex = /^\d{5}$/;
        if (!zipRegex.test(this.formData.zip.trim())) {
            this.errors.zip = 'Zadajte platné PSČ.';
        } else {
            this.errors.zip = '';
        }
    },

    validateBankAccount() {
        const bankAccountRegex = /^\d{10,16}$/;
        if (!bankAccountRegex.test(this.formData.bankAccount)) {
            this.errors.bankAccount = 'Zadajte platné číslo účtu.';
        } else {
            this.errors.bankAccount = '';
        }
    },

    validateField(field: keyof FormData) {
        switch (field) {
            case 'investment': {
                this.validateInvestment();
                break;
            }
            case 'name': {
                this.validateName();
                break;
            }
            case 'email': {
                this.validateEmail();
                break;
            }
            case 'phone': {
                this.validatePhone();
                break;
            }
            case 'idNumber': {
                this.validateIdNumber();
                break;
            }
            case 'birthDate': {
                this.validateBirthDate();
                break;
            }
            case 'idCard': {
                this.validateIdCard();
                break;
            }
            case 'street': {
                this.validateStreet();
                break;
            }
            case 'city': {
                this.validateCity();
                break;
            }
            case 'zip': {
                this.validateZip();
                break;
            }
            case 'bankAccount': {
                this.validateBankAccount();
                break;
            }
        }
    },

    validateAllFields(): boolean {
        let isValid = true;
        for (const field in this.formData) {
            this.validateField(field as keyof FormData);
            if (this.errors[field as keyof FormData]) {
                isValid = false;
            }
        }
        return isValid;
    },

  

    nextStep() {  

        switch (this.currentStep) {
            case 1: {
                this.validateInvestment();
                if (this.errors.investment) {
                    return;
                }
                this.currentStep++;
                break;
            }
            case 2: {
                this.validateName();
                this.validateEmail();
                this.validatePhone();
                if (this.errors.name || this.errors.email || this.errors.phone) {
                    return;
                }
                this.currentStep++;
                break;
            }
            case 3: {
                // Turned off for development purposes
                this.validateIdNumber();
                this.validateBirthDate();
                this.validateIdCard();
                console.log('zapiname pasy');
                if (this.errors.idNumber || this.errors.birthDate || this.errors.idCard) {
                    return;
                }
                this.currentStep++;
                break;
            }
            case 4: {
                this.validateStreet();
                this.validateCity();
                this.validateZip();
                //this.validateBankAccount();

                if (this.errors.street || this.errors.city || this.errors.zip || this.errors.bankAccount) {
                    return;
                }
                this.currentStep++;
                break;
            }
            case 5: {
                break;
            }
        }


    },

    previousStep() {
        if (this.currentStep > 1) {
        this.currentStep--;
      }
    },

    resetForm() {
      this.formData = {
        investment: 0,
        name: '',
        phone: '',
        email: '',
        idNumber: '',
        birthDate: '',
        idCard: '',
        street: '',
        city: '',
        zip: '',
        bankAccount: '',
      };
      this.currentStep = 1;
    },
  },
});
