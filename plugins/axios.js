export default function({$axios,store}){
    $axios.onError(error=>{
        if (error.response.state === 422) {
            store.dispatch("validation/setErrors",error.response.data.errors);
        }
        return Promise.reject(error);
    });

    $axios.onRequest(()=>{
        store.dispatch("validation/clearErrors");
    });
}