<template>
    <div>
        <!-- Search Engine -->
        <div class="row justify-content-center">
            <div class="col-md-6 mt-3">
                <div class="input-group mb-3">
                    <input type="text" class="form-control">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- List Card atau Post List -->
        <div class="row justify-content-center">
            <div class="col-md-8">
                <h4>Post List</h4>
                <div class="card mb-3"
                    v-for="(post, kusus) in post" :key="kusus"
                >
                <!-- v-for = "(post(render data di export default), kusus) in post(yang di render data di export default)" :key="kusus(sesuai dengan parameter ke dua dari v-for)" -->
                    <div class="card-body">
                        <h5 class="card-tittle">{{post.title}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{post.published ? 'Publish' : 'Unpublished'}}</h6>
                        <p class="card-text">{{post.description}}</p>
                        <a href="#" class="card-link btn btn-sm btn-primary">Edit</a>
                    </div>
                </div>
                <button class="btn btn-md btn-danger m-3">
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
        }
    },

    mounted(){
        this.retrivePost();
    }
}
</script>