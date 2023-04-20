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
  },
  mounted() {
    this.getTodo();
  },
}).mount("#app");
