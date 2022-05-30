<template>
    <div class="addBlog">
        <form v-if="!submitted">
            <h2> Adicione um artigo</h2>
            <label>Título:</label>
            <input type="text" id="title" v-model="blog.title" required>
            <label>Conteúdo</label>
            <textarea id="content" v-model="blog.body"></textarea>
            <b-col lg="4" class="pb-2 mt-3">
                <b-button size="sm" v-on:click.prevent="post">Adicione um artigo</b-button>
            </b-col>
        </form>
        <div v-if="error" class="alert alert-danger" role="alert">
            Something went wrong...
        </div>

    </div>
</template>

<script>

export default{

  data(){
    return{
       blog: {
            title: "",
            body: "",
       },
       submitted: false,
       error: false
    }
  },
  methods:{
      post: function (){
          this.$http.post('http://localhost:3000/articles', {
              title: this.blog.title,
              body: this.blog.body,
              userId: 1
          }).then(function(data){
              this.$router.push('/blog/' + data.body.id)
              this.error = false
          }).catch(() => this.error = true);
      }
  }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}

#add-blog{
    margin: 20px auto;
    max-width: 500px;
}

label{
    display: block;
    margin: 20px 0 10px;
}

input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}

</style>
