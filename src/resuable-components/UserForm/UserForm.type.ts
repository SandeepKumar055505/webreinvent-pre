interface UserFormType {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (event: React.FormEvent) => Promise<void>;
    isLoading: boolean;
    formType: string;
}

export type {
    UserFormType
}