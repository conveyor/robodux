import createLoader from '../src/create-loader';

const one = createLoader({ name: 'SLICE' });
// $ExpectType { loading: (payload?: Partial<{ message: string; timestamp: number; meta: { [key: string]: any; }; }> | undefined) => Action<Partial<{ message: string; timestamp: number; meta: { [key: string]: any; }; }>, string>; success: (payload?: Partial<...> | undefined) => Action<...>; error: (payload?: Partial<...> | undefin...
one.actions;
// $ExpectType (payload?: Partial<{ message: string; timestamp: number; meta: { [key: string]: any; }; }> | undefined) => Action<Partial<{ message: string; timestamp: number; meta: { [key: string]: any; }; }>, string>
one.actions.loading;
one.actions.loading();
// $ExpectType (payload?: Partial<{ message: string; timestamp: number; meta: { [key: string]: any; }; }> | undefined) => Action<Partial<{ message: string; timestamp: number; meta: { [key: string]: any; }; }>, string>
one.actions.success;
one.actions.success();
// $ExpectType (payload?: Partial<{ message: string; timestamp: number; meta: { [key: string]: any; }; }> | undefined) => Action<Partial<{ message: string; timestamp: number; meta: { [key: string]: any; }; }>, string>
one.actions.error;
one.actions.error();
// $ExpectType Reducer<LoadingItemState<string>, Action<any, string>>
one.reducer;

const withPayload = createLoader({ name: 'SLICE' });
// $ExpectType { loading: (payload?: Partial<{ message: string; timestamp: number; meta: { [key: string]: any; }; }> | undefined) => Action<Partial<{ message: string; timestamp: number; meta: { [key: string]: any; }; }>, string>; success: (payload?: Partial<...> | undefined) => Action<...>; error: (payload?: Partial<...> | undefin...
withPayload.actions;
withPayload.actions.loading({ message: 'hi' });
withPayload.actions.success({ message: 'nice' });
withPayload.actions.error({ message: 'hi' });
// $ExpectType Reducer<LoadingItemState<string>, Action<any, string>>
withPayload.reducer;

const two = createLoader<string | Error>({
  name: 'SLICE',
  initialState: {
    message: '',
    error: false,
    success: false,
    loading: false,
    lastRun: 0,
    lastSuccess: 0,
    meta: {},
  },
});
two.actions;
two.actions.error({ message: new Error('wow') });
two.actions.loading({ message: 'loading' });
// $ExpectType Reducer<LoadingItemState<string | Error>, Action<any, string>>
two.reducer;
