<template>
  <div class="home">
    <div class="fav">
      <div class="container">
        <div class="fav__list">
          <div class="row">
            <div class="col-3 col-md-6" v-for="topp of topposts" :key="topp.id">
              <div class="fav__box"> 
                <a class="link" :href="'/category/'+getLinkCategory(topp.category_id)+'/'+topp.id">
                  {{topp.title}}
                </a>
                <div class="fav__img" :style="`background-image:url(${topp.url})`"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    name: 'Home',
    components: {

    },
    methods: {
      getLinkCategory(id){
            let cat = this.$store.getters.getById(id)
            return cat.link
        },
    },
    data() {
      return {
        topposts:{}
      };
    },
    created(){
        axios.get('http://localhost:3000/posts?_sort=id&_order=desc&top=true&_limit=4').then(
                response => {
                    this.topposts = response.data

                }
            )
      }
  }
</script>