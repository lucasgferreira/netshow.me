import React, {ReactNode} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import ResponseStatus from '../ResponseStatus';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: any;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <ResponseStatus
      route={{
        params: {
          title: error?.message || 'Ocorreu um erro inesperado!',
          buttonLabel: 'Tentar Novamente',
          type: 'ERROR',
          onPressTryAgain: () => {
            resetErrorBoundary();
          },
        },
      }}
    />
  );
};

export default ErrorFallback;
