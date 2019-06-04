import NetInfo from '@react-native-community/netinfo';

export const Settings = {
    isOnline : true,
}

export const RootPath = {
    basePath : "/",
    domainPath : `${Settings.isOnline ? "https://weebonime.jalanpelajar.com/" : "http://192.168.43.233/weebonime/" }`
}

export const request = (path, method, data, formData) => {
    const promise = new Promise((resolve, reject) => {
        let url = `${RootPath.domainPath}${path}`;
        let option = {};
        if(method === "POST" || method === "post" || method === "PUT" || method === "put"){
            option.method = method
            option.body = JSON.stringify(data);
        } else {
            option.method = method
        }
        if(formData){
            option.body = data;
        } else {
            option.headers = {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }

        NetInfo.fetch().then(state => {
            if(state.isConnected){
                fetch(url, option)
                .then((response) => {
                    if(response.ok){
                        resolve(response.json());
                    } else {
                        resolve(response.json());
                    }
                }).catch((error) => {
                    resolve(error);
                })
            } else {
                let netFailed = {
                    status : false,
                    statusCode : 503,
                    message : "Koneksi internet error!"
                }
                resolve(netFailed);
            }
        });
    })
    return promise;
}

const getAnimes = (data = {}) => {
    let params = 0; 
    for(let key in data){
        params++;
    }
    let paramsSeparator = `${params > 0 ? '?' : ''}`;
    let anime_id = `${typeof(data.anime_id) !== "undefined" ? params > 1 ? "&anime_id="+data.anime_id : "anime_id="+data.anime_id : ""}`;
    let anime_mal_id = `${typeof(data.anime_mal_id) !== "undefined" ? params > 1 ? "&anime_mal_id="+data.anime_mal_id : "anime_mal_id="+data.anime_mal_id : ""}`;
    let limit = `${typeof(data.limit) !== "undefined" ? params > 1 ? "&limit="+data.limit : "limit="+data.limit : ""}`;
    let offset = `${typeof(data.offset) !== "undefined" ? params > 1 ? "&limit_offset="+data.offset : "limit_offset="+data.offset : ""}`;
    let order = `${typeof(data.order) !== "undefined" ? params > 1 ? "&order_by="+data.order : "order_by="+data.order : ""}`;
    let genre = `${typeof(data.genre) !== "undefined" ? params > 1 ? "&genre="+data.genre : "genre="+data.genre : ""}`;
    let listed = `${typeof(data.listed) !== "undefined" ? params > 1 ? "&listed="+data.listed : "listed="+data.listed : ""}`;
    let path = `api/animes${paramsSeparator}${anime_id}${anime_mal_id}${limit}${offset}${order}${genre}${listed}`;
    return request(path);
}

const API = {
    getAnimes
}

export default API;