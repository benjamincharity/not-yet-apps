import { useQuery } from 'react-query';

const BING_IMAGE_API = `https://api.bing.microsoft.com/v7.0/images/search`;

export const searchKeys = {
    all: ['search'] as const,
    search: (params: any) => [...searchKeys.all, 'results', params] as const,
};

export function useGetSearchResults(params: any) {
    return useQuery(searchKeys.search(params), async () => {
        const data = await fetchTodoById(todoId)
        return data
    })
}
