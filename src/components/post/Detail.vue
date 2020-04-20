<template>
    <div>
        <div class="container">
            <a href="/" class="btn btn-outline-warning m-3 ml-auto">Back</a>
            <h3 class="text-center">{{post.title}}</h3>
                <h4 class="text-center mt-5 mb-3">Description</h4>
            <div class="row">
                <div class="col text-center">
                    <p class="text-justify">{{post.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PostServices from '../../services/PostServices';

export default {
    name: 'posts-detail',
    data(){
        return{
            post: {
                id: null,
                title: "",
                description: "",
                published: false
            },
            message: ''
        }
    },

    mounted(){
        this.getPost(this.$route.params.id);
    },

    methods: {
         getPost(id){
            PostServices.get(id)
            .then((result) => {
                this.post = result.data;
                console.log(result.data);
            }).catch((err) => {
                console.log(err);
            })
        }
    }
}
</script>
