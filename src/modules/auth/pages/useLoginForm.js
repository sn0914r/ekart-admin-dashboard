import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../auth.schema";
import { useLoginMutation } from "../auth.query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { decodeToken } from "../../../utils/authUtils";

export const useAuthForm = () => {
  const navigate = useNavigate();
  const { mutateAsync: loginMutation, isPending } = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await loginMutation(data);
      const token = response.data.accessToken;
      const user = decodeToken(token);

      if (user?.role === "admin") {
        toast.success("Successfully logged in!");
        navigate("/");
      } else {
        // Even if login was successful, if they aren't admin, they can't stay
        toast.error("Access denied. Admin privileges required.");
        navigate("/forbidden");
      }
    } catch (error) {
      toast.error(
        error.message || "Failed to login. Please check your credentials.",
      );
    }
  };

  return {
    register,
    errors,
    isPending,
    onSubmit: handleSubmit(onSubmit),
  };
};
