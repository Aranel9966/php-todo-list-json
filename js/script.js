const { createApp } = Vue;

createApp({
  data() {
    return {
      todoList: [],
      newTodo: "",
    };
  },
  methods: {
    // tramite chiamata axios vado a prendere l'array json nel server
    getTodo() {
      axios.get("./server.php").then((response) => {
        //compilo il mio array di js
        this.todoList = response.data;
      });
    },

    addTodo() {
      let data = {
        newTodo: this.newTodo,
      };
      axios
        .post("./server.php", data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log(response);
          // posso ricaricare i todo
          this.getTodo();
          this.newTodo = "";
        });
    },
  },
  mounted() {
    this.getTodo();
  },
}).mount("#app");
