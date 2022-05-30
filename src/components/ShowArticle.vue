<template>
    <div id="show-articles">
        <h1>Artigos:</h1>
        <div v-for="blog in blogs" v-bind:key="blog">
            <router-link v-bind:to="'/blog/' + blog.id" class="link"><h3 class="single">{{blog.title}}</h3></router-link>
        </div>
        <h3 v-if='error'>Ops, something got wrong. Sorry!</h3>
    </div>
</template>

<script>
export default {
    data(){
        return {
            blogs: [],
            error: false
        }
    },
    methods: {

    },
    created(){
        this.$http.get('http://localhost:3000/articles').then(function(data){
            this.blogs = data.body
        }).catch(() => this.error = true)
    }
}
</script>

<style scoped>

.single{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border-radius: 10px;
}

.link{
    text-decoration: none;
    color: inherit;
}
</style>