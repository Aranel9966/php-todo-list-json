const { createApp } = Vue;

createApp({
  data() {
    return {
      todoList: [],
      newTodo: "",
    };
  },
  methods: {
    //funzione che tramite chiamata axios vado a prendere l'array json nel server
    getTodo() {
      axios.get("./server.php").then((response) => {
        //compilo il mio array di js
        this.todoList = response.data;
      });
    },
    //funzione per agiungere un nuovo todo
    addTodo() {
      let data = {
        newTodo: this.newTodo,
      };
      axios
        .post("./server.php", data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          // posso ricaricare i todo
          this.getTodo();
          this.newTodo = "";
        });
    },
    //funzione per il togle
    togleTodo(index) {
      let data = {
        togleTodo: index,
      };
      axios
        .post("./server.php", data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log(response);
          // posso ricaricare i todo
          this.getTodo();
        });
    },
    //funzione per rimuovere un todo
    removeTodo(index) {
      let data = {
        indexTodo: 0,
      };
      data.indexTodo = index;
      axios
        .post("./server.php", data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          // posso ricaricare i todo
          this.getTodo();
        });
    },
  },
  mounted() {
    this.getTodo();
  },
}).mount("#app");
