export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

type FunctionType = Exclude<SomeTypes, string | number>;
type NunFunctionType = Exclude<SomeTypes, DebugType>;
type ExcludingFunction = Exclude<SomeTypes, Function>;

type FunctionByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
type NonNullableTYpes = NonNullable<NullableTypes>;
