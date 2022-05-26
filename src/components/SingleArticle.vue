<template>
  <div id="single-article">
    <div v-if="!edit">
      <h1>{{ blog.title }}</h1>
      <article>{{ blog.body }}</article>
    </div>

    <div v-if="edit">
      <form>
        <input type="text" id="title" name="title" v-model="blog.title" required />
        <textarea id="content" v-model="blog.body"></textarea>
      </form>
    </div>

    <div class="d-flex flex-nowrap justify-content-start">
      <b-button class="m-2" size="sm" v-on:click.prevent="editArticle">
        Editar
      </b-button>
      <b-button class="m-2" size="sm" v-on:click.prevent="destroyArticle">
        Delete
      </b-button>
    </div>

    <app-comments v-bind:id='id'></app-comments>

  </div>
</template>

<script>
import Comments from '@/components/Comments.vue'

export default {

components: {
    'app-comments': Comments
  },

  data() {
    return {
      id: this.$route.params.id,
      blog: {
        title: "",
        body: "",
      },
      edit: false
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/articles/" + this.id)
      .then(function (data) {
        this.blog = data.body;
      });
  },
  methods: {
    editArticle: function () {
      if (this.edit == false) this.edit = true;
      else {
        this.edit = false;
        this.$http
          .put("http://localhost:3000/articles/" + this.id,
          {
              title: this.blog.title,
              body: this.blog.body,
              userId: 1
            }
        )
          .then(function (data) {
            this.blog = data.body;
          });
      }
    },
    destroyArticle: function () {
      this.$http
        .delete("http://localhost:3000/articles/" + this.id)
        .then(function () {
          this.$router.push("/");
        });
    },
    
  },
};
</script>

<style scoped>
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
</style>
