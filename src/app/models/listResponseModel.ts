import { ResponseModel } from "./responseModel";

export interface ListRepsonseModel<T> extends ResponseModel{
data:T[]
}