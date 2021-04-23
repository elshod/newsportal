<template>
    <div class="cateogy__page">
        <div class="category__title">
            {{category.title}}
        </div>
        <div class="news">
            <div class="container">
                <div class="row">
                    <div class="col-9 col-md-12">
                        <div class="news__list">
                            <div class="news__box" v-for="post of posts" :key="post.id">
                                <div class="img" :style="`background-image:url(${post.url})`"></div>
                                <div class="text">
                                    <div class="news__cat food">{{category.title}}</div>
                                    <button class="news__fav">
                                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2 0H12C13.1046 0 14 0.89543 14 2V18L7.09495 13L0 18V2C0 0.89543 0.89543 0 2 0Z"
                                                fill="#BCBFC2" />
                                        </svg>
                                    </button>
                                    <a class="news__title" :href="`/category/${category.link}/${post.id}`">
                                        {{post.title}}
                                        </a>
                                    <div class="news__text">{{post.desc}}</div>
                                    <div class="news__stat"> <span class="date">{{post.date}}</span><span class="com">
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M11.1346 11V14L8.36064 11H2.25C1.42157 11 0.75 10.3284 0.75 9.5V2C0.75 1.17157 1.42157 0.5 2.25 0.5H12.75C13.5784 0.5 14.25 1.17157 14.25 2V9.5C14.25 10.3284 13.5784 11 12.75 11H11.1346Z"
                                                    fill="#BCBFC2" /></svg> 342</span>
                                        <span class="like">
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M11.8391 1.96027C11.1701 1.21184 10.2807 0.799988 9.33459 0.799988C8.38831 0.799988 7.59423 1.21184 6.925 1.96027L6.49998 2.63915L6.075 1.96027C5.40597 1.21184 4.61164 0.799988 3.66557 0.799988C2.71953 0.799988 1.82982 1.21184 1.16086 1.96027C-0.220288 3.50548 -0.220288 6.01962 1.16086 7.56423L6.10991 12.3207C6.19083 12.4115 6.29157 12.4672 6.39682 12.4886C6.43211 12.4964 6.46761 12.5 6.50317 12.5C6.64318 12.5 6.78341 12.4403 6.89004 12.3207L11.8391 7.56423C13.2203 6.01962 13.2203 3.50548 11.8391 1.96027Z"
                                                    fill="#BCBFC2" />
                                            </svg>830</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-3 col-md-12">
                        <div class="news__rec">
                            <div class="news__rec--title">Recommended for you</div>
                            <div class="news__rec--list">
                                <div class="item">
                                    <div class="img" style="background-image:url(assets/img/llpict1.jpg)"></div>
                                    <div class="text"> <a class="link" href="#">Office Meetings Leave the Office</a>
                                        <div class="date">15 minuts ago</div>
                                    </div>
                                </div>
                            </div>
                            <div class="news__rec--more"> <a class="link" href="#">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            link: this.$route.params.link,
            p: {}
        }
    },
    watch: {
        $route(to, from) {
            this.link = to.params.link
        }
    },
    computed: {
        category() {
            return this.$store.getters.getByLink(this.link)
        },
        posts(){
            axios.get('http://localhost:3000/posts?category_id='+this.category.id+'&_sort=id&_order=desc').then(
                response => {
                    this.p = response.data
                }
            )
            return this.p
        }
    },
    created(){
        
    }
}
</script>

<style>

</style>