import type { ReactNode } from "react";

export const trpc = {
  useUtils: () => ({
    invalidate: async () => {},
  }),
  auth: {
    me: {
      useQuery: () => ({ data: null, isLoading: false, error: null, refetch: async () => {} }),
      useMutation: () => ({ mutate: () => {}, isPending: false }),
    },
    logout: {
      useMutation: () => ({ mutate: () => {}, isPending: false }),
    },
  },
  reservation: {
    create: {
      useMutation: () => ({ mutate: () => {}, isPending: false }),
    },
  },
} as any;

export function TRPCProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
