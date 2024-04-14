import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Loader = () => {
    const loading = useSelector((state: RootState) => state.auth.loading);
    if (!loading) return null;
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
        </div>
    );
};

export default Loader;
