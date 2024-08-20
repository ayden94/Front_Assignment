import { getColumns } from "../util/getColumns";
import { useGlobalState } from "./useGlobalState";

export const useColumns = useGlobalState(getColumns(20));
