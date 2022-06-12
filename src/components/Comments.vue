<template>
  <div>
    <h5 class="mt-4" v-if="hasComments">Comentários</h5>

    <div id="comment-article">
      <div v-for="comment in comments" v-bind:key="comment.id">
        <p>{{ comment.body }}</p>
        <b-col lg="4" class="pb-2">
          <b-button size="sm" v-on:click.prevent="destroyComment(comment.id)">
              Delete
              </b-button>
        </b-col>
      </div>
    </div>

    <form>
      <h5>Adicione um comentário:</h5>
      <textarea id="content_comment" v-model="comments.body"></textarea>
      <b-col lg="4" class="pb-2 mt-3">
        <b-button size="sm" v-on:click.prevent="add"
          >Adicione um comentário</b-button
        >
      </b-col>
    </form>
  </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number, 
            required: true
        }
    },
  data() {
    return {
      comments: [],
      URL: "https://morgana-blog-api.herokuapp.com/"
    };
  },
    computed: {
      hasComments(){
         return this.comments.length > 0          
      }
  },
  created() {
    this.$http
      .get(this.URL + "articles/" + this.id + "/comments")
      .then(function (data) {
        this.comments = data.body;
      });
  },
  methods: {
    add: function () {
      this.$http
        .post(this.URL + "articles/" + this.id + "/comments", {
          body: this.comments.body,
        })
        .then(function (data) {
          this.comments = data.body;
        });
    },
    destroyComment: function (id) {
      this.$http
        .delete(this.URL + "articles/" + this.id + "/comments/" + id)
        .then(function (data) {
          this.comments = data.body;
        });
    }
  },
};
</script>

<style scoped>
input, textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
</style>