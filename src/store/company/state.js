const state={
    token: localStorage.getItem('access_token') || null,
    company:null,
    is_live:null

};

export default {
    state
}