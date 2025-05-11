export interface AuthContextProps {
    user: boolean;
    loading: boolean;
    logout: () => void;
}