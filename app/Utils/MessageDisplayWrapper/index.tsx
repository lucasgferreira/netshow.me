import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";
import ResponseStatus from "../ResponseStatus";
import Disconnected from "@/app/components/utils/Disconnected";
import { useApp } from "@/app/contexts/app";

type MessageType = "ERROR" | "DELETE" | "SAVE" | "ADD" | "SUCCESS" | "EMPTY";

interface MessageDisplayWrapperProps {
  loading?: boolean | null;
  error?: Error | any;
  successMessage?: string | null;
  emptyMessage?: string | null;
  onRetry?: () => void;
  onContinue?: () => void;
  continueLabel?: string;
  children: React.ReactNode;
  typeMessage?: MessageType | any;
}

const MessageDisplayWrapper: React.FC<MessageDisplayWrapperProps> = ({
  loading = false,
  error,
  successMessage,
  emptyMessage,
  onRetry,
  onContinue,
  continueLabel,
  children,
  typeMessage,
}) => {
  const { networkError } = useApp();

  if (networkError) return <Disconnected />;

  if (error) {
    let message =
      error?.response?.data?.mensagem ||
      error?.response?.data?.message ||
      "Ocorreu um erro inesperado!";

    if (error?.response?.status == "403" && !error?.response?.data?.mensagem) {
      message = "Ocorreu um erro inesperado!";
    }
    return (
      <ResponseStatus
        loading={loading}
        typeMessage={typeMessage}
        route={{
          params: {
            errors: error?.response?.data?.errors,
            title: message,
            buttonLabel: "Tentar Novamente",
            type: "ERROR",
            onPressTryAgain: onRetry,
          },
        }}
      />
    );
  }

  if (successMessage) {
    return (
      <ResponseStatus
        loading={loading}
        route={{
          params: {
            title: successMessage,
            buttonLabel: continueLabel || "Continuar",
            type: "SUCCESS",
            onPressTryAgain: onContinue,
          },
        }}
      />
    );
  }

  if (emptyMessage) {
    return (
      <ResponseStatus
        loading={loading}
        typeMessage={typeMessage}
        route={{
          params: {
            errors: error?.response?.data?.errors,
            title: emptyMessage || "Nenhum item encontrado!",
            buttonLabel: "Tentar Novamente",
            type: "EMPTY",
            onPressTryAgain: onRetry,
          },
        }}
      />
    );
  }

  return <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>;
};

export default MessageDisplayWrapper;
