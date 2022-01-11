import {limit } from "../constants"
export function getApi( data) {
    return new Promise((resolve, reject) => {
        const url =`http://localhost:3001?limit=${limit}&activePage=${data.activePage}`
        fetch(url, {
            method:'GET',
          })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
export function createApi( data) {
    return new Promise((resolve, reject) => {
        const url =`http://localhost:3001`
        fetch(url, {
            method:'POST',
            body: data.form
          })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
export function updateApi( data) {
    return new Promise((resolve, reject) => {
        const url =`http://localhost:3001`
        fetch(url, {
            method:'PUT',
            body: data.form
          })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
export function deleteApi( data) {
    return new Promise((resolve, reject) => {
        const url =`http://localhost:3001/?id=${data.id}`
        fetch(url, {
            method:'DELETE',
          })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
    });
}
