// [IMPORT] Module
    import { createStore } from 'vuex'

    import auth from './modules/auth'
    import media from './modules/media'
//  

// [EXPORT] Store
    export default createStore({
        modules:{
            auth: auth,
            media:media
        }
    })
//