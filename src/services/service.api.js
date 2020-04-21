import { uriConstants } from './../constants';
import { baseService } from './service';

export function signup(reqBody){
    let url = uriConstants.SIGN_UP_API;
    const dataJson = JSON.stringify(reqBody);
    return baseService.post(url, dataJson);
}

export function login(reqBody){
    let url = uriConstants.LOGIN_API;
    const dataJson = JSON.stringify(reqBody);
    return baseService.post(url, dataJson);
}

export function addCategory(reqBody){
    let url = uriConstants.ADD_CATEGORY_API;
    const dataJson = JSON.stringify(reqBody);
    return baseService.post(url, dataJson);
}