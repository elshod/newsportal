<template>
    <div class="adm">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <ul class="adm__menu">
                        <li v-for="(link,index) of links" :key="index">
                            <router-link :to="link.l" active-class="active" exact="">
                                {{link.t}}
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-9">
                    <router-view></router-view>
                </div>
            </div>
        
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                links: [{
                        t: 'Bosh sahifa',
                        l: '/admin'
                    },
                    {
                        t: 'Bo`limlar',
                        l: '/admin/category'
                    },
                    {
                        t: 'Maqolalar',
                        l: '/admin/posts'
                    }
                ]
            }
        }
    }
</script>

<style>
    ul.adminmenu {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

    ul.adminmenu a {
        margin: 0px 10px;
        text-decoration: none;
    }

    .admin {
        background-color: #fff;
        margin-bottom: 30px;
        padding: 30px;
    }

    .admin table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 30px;
    }

    .admin table td {
        border: 1px solid #ccc;
    }
</style>>

</style>