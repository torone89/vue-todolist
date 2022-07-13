
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")

// VERIFICA COLLEGAMENTO VUEJS

console.log('Vue ok', Vue)


// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il 
// testo digitato viene letto e utilizzato per creare un nuovo todo, 
// che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il 
// todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo
//  corrispondente (se done era uguale a false, impostare true e viceversa)

Vue.config.devools = true;

const listaApp = new Vue({
  el: '#root',
  data: {
    // MILESTONE 1
    // Stampare all'interno di una lista, un item per ogni todo.
    // Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
    nuovaTask: "",
    tasks: [
      {
        text: 'Lavarsi i Denti',
        done: false
      },
      {
        text: 'Fare Colazione',
        done: true
      },
      {
        text: 'Pulire Camera',
        done: false
      },
      {
        text: 'Rifare il letto',
        done: true
      }
    ],

  },


  // MILESTONE 2
  // Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, 
  // il todo viene rimosso dalla lista.
  methods: {
    removeTask(index) {
      this.tasks.splice(index, 1)
    },
    // MILESTONE 3
    // Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il 
    // testo digitato viene letto e utilizzato per creare un nuovo todo, 
    // che quindi viene aggiunto alla lista dei todo esistenti.
    addTask() {
      this.tasks.push(this.nuovaTask)
      // Reset Html
      this.newTask = ""
    }
  },

})
