import { UseQueryOptions } from "@tanstack/react-query";

export type CustomUseQueryOptions = Omit<
UseQueryOptions<any, any, any, any>,
'queryKey' | 'queryFn'
>;