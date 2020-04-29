<template>
    <div>
        <div class="container">
            <h3 class="text-center">Update</h3>
            <a href="/" class="btn btn-outline-warning m-3 ml-auto" >Back</a>
        <form action="#" @submit.prevent>
            <div class="form-group">
                <label for="">Tittle</label>
                <input type="text" id="title" class="form-control" v-model="post.title">
            </div>
            <div class="form-group">
                <label for="">Description</label>
                <textarea id="" cols="10" rows="4" class="form-control" v-model="post.description"></textarea>
            </div>
            <div class="form-group">
                <label for="">Status: {{post.published}}</label>
            </div>
            <button  @click="postUpdate()" class="btn btn-outline-success m-1">Update</button>
            
            <button class="btn btn-outline-primary m-1"
                v-if="post.published"
                @click="postPublished(false)"
            >Unpublish</button>

            <button class="btn btn-outline-primary m-1"
                v-else @click="postPublished(true)"
            >Publish</button>
            
            <button  @click="postDelete()" class="btn btn-outline-danger m-1">Delete</button>
        </form>
        <p>{{message}}</p>
        </div>
    </div>
</template>
<script>
import PostServices from '../../services/PostServices';

export default {
     name: 'posts-update',
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
        },

        postUpdate(){
            PostServices.update(this.post.id, this.post)
            .then((result) => {
                this.message = result.data.message;
                this.$router.push({name: 'posts'});
                console.log(result.data);
            }).catch((err) => {
                console.log(err);
            })
        },
        
        postPublished(status){
           this.post.published = status;
           this.postUpdate();
        },
        
        postDelete(){
            PostServices.delete(this.post.id)
            .then((result) => {
                this.message = result.data.message;
                this.$router.push({name: 'posts'});
                console.log(result.data);
            }).catch((err) => {
                console.log(err);
            })
        }
    }
}
</script>