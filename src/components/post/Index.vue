<template>
    <div>
        <!-- Search Engine -->
        <div class="row justify-content-center">
            <div class="col-md-6 mt-3">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" v-model="title">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary " type="button" @click="searchTitle">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- List Card atau Post List -->
        <div class="row justify-content-center" @submit.prevent>
            <div class="col-md-8">
                <a href="/add" class="btn btn-outline-secondary m-3 ml-auto">Create Post</a>
                <h3 class="text-center mb-4">Post List</h3>
                <div class="card mb-3"
                    v-for="(post, kusus) in post" :key="kusus"
                >
                <!-- v-for = "(post(render data di export default), kusus) in post(yang di render data di export default)" :key="kusus(sesuai dengan parameter ke dua dari v-for)" -->
                    <div class="card-body">
                        <h5 class="card-tittle">{{post.title}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{post.published ? 'Publish' : 'Unpublished'}}</h6>
                        <p class="card-text">{{post.description}}</p>
                        <a :href="'/post/' +post.id" class="card-link btn btn-sm btn-outline-primary">Edit</a>
                        <a :href="'/detail/' +post.id" class="card-link btn btn-sm btn-outline-info">Detail Post</a>
                    </div>
                </div>
                <button @click="deleteAll()" class="btn btn-md btn-outline-danger m-3 ml-auto">
                    <span>Remove All</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>

import PostServices from '../../services/PostServices';

export default {
    name: 'posts-list',
    data(){
        return{
            post:[],
            title:''
        }
    },

    methods: {
        retrivePost(){
            PostServices.getAll()
            .then((data) => {
                this.post = data.data
                console.log(data.data);
            }).catch((err) => {
                console.log(err);
            })
        },
        
        deleteAll(){
            PostServices.deleteAll()
            .then(() => {
                this.retrivePost();
            }).catch((err) => {
                console.log(err);
            })
        },

        searchTitle(){
            PostServices.findByTitle(this.title)
            .then((result) => {
                this.post = result.data;
            }).catch((err) =>{
                console.log(err);
            })
        }
    },

    mounted(){
        this.retrivePost();

    }
}
</script>