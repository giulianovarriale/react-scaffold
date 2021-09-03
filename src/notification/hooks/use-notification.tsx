interface IHookApi {
  success: (message: string) => void;
  error: (message: string) => void;
}

export default function useNotification(): IHookApi {
  return {
    success(message: string) {},
    error(message: string) {},
  };
}
