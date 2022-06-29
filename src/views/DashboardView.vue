<template>
  <section class="dashboard-view-component section">
    <article class="box">
      <h1 class="is-size-4">Bienvenue {{ $store.getters.userinfo.name }}</h1>
    </article>
  </section>
  <section class="dashboard-view-component section" v-if="cmpAlbums">
    <article class="box" v-for="(album,index) in cmpAlbums" :key="album.id">
      <h1>Titre album : {{album.title}}</h1>
      <h2><router-link :to="{ name: 'SingleView' ,params: { type: 'album', id:index } }">Voir </router-link></h2>
    </article>
      <!-- 
        TODO: Display list of albums
        - Get album list from the store
        - Generate a loop 'v-for' on album list
        - Display a child compoenent 'BasePushAlbum.vue':
          - title
          - nombers of snapshoots
          - link to display album
      -->
      <!-- Display list of snapshoot -->
      <ul>
        <li 
          class="mb-4 box"
          v-for="(item, idx) in this.$store.getters.snapshootlist" 
          :key="`item-${idx}`"
        >
          <BaseImage 
            :item="item"
            @onDisplaySnapshoot="$router.push({ name: 'SingleView', params: { id: $event } })"
          />
        </li>
      </ul>
  </section>
</template>

<script>
/* eslint-disable */
/* 
  [IMPORT] Modules/components
*/
  import BaseImage from '../components/base/BaseImage.vue';
  import { dexieDb } from '@/services/dexie.service'
//

/* 
  [CTRL] App.vue
  Define compoenent controller
*/
  export default {
    name: 'DashboardView',

    // Used to define properties class
    data(){
      return {
        cmpAlbums:null,
      }
    },

    /* 
      [VUE] Methods
      Used to add functionnalies
    */
      methods: {},
    //

    /* 
      [VUE] Component
      Used to inject child components
    */
      components: {
        BaseImage
      },
    //

    mounted: async function(){
      /* 
        [DEXIE] Save
        Save API response in Dexie
      */
        // Save new snapshot in IndexDB with Dexie.js
        this.cmpAlbums = await dexieDb.albums.toArray();
      //
    }
  }
//
</script>