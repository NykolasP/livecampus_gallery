<template>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>App</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    <header class="header-app-component">
        <div v-if="cmpUserinfo">
        <ul class="navbar">
            <li class="navbar-item"><router-link :to="{ name: 'DashboardView' }">Dashboard </router-link></li>
            <li class="navbar-item"><router-link :to="{ name: 'CreateView' ,params: { type: 'snapshoot' } }">Créer Snapshoot </router-link></li>
            <li class="navbar-item"><router-link :to="{ name: 'CreateView' ,params: { type: 'album' } }">Créer Album </router-link></li>
            <li class="navbar-item"><button class="button" v-text="`Logout`" @click.prevent="$emit('onLogout', true)" /></li>
        </ul>
        <p 
          v-if="cmpSnapshootlist.length"
        >
          Nombre de photos <b>{{cmpSnapshootlist.length}}</b>
        </p>
        </div>
    </header>
</template>

<script>
/* 
  [CTRL] App.vue
  Define compoenent controller
*/
  export default {
    name: 'HeaderApp',

    /* 
      [VUE] Props
      Data binding from parent component
    */
      props: {
        userinfo: {
          type: Object,
          required: false,
          default: () => null
        },
        snapshootlist: {
          type: Array,
          required: false,
          default: () => []
        }
      },
    //

    /* 
      [VUE] Computed
      Used to have version of property value
    */
      computed: {
        cmpUserinfo: function(){ return this.userinfo },
        cmpSnapshootlist: function(){ return this.snapshootlist },
        cmpAlbumlist: function(){ return this.Albumlist },
      },
    //
  }
//
</script>
