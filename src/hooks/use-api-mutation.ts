import { useState } from 'react';
import { useMutation } from 'convex/react';
import type { FunctionReference } from 'convex/server';

export const useApiMutation = (mutationFunction: FunctionReference<'mutation'>) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunction);

  const mutate = (payload: any) => {
    setPending(true);
    return apiMutation(payload)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => setPending(false));
  };

  return {
    mutate,
    pending,
  };
};
