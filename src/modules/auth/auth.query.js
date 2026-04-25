import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginWithEmail, logoutUser } from "./auth.api";
import { useAuthStore } from "../../store/authStore";
import { decodeToken } from "../../utils/authUtils";

export const useLoginMutation = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: loginWithEmail,
    onSuccess: (response) => {
      // response.data contains the accessToken as per change.md
      const token = response.data.accessToken;
      const user = decodeToken(token);
      setAuth(user, token);
    },
  });
};

export const useLogoutMutation = () => {
  const logout = useAuthStore((state) => state.logout);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutUser,
    onSettled: () => {
      logout();
      queryClient.clear();
    },
  });
};
