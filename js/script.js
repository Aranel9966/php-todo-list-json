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
    //////////////////
    addTodo() {
      //   this.todoList.push(this.newTodo);
      this.newTodo = "";
      //?
      let data = {
        newTodo: "",
      };

      data.newTodo = this.newTodo;
      axios
        .post("./server.php", data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          console.log("prova");
          // posso ricaricare i todo
          this.getTodo();
        });
    },
  },
  mounted() {
    this.getTodo();
  },
}).mount("#app");
